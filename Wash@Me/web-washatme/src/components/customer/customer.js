import React, { Component } from "react";
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
import "./customer.scss";
import { httpClient } from "../../utils/HttpClient";

const { Content } = Layout;
const { Column, ColumnGroup } = Table;
const { Search } = Input;


class Customer extends Component {
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
      .get("http://localhost:8085/api/v1/customer/customer/")
      .then((e) => this.setState({ result: e.data }));
        console.log(this.state);
  }

  onChange = (cus_fname) => {
    if(cus_fname === "" ) {
        this.componentDidMount()
    }else{
    httpClient.get(`http://localhost:8085/api/v1/customer/customer/keyword/${cus_fname}`)
    .then((e) => this.setState({ result: e.data}));
    }
};

onDelete = async(id) => {
    console.log(id);
    await httpClient.delete(
        `http://localhost:8085/api/v1/customer/customer/${id}`
        );
        await this.componentDidMount();
};

  render() {
    const { pagination } = this.props;

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
                          this.props.history.push(`/customer-create/`)
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
                    bordered
                    title={() => 'ตารางข้อมูลลูกค้า'}
                    dataSource={this.state.result}
                    // columns={columns}
                    pagination={pagination}
                    size="small"
                    style={{ marginTop: "10px" }}
                  >
                    <Column
                      title="ID"
                      dataIndex="id"
                      align="center"
                      width="60px"
                    />
                    {/* <Column
                      title="รหัสลูกค้า"
                      dataIndex=""
                      align="center"
                      width="200"
                    /> */}
                    <Column
                      title="ชื่อลูกค้า"
                      dataIndex="cus_fname"
                      align="center"
                      width="350"
                    />
                     <Column
                      title="นามสกุล"
                      dataIndex="cus_lname"
                      align="center"
                      width="350"
                    />
                    <Column
                      title="เบอร์โทรศัพท์"
                      dataIndex="cus_tel"
                      align="center"
                      width="200"
                      style={{backgroundColor:'black'}}
                    />
                    <Column
                      title="เลขป้ายทะเบียนรถ"
                      dataIndex="cus_car_number"
                      align="center"
                      width="200"
                    />
                    <Column
                      title="ยี่ห้อ"
                      dataIndex="cus_band"
                      align="center"
                      width="100"
                    />
                    <Column
                      title="E-Mail"
                      dataIndex="cus_email"
                      align="center"
                      width="300"
                    />
                    <Column
                      title="Action"
                      align="center"
                      width="200"
                      align="center"
                      render={(text, record) => (
                        <Space>
                          <Button
                            type="primary"
                            onClick={() =>
                              this.props.history.push(
                                `/customer-edit/${record.id}`
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
                      )}
                    />
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Customer;
