import React, { Component } from "react";
import { httpClient } from "../../utils/HttpClient";
import { Link } from "react-router-dom";
import moment from "moment-timezone";
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
  }

  onChange = (sv_name) => {
    // console.log(sv_name);
    if (sv_name === "") {
      this.componentDidMount();
    } else {
      httpClient
        .get(`http://localhost:8085/api/v1/service/service/keyword/${sv_name}`)
        .then((e) => this.setState({ result: e.data }));
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
    const timeConverter = rawDate => moment(rawDate).format("DD/MM/YYYY");
    const { pagination } = this.props;
    const columns = [
      {
        title: "ID",
        dataIndex: "id",
        align: "center",
        width: "60px",
      },
      {
        title: "วันที่บันทึก",
        dataIndex: "createdAt",
        align: "center",
        width:"100",
        render: createdAt => timeConverter(createdAt)
      },
      {
        title: "ชื่อรายการ",
        dataIndex: "sv_name",
        align: "center",
      },
      {
        title: "รายละเอียด",
        dataIndex: "sv_detail",
        align: "center",
      },
      {
        title: "ประเภท",
        dataIndex: "sv_type",
        align: "center",
      },
      {
        title: "ราคา",
        dataIndex: "sv_price",
        align: "center",
        render: value => ` ${value}.00`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') //convert number monney
      },
      {
        title: "Member",
        dataIndex: "sv_member",
        align: "center",
        render: value => ` ${value}.00`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') //convert number monney
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
        <div className="content">
          <div className="row">
            <div className="col-12">
              <div className="card" style={{top:'1%'}}>
                <div className="card-body">
                  <Row>
                    <Col span={4}>
                      <Button
                        type="success"
                        onClick={() =>
                          this.props.history.push(`/service-create/`)
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
                        placeholder="ค้นหา ชื่อรายการบริาการ"
                        onChange={(e) => this.onChange(e.target.value)}
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
                    title={() => 'ตารางอัตรบริการ'}
                    dataSource={this.state.result}
                    columns={columns}
                    pagination={pagination}
                    style={{ marginTop: "5px" }}
                    size="small"
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

export default ServicePaged;
// const mapStateToProps = ({ servicesReducer }) => ({ servicesReducer });
// const mapDispatchToProps = { ...actions };
// export default connect(mapStateToProps, mapDispatchToProps)(ServicePaged);
