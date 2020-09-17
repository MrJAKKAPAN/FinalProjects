import React, { Component } from "react";
import moment from "moment";
import {
  Layout,
  Menu,
  Breadcrumb,
  Form,
  Input,
  InputNumber,
  Button,
  Space,
  message,
  PageHeader,
  Statistic,
  Row,
  Col,
  Descriptions,
  Card,
  Radio,
  Tabs,
  Table,
  Select,
  DatePicker,
} from "antd";
import "antd/dist/antd.css";
import { httpClient } from "../../utils/HttpClient";
import "./revenueCreate.scss";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";

const { Option } = Select;
const { TextArea } = Input;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Column, ColumnGroup } = Table;
const { TabPane } = Tabs;
const { Search } = Input;
class RevenueCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }



// join data
componentDidMount =  async() => {
    let dataProduct = [];
    await httpClient
          .get("")
          .then((res) => {
            dataProduct.push(res)
          })
    let dataCustomer = [];
    await httpClient
            .get("")
            .then((res) => {
              dataCustomer.push(res)
            })
    await dataProduct.concat(dataCustomer)

console.log(dataProduct);
  }


  
  onFinish = async (values) => {
    console.log(values);
    const addRevenue = {
      // re_add_name : ,
      // re_price: values.re_price,
      // re_pro_name: values.re_pro_name,
      // re_member: values.re_member,
      // re_reference: values.re_reference,
      // re_cus_name: values.re_cus_name,
      // re_ad_name: values.re_ad_name,
      // 
    }

    // }
    // console.log(addMember);
    // await httpClient.post(`http://localhost:8085/api/v1/user/user`, addMember)
    // .then((res) => {
    //   console.log(res);
    //   console.log(res.data);
    // })
    // .catch((error) => {
    //   console.log("Error:", error);
    // });
    // message.success({ content: 'เพิ่มข้อมูลพนักงานเรียบร้อย!', duration: 2, style: {
    //   marginTop: '5vh',
    // } } ,100);
    // await this.props.history.goBack();
  };

// select
 onChange = (value)=> {
  console.log(`selected ${value}`);
}
 onSearch = (value) => {
  console.log('search:', value);
}




  addToCart = () => {
    console.log("Add To Cart");
  };

  callback = (key) => {
    console.log(key);
  };


  render() {
    const dateFormat = "DD/MM/YYYY";
    const layout = {
      labelCol: {
        span: 6,
      },
      wrapperCol: {
        span: 12,
      },
    };

    const columnsService = [
      {
        title: "ชื่อรายการ",
        dataIndex: "name",
        align: "center",
      },
      {
        title: "ราคา",
        dataIndex: "age",
        align: "center",
      },
      {
        title: "Action",
        align: "center",
        dataIndex: "action",
        render: (text, record) => (
          <Button onClick={this.addToCart} type="primary">
            เพิ่ม
          </Button>
        ),
      },
    ];
    const dataService = [
      {
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
      },
      {
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
      },
    ];
    const columnsProduct = [
      {
        title: "ชื่อสินค้า",
        dataIndex: "name",
        align: "center",
      },
      {
        title: "ราคา",
        dataIndex: "age",
        align: "center",
      },
      {
        title: "Action",
        align: "center",
        dataIndex: "action",
        render: (text, record) => <Button type="primary">เพิ่ม</Button>,
      },
    ];
    const dataProduct = [
      {
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
      },
      {
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
      },
    ];
    const dataAdd = [
      {
        name: "John Brown",
        price: 32,
        coat: 1,
        sum: 32,
      },
    ];

    const style = { paddingTop: "1px" };
    return (
      <div className="content-wrapper">
        <section className="content">
          <PageHeader
            className="site-page-header"
            onBack={() => {
              this.props.history.goBack();
            }}
            title="รายรับ"
            subTitle="บันทึกข้อมูลรายรับ"
          />
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <div className="card" style={{ top: "2%" }}>
                <div className="card-body">
                  <Form
                    {...layout}
                    name="nest-messages"
                    onFinish={(values) => this.onFinish(values)}
                    style={{ border: "1px solid rgb(226, 225, 225)" }}
                  >
                    <Row style={{ paddingTop: "3%" }}>
                      <Col span={12}>
                        <Form.Item name="date" label="วันที่บันทึก">
                          <DatePicker
                            disabled
                            defaultValue={moment()}
                            format={dateFormat}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item name="" label="เลขที่ใบเสร็จอ้างอิง">
                          <Input placeholder="เลขที่ใบเสร็จอ้างอิง" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        <Form.Item name="" label="บันทึกย่อ">
                          <TextArea
                            placeholder="รายละเอียด"
                            autoSize
                            rows={4}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item name="" label="ป้ายทะเบียนรถ(ถ้ามี)">
                          <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={this.onChange}
                            onSearch={this.onSearch}
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >

                            <Option value="jack">Jack</Option>
                            <Option value="Jacks">Jacks</Option>
                            <Option value="Game">Game</Option>
                            
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>

                    <Content style={{ padding: "0 20px" }}>
                      <div className="site-layout-content">
                        <Row>
                          <Col span={11}>
                            <Tabs
                              defaultActiveKey="1"
                              onChange={this.callback}
                              type="card"
                            >
                              <TabPane tab="บริการ" key="1">
                                <Table
                                  columns={columnsService}
                                  dataSource={dataService}
                                  size="small"
                                  scroll={{ y: 220 }}
                                  pagination={false}
                                />
                              </TabPane>
                              <TabPane tab="สินค้า" key="2">
                                <Table
                                  columns={columnsProduct}
                                  dataSource={dataProduct}
                                  size="small"
                                  scroll={{ y: 220 }}
                                  pagination={false}
                                />
                              </TabPane>
                            </Tabs>
                          </Col>
                          <Col span={12} offset={1}>
                            <Table
                              title={() => <h6>ตระกร้าสินค้า</h6>}
                              size="small"
                              dataSource={dataAdd}
                              pagination={false}
                              scroll={{ y: 280 }}
                            >
                              <Column
                                title="ชื่อรายการ"
                                dataIndex="name"
                                key="1"
                                align="center"
                              />
                              <Column
                                title="ราคา"
                                dataIndex="price"
                                align="center"
                              />
                              <Column
                                title="จำนวน"
                                dataIndex="coat"
                                align="center"
                              />
                              <Column
                                title="รวม"
                                dataIndex="sum"
                                align="center"
                              />
                              <Column
                                title="Action"
                                align="center"
                                key="action"
                                render={(text, record) => (
                                  <Space size="middle">
                                    <Button type="primary" danger>
                                      ลบ
                                    </Button>
                                  </Space>
                                )}
                              />
                            </Table>
                          </Col>
                        </Row>
                      </div>
                    </Content>
                    <Form.Item
                      // name=""
                      style={{ paddingTop: "2%" }}
                      label="ยอดรวม"
                    >
                      <Input disabled/>
                    </Form.Item>
                    <Form.Item
                      wrapperCol={{ ...layout.wrapperCol, offset: 10 }}
                    >
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{ marginRight: "5px" }}
                      >
                        Submit
                      </Button>
                      <Button
                        type="primary"
                        danger
                        onClick={() => {
                          this.props.history.goBack();
                        }}
                      >
                        Cancel
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default RevenueCreate;
