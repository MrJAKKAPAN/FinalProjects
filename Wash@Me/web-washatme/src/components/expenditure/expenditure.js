import React, { Component } from "react";
import { httpClient } from "../../utils/HttpClient";
import { Link } from "react-router-dom";
import moment from "moment-timezone";
import "./expenditure.css";
import _ from "lodash";
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
  PageHeader,
  message,
} from "antd";

const { Content } = Layout;
const { Column, ColumnGroup } = Table;
const { Search } = Input;

class Expenditure extends Component {
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

  componentDidMount  () {
      httpClient
      .get("http://localhost:8085/api/v1/expenditure/expenditure/")
      .then((e) => this.setState({ result: e.data }));
        console.log(this.state);
  }

  onChange = (ex_name) => {
    if(ex_name === "" ){
      this.componentDidMount()
    }else{
      httpClient.get(`http://localhost:8085/api/v1/expenditure/expenditure/keyword/${ex_name}`)
      .then((e) => this.setState({result: e.data}));
    }
  };

  onDelete = async(id) => {
    console.log(id);
    await httpClient.delete(`http://localhost:8085/api/v1/expenditure/expenditure/${id}`);
    message.success({ content: 'ลบข้อมูลเรียบร้อย!', duration: 2,style: {
      marginTop: '5vh',
    } } ,100);
    await this.componentDidMount();
  }

  render() {
    const timeConverter = (rawDate) => moment(rawDate).tz("Thai/Bangkok").format("L");
    const { pagination } = this.props;
    const columns = [
      {
        title: "วันที่บันทึก",
        dataIndex: "createdAt",
        align: "center",
        width: "200",
        render: (createdAt) => timeConverter(createdAt)
      },
      {
        title: "รายการ",
        dataIndex: "ex_name",
        align: "center",
        width: "300",
      },
      {
        title: "จำนวนเงิน",
        dataIndex: "ex_price",
        align: "center",
        width: "300",
        render: (value) => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ","), //convert number monney
      },
      {
        title: "บันทึกย่อ",
        dataIndex: "ex_detail",
        align: "center",
        width: "300",
      },
      // {
      //   title: "พนักงานผู้บันทึก",
      //   dataIndex: "re_ad_name",
      //   align: "center",
      //   width: "300",
      // },
      {
        title: "Action",
        align: "center",
        width: "200",
        align: "center",
        render: (text, record) => (
          <Space>
            {/* <Button
              type="primary"
              onClick={() =>
                this.props.history.push(`/revenue-edit/${record.id}`)
              }
            >
              <a style={{ color: "white" }}>
                <EditOutlined />
              </a>
            </Button>

            <span>|</span> */}

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
              <div className="card" style={{ top: "1%" }}>
                <div className="card-body">
                  <Row>
                    <Col span={4}>
                      <Button
                        type="success"
                        onClick={() =>
                          this.props.history.push(`/expenditure-create/`)
                        }
                        style={{
                          float: "left",
                          backgroundColor: "green",
                          color: "white",
                          border: "green",
                          width: "100px",
                        }}
                      >
                        เพิ่มรายจ่าย
                      </Button>
                    </Col>
                    <Col span={12}>
                    <h4 style={{ fontSize:'1.5rem',textAlign:'center' }}>--- &nbsp;&nbsp; รายจ่าย / Expenditure &nbsp;&nbsp; ---</h4>
                    </Col>
                    <Col span={8}>
                      <Search
                        placeholder="ค้นหารายการ"
                        onChange={(e) => this.onChange(e.target.value)}
                        style={{ width: 300, float: "right" }}
                        enterButton
                      />
                    </Col>
                  </Row>
                  <Table
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

export default Expenditure;
