import React, { Component } from "react";
import { httpClient } from "../../utils/HttpClient";
import { Link } from "react-router-dom";
import _ from "lodash";
import Sweetalerts from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
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
import "antd/dist/antd.css";
import "./servicePaged.scss";

const mySweetAlerts = withReactContent(Sweetalerts);
const { Content } = Layout;
const { Search } = Input;

class ServicePaged extends Component {
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
  
  async componentDidMount() {
      httpClient
        .get("http://localhost:8085/api/v1/service/service/")
        .then((e) => this.setState({ result: e.data }));
        console.log(this.state);
    };

    onChange = (sv_name) => {
      // console.log(sv_name);
      if(sv_name === "") {
        this.componentDidMount()
      }else{
        httpClient.get(
          `http://localhost:8085/api/v1/service/service/keyword/${sv_name}`)
          .then((e) => this.setState({ result: e.data}));
      }
          
    };

    onDelete = async (id) => {
      console.log(id);
      await httpClient.delete(
        `http://localhost:8085/api/v1/service/service/${id}`
      );
      await this.componentDidMount();
    };

  render() {
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
        title: "รหัสรายการบริการ",
        // dataIndex: "sv_name",
        align: "center",
        width: 200,
        // sorter: {
        //   compare: (a, b) => a.english - b.english,
        //   multiple: 1,
        // },
      },
      {
        title: "ชื่อรายการ",
        dataIndex: "sv_name",
        align: "center",
        width: 200,
      },
      {
        title: "รายละเอียด",
        dataIndex: "sv_detail",
        align: "center",
      },
      {
        title: "ประเภท",
        // dataIndex: "sv_price",
        // thousandSeparator:true,
        align: "center",
        width: 100,
      },
      {
        title: "ราคา",
        dataIndex: "sv_price",
        // thousandSeparator:true,
        align: "center",
        width: 100,
      },
      {
        title: "Member",
        dataIndex: "sv_member",
        align: "center",
        width: 100,
      },

      {
        title: "Action",
        width: 200,
        align: "center",
        render: (text, record) => (
          <Space>
            <Button
              type="primary"
              onClick={() =>
                this.props.history.push(`/service-edit/${record.id}`)
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
        <Layout>
          <Layout
            style={{
              paddingLeft: "24px",
              paddingRight: "24px",
            }}
          >
            <Content
              className="site-layout-background"
              style={{
                padding: 14,
              }}
            >
              <Row>
                <Col span={4}>
                  <Button
                    type="success"
                    onClick={() => this.props.history.push(`/service-create/`)}
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
                    placeholder="input search text"
                    onChange={(e)=>this.onChange(e.target.value)}
                    style={{ width: 300, float: "right" }}
                    enterButton
                  />
                </Col>
              </Row>

              <Link
                to="/service-create"
                style={{ float: "right", width: 100 }}
              ></Link>

              <Table
                bordered
                dataSource={this.state.result}
                columns={columns}
                pagination={pagination}
                style={{ marginTop: "5px" }}
              />
            </Content>
          </Layout>
        </Layout>
      </div>
    ); 
  }
}

export default  ServicePaged ;
// const mapStateToProps = ({ servicesReducer }) => ({ servicesReducer });
// const mapDispatchToProps = { ...actions };
// export default connect(mapStateToProps, mapDispatchToProps)(ServicePaged);

