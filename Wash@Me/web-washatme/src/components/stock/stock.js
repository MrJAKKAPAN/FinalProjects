import React, { Component } from 'react';
import { httpClient } from "../../utils/HttpClient";
import { Link } from "react-router-dom";
import moment from "moment-timezone";
import "./stock.css";
import _, { result } from "lodash";
import { DeleteOutlined, EditOutlined, AudioOutlined } from "@ant-design/icons";
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
      .get("http://localhost:8085/api/v1/stock/product/")
      .then((e) => this.setState({ result: e.data }));
        console.log(this.state);
  }

  onChange = (pro_name) => {
    if(pro_name === "" ) {
        this.componentDidMount()
    }else{
    httpClient.get(`http://localhost:8085/api/v1/stock/product/keyword/${pro_name}`)
    .then((e) => this.setState({ result: e.data}));
    }
};

  onDelete = async(id) => {
  console.log(id);
  await httpClient.delete(
      `http://localhost:8085/api/v1/stock/product/${id}`
      );
      await this.componentDidMount();
};

  render() {

      const timeConverter = rawDate => moment(rawDate).format("DD/MM/YYYY");
      const { pagination } = this.props;
      const columns = [
        // {
        //   title: "ID",
        //   dataIndex: "id",
        //   align: "center",
        //   width: "60px",
        //   height: "30px",
        // },
        // {
        //   title:"วันที่บันทึก",
        //   dataIndex:"createdAt",
        //   align:"center",
        //   width:"100",
        //   render: createdAt => timeConverter(createdAt)
        // },
        {
          title:"ชื่อสินค้า ",
          dataIndex:"pro_name",
          align:"center",
          width:"300"
        },
        {
          title:"ราคาต้นทุน",
          dataIndex:"pro_original",
          align:"center",
          width:"200",
          render: value => ` ${value}.00`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') //convert number monney
        },
        {
          title:"ราคาขาย",
          dataIndex:"pro_price",
          align:"center",
          width:"200",
          render: value => ` ${value}.00`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') //convert number monney
        },
        // {
        //   title:"จำนวน",
        //   dataIndex:"pro_number",
        //   align:"center",
        //   width:"200",
        //   render: value => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') //convert number monney
        // },
        {
          title:"จัดการ",
          align:"center",
          width:"200",
          align:"center",
          render:(text, record) => (
            <Space>
              <Button
                type="primary"
                onClick={() =>
                  this.props.history.push(
                    `/stock-edit/${record.id}`
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
                onConfirm={() => this.onDelete(record.id)}
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
            <div class="card" style={{ marginTop: "1rem"}}>
                <div class="card-body" style={{ textAlign:'center' }}>
                  <text style={{ fontSize:'1.5rem',textAlign:'center' }}>--- &nbsp;&nbsp; สินค้า / Product &nbsp;&nbsp; ---</text>
                </div>
              </div>
              <div className="card" style={{top:'1%'}}>
                <div className="card-body" >
                  <Row>
                    <Col span={4}>
                      <Button
                        type="success"
                        onClick={() =>
                          this.props.history.push(`/stock-create/`)
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
                        placeholder="ค้นหาชื่อสินค้า "
                        onChange={(e) => this.onChange(e.target.value)}
                        style={{ width: 300, float: "right" }}
                        enterButton
                      />
                    </Col>
                  </Row>
                  <Table
                    // title={() => 'Header'}
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

export default Revenue;
