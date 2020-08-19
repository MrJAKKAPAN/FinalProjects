import React, { Component } from 'react';
import { Link } from "react-router-dom";
import _, { result } from "lodash";
// import moment from "react-moment";
import moment from "moment-timezone";
import numeral from "numeral";
import NumberFormat from "react-number-format";

import {
  Table,
  Space,
  Popconfirm,
  Button,
  Layout,
  Menu,
  Spin,
  Input,
  Row,
  Col,
} from "antd";
import { DeleteOutlined, EditOutlined, AudioOutlined } from "@ant-design/icons";
import "./revenue.scss";
import { httpClient } from "../../utils/HttpClient";

const { Content } = Layout;
const { Column, ColumnGroup } = Table;
const { Search } = Input;



class Revenue extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        result: [],
        pagination: {
          current: 1,
          pageSize: 10,
        },
        loading: true,
      };
    }
  }
  
  componentDidMount() {
    httpClient
      .get("http://localhost:8085/api/v1/revenue/revenue/")
      .then((e) => this.setState({ result: e.data }));
        console.log(this.state);
  }

  // onChange = (cus_fname) => {
    // if(cus_fname === "" ) {
    //     this.componentDidMount()
    // }else{
    // httpClient.get(`http://localhost:8085/api/v1/customer/customer/keyword/${cus_fname}`)
    // .then((e) => this.setState({ result: e.data}));
    // }
// };

// onDelete = async(id) => {
//   console.log(id);
//   await httpClient.delete(
//       `http://localhost:8085/api/v1/customer/customer/${id}`
//       );
//       await this.componentDidMount();
// };

render() {
  
      const timeConverter = rawDate => moment(rawDate).tz("Thai/Bangkok").format('L');
    
      // const num = new Number();
      // return("$" + num.toFixed(2));

      const { pagination } = this.props;
      const columns = [
        {
          title: "ID",
          dataIndex: "id",
          align: "center",
          width: "60px",
          height: "30px",
        },
        {
          title:"วันที่บันทึก",
          dataIndex:"createdAt",
          align:"center",
          width:"200",
          render: createdAt => timeConverter(createdAt)
        },
        {
          title:"อ้างอิงใบเสร็จเลขที่ ",
          dataIndex:"re_reference",
          align:"center",
          width:"200"
        },
        {
          title:"ชื่อบริการ/สินค้า",
          dataIndex:"re_pro_name",
          align:"center",
          width:"350",
        },
        {
          title:"รายละเอียด",
          dataIndex:"re_detail",
          align:"center",
          width:"100",
        },
        {
          title:"รหัสสมาชิก (ถ้ามี)",
          dataIndex:"re_cus_name",
          align:"center",
          width:"200",
        },
        {
          title:"ประเภทรับ-จ่าย",
          dataIndex:"re_type",
          align:"center",
          width:"350",
        },
        {
          title:"ราคาต่อหน่วย",
          dataIndex:"re_price",
          align:"center",
          width:"300",
          render: value => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        },
        {
          title:"จำนวน",
          dataIndex:"re_number",
          align:"center",
          width:"300",
          render: value => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        },
        {
          title:"หน่วยนับ", 
          dataIndex:"re_number",
          align:"center",
          width:"300",
          render: value => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        },
        {
          title:"รหัสพนักงาน",
          dataIndex:"ad_id",
          align:"center",
          width:"300",
        },
        {
          title:"Action",
          align:"center",
          width:"200",
          align:"center",
          render:(text, record) => (
            <Space>
              <Button
                type="primary"
                onClick={() =>
                  this.props.history.push(
                    `/revenue-edit/${record.id}`
                  )
                }
              >
                <a style={{ color: "white" }}>
                  <EditOutlined />
                </a>
              </Button>

              <span>|</span>

              <Popconfirm
                title="คุณต้องการลบข้อมูลหรือไม่"
                // onConfirm={() => this.onDelete(record.id)}
                okText="ใช่"
                cancelText="ไม่"
              >
                <Button type="primary" danger>
                  <DeleteOutlined />
                </Button>
              </Popconfirm>
            </Space>
          ),
        },
      ];
        return (
      <div className="content-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-12">
              sdsdsds
              <div className="card">
                <div className="card-body">
                  <Row>
                    <Col span={4}>
                      <Button
                        type="success"
                        onClick={() =>
                          this.props.history.push(`/revenue-create/`)
                        }
                        style={{
                          float: "left",
                          backgroundColor: "green",
                          color: "white",
                          border: "green",
                          width: "100px",
                        }}
                      >
                        เพิ่ม
                      </Button>
                    </Col>
                    <Col span={12}></Col>
                    <Col span={8}>
                      <Search
                        placeholder="ค้นหาชื่อลูกค้า "
                        onChange={(e) => this.onChange(e.target.value)}
                        style={{ width: 300, float: "right" }}
                        enterButton
                      />
                    </Col>
                  </Row>
                  <Table
                    title={() => 'Header'}
                    bordered
                    dataSource={this.state.result}
                    columns={columns}
                    pagination={pagination}
                    size="small"
                    style={{ marginTop: "10px" }}
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// export const timeConverter = rawDate =>
//   moment(rawDate)
//     .tz("America/Chicago")
//     .format("MMM DD YYYY, h:mm:ss a z");
export default Revenue;
