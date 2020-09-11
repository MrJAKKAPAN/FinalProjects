// export default RevenueCreate;
import React, { Component } from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Form,
  Input,
  InputNumber,
  Button,
  Select,
  Space,
  message,
  PageHeader,
  Statistic,
  Row,
  Col,
  Descriptions,
  Card,
  Radio,
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

class RevenueCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
      data:[],
      // a:[1,2,3,4,],
      // b:[1,2,3,4,],
    };    
  }
  componentDidMount(){

  }
  

  onFinish = async (values) => {
    console.log(values);
    // const addMember = {
    //   username: values.username,

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

  render() {
    const a = [1,2,3,4]

    const layout = {
      labelCol: {
        span: 6,
      },
      wrapperCol: {
        span: 12,
      },
    };


    const style = { paddingTop: "1px" };
    return (
      <div className="content-wrapper">
        <section className="content">
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
                      <Col span={14}>
                        <Form.Item name="" label="วันที่บันทึก">
                          <Input disabled />
                        </Form.Item>
                      </Col>
                      <Col span={10}></Col>
                    </Row>

                    <Row>
                      <Col span={14}>
                        <Form.Item name="" label="ประเภทบัญชี">
                          <Radio.Group name="radiogroup">
                            <Radio value={1}>รายรับ</Radio>
                            <Radio value={2}>รายจ่าย</Radio>
                          </Radio.Group>
                        </Form.Item>
                      </Col>
                      <Col span={10}></Col>
                    </Row>

                    <Row>
                      <Col span={14}>
                        <Form.Item name="cus_name" label="บันทึกย่อ">
                          <TextArea
                            placeholder="รายละเอียด"
                            autoSize
                            rows={4}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={10}>
                        <Form.Item name="" label="เลขที่ใบเสร็จอ้างอิง">
                          <Input placeholder="เลขที่ใบเสร็จอ้างอิง" />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row>
                      <Col span={14}>
                        <Form.Item name="" label="ลูกค้า (ถ้ามี)">
                          <Select defaultValue="lucy">
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={10}></Col>
                    </Row>

                    <Content style={{ padding: "0 50px" }}>
                      <div className="site-layout-content">
                        <Row>
                          <Col span={24}>






                          </Col>
                        </Row>
                      </div>
                    </Content>
                    <Form.Item
                      wrapperCol={{ ...layout.wrapperCol, offset: 11 }}
                      style={{ paddingTop: "3%" }}
                    >
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{ marginRight: "5px" }}
                      >
                        {" "}
                        Submit{" "}
                      </Button>
                      <Button
                        type="primary"
                        danger
                        type="submit"
                        onClick={() => {
                          this.props.history.goBack();
                        }}
                      >
                        {" "}
                        Cancel{" "}
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
