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
} from "antd";
import "antd/dist/antd.css";
import { httpClient } from "../../utils/HttpClient";
import "./customerCreate.css";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { Option } = Select;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class CustomerCreate extends Component {
  state = {
    // setIsSubmitting:false,
    cus_fname: "",
    cus_lname: "",
    cus_email: "",
    cus_tel: "",
    cus_car_number: "",
    cus_band: "",
    cus_address: "",
  };

  onFinish = async(values) => {
    const formData = new FormData();
      formData.append("cus_fname", values.cus_fname);
      formData.append("cus_lname", values.cus_lname);
      formData.append("cus_email", values.cus_email);
      formData.append("cus_tel", values.cus_tel);
      formData.append("cus_car_number", values.cus_car_number);
      formData.append("cus_band", values.cus_band);
      formData.append("cus_address", values.cus_address);
    await httpClient
      .post(`http://localhost:8085/api/v1/customer/customer/`, formData)
      .then((res) => {
        // console.log(res.data);
        console.log("PushData to server success : ", res);
      })
      .catch((error) => {
        console.log("Error :", error);
      });
      message.success({ content: 'เพิ่มข้อมูลเรียบร้อย!', duration: 2, style: {
        marginTop: '5vh',
      } } ,100);
    await this.props.history.goBack();

  };

  render() {
    console.log(this.state);

    const layout = {
      labelCol: {
        span: 6,
      },
      wrapperCol: {
        span: 12,
      },
    };
    const prefixSelector = (
      <Form.Item name="prefix" noStyle>
        <Select
          style={{
            width: 70,
          }}
        >
          <Option value="08">+66</Option>
          {/* <Option value="09">09</Option> */}
          {/* <Option value="02">02</Option> */}
          {/* <Option value="053">053</Option> */}
        </Select>
      </Form.Item>
    );

    return (
      <div className="content-wrapper">
        <Layout>
          <Layout>
            <Layout style={{ padding: "0 24px 24px" }}>
              <Content
                className="site-layout-background"
                style={{ padding: 24, margin: 0, minHeight: 450 }}
              >
                <Form {...layout} name="nest-messages" onFinish={this.onFinish}>
                  <Form.Item
                    name="cus_fname"
                    label="ชื่อ"
                    onChange={this.handleChange}
                    rules={[{ required: true, message: "โปรดระบุชื่อ " }]}
                  >
                    <Input placeholder="ชื่อลูกค้า" />
                  </Form.Item>
                  <Form.Item
                    label="นามสกุล"
                    name="cus_lname"
                    onChange={this.handleChange}
                    rules={[
                      {
                        required: true,
                        message: "โปรดระบุนามสกุล",
                        pattern: new RegExp(/\D+/g),
                      },
                    ]}
                  >
                    <Input placeholder="นามสกุล" />
                  </Form.Item>
                  <Form.Item
                    name="cus_email"
                    label="อีเมล์"
                    onChange={this.handleChange}
                    rules={[
                      {
                        required: true,
                        message: " โปรดระบุอีเมล์ ",
                        type: "email",
                      },
                    ]}
                  >
                    <Input placeholder="อีเมล์" />
                  </Form.Item>
                  <Form.Item
                    name="cus_tel"
                    label="เบอร์โทร"
                    onChange={this.handleChange}
                    rules={[
                      {
                        required: true,
                        message: "โปรดระบุเบอร์โทร",
                        // pattern: new RegExp(/^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/),
                      },
                    ]}
                  >
                    <Input
                      placeholder="เบอร์โทร"
                      style={{ width: "100%" }}
                      maxLength={10}
                      minLength={10}
                    />
                  </Form.Item>
                  <Form.Item
                    name="cus_car_number"
                    label="ป้ายทะเบียนรถ"
                    onChange={this.handleChange}
                    rules={[
                      { required: true, message: "โปรดระบุป้ายทะเบียนรถ" },
                    ]}
                  >
                    <Input placeholder="ป้ายทะเบียนรถ" />
                  </Form.Item>
                  <Form.Item
                    name="cus_band"
                    label="ยี่ห้อ"
                    onChange={this.handleChange}
                    rules={[{ required: true, message: "โปรดระบุยี่ห้อรถ" }]}
                  >
                    <Input placeholder="ป้ายทะเบียนรถ" />
                  </Form.Item>
                  <Form.Item
                    name="cus_address"
                    label="ที่อยู่"
                    onChange={this.handleChange}
                    rules={[{ required: true, message: "โปรดระบุที่อยู่" }]}
                  >
                    <Input placeholder="ป้ายทะเบียนรถ" />
                  </Form.Item>
                  <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
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
                      type="submit"
                      onClick={() => {
                        this.props.history.goBack();
                      }}
                    >
                      Cancel
                    </Button>
                  </Form.Item>
                </Form>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default CustomerCreate;
