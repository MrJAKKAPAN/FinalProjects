import React, { Component } from "react";
import * as actions from "./../../actions/service.action";
import { httpClient } from "./../../utils/HttpClient";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import _, { result } from "lodash";
import Sweetalerts from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  Table,
  Tag,
  Space,
  Popconfirm,
  message,
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
import "./service.scss";


const mySweetAlerts = withReactContent(Sweetalerts);
const { Content } = Layout;
const { Search } = Input;


class Service extends Component {
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

    // this.debounceSearch = _.debounce(console.log(this.props.getServiceByKeyword));
  }
  onChange = async (id) => {
    console.log(id);
    httpClient.get(`http://localhost:8085/api/v1/service/service/${id}`);
    await this.componentDidMount();

    //e ไม่ถูกทำลาย กรณีหา value ไม่เจอ  ให้ใช้คำสั่ง e.persist();
    // e.persist();
    // this.debounceSearch(e);
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
        height:"30px"
      },
      {
        title: "รหัสรายการบริการ",
        // dataIndex: "sv_name",
        align: "center",
        width: 200,
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
      },
      {
        title: "ชื่อรายการ",
        dataIndex: "sv_name",
        align: "center",
        width: 200,
      },
      {
        title: "Detail",
        dataIndex: "sv_detail",
        align: "center",
      },
      {
        title: "Price",
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

    // if(this.state.result !== null && this.state.result !== undefined) {
    return (
      <div className="content-wrapper">
        <Layout>
          <Layout
            style={{
              paddingLeft: "24px",
              paddingRight: "24px",
              // marginTop: "5px",
            }}
          >
            <Content
              className="site-layout-background"
              style={{
                padding: 14,
              }}
            >
              <Row>
                <Col span={8}>
                  <Search
                    placeholder="input search text"
                    onSearch={this.state.onChange}
                    style={{ width: 300 ,float: "left"}}
                    enterButton
                  />
                </Col>
                <Col span={12}></Col>
                <Col span={4}>
                  <Button
                    type="success"
                    onClick={() => this.props.history.push(`/service-create/`)}
                    style={{ float: "right" , 
                              backgroundColor:'limegreen', 
                              color:'white',
                              border:'limegreen',
                              width:'100px'
                            }}
                  >
                    เพิ่ม
                  </Button>
                </Col>
              </Row>

              <Link
                to="/service-create"
                style={{ float: "right",  width: 100 }}
              ></Link>

              <Table
                bordered
                dataSource={this.state.result}
                columns={columns}
                pagination={pagination}
                style={{ marginTop: "5px" }}
              ></Table>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
    // }else{
    //   return (
    //   <Spin />
    //   )
    // }
  }
}

const mapStateToProps = ({ serviceReducer }) => ({ serviceReducer });
const mapDispatchToProps = { ...actions };
export default connect(mapStateToProps, mapDispatchToProps)(Service);
