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
} from "antd";
import "antd/dist/antd.css";
import { httpClient } from "../../utils/HttpClient";
import Axios from "axios";
import "./customerEdit.css";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { Option } = Select;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const FormItem = Form.Item;

class CustomerEdit extends Component {
  //create instance
  formRef = React.createRef();
  state = {
    id: "",
    cus_fname: "",
    cus_lname: "",
    cus_email: "",
    cus_tel: "",
    cus_car_number: "",
    cus_band: "",
    cus_address: "",
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    // alert(id)
    httpClient
      .get(`http://localhost:8085/api/v1/customer/customer/${id}`)
      .then((e) => {
        this.formRef.current.setFieldsValue({
          id: e.data.id,
          cus_fname: e.data.cus_fname,
          cus_lname: e.data.cus_lname,
          cus_email: e.data.cus_email,
          cus_tel: e.data.cus_tel,
          cus_car_number: e.data.cus_car_number,
          cus_band: e.data.cus_band,
          cus_address: e.data.cus_address,
        });
      });
  }

  updateCustomer = async (values) => {
    const customerUpdate = {
      id: this.props.match.params.id,
      cus_fname: values.cus_fname,
      cus_lname: values.cus_lname,
      cus_email: values.cus_email,
      cus_tel: values.cus_tel,
      cus_car_number: values.cus_car_number,
      cus_band: values.cus_band,
      cus_address: values.cus_address,
    };
    let result = await httpClient.put(
      "http://localhost:8085/api/v1/customer/customer",
      customerUpdate
    );
    console.log(result)
    await this.props.history.goBack();
    if (result.code !== 0 || result.status > 399) {
      return console.log("Cannot update customer data.");
    }
    result = result.data;
    // console.log(result);
  };

  render() {
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
                <Form
                  ref={this.formRef}
                  {...layout}
                  name="nest-messages"
                  onFinish={this.updateCustomer}
                  onValuesChange={(changedValues, allValues) => {}}
                >
                  <Form.Item
                    label="ชื่อ"
                    name="cus_fname"
                    rules={[{ required: true, message: "โปรดระบุชื่อ " }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="นามสกุล"
                    name="cus_lname"
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
                    rules={[
                      { required: true, message: "โปรดระบุป้ายทะเบียนรถ" },
                    ]}
                  >
                    <Input placeholder="ป้ายทะเบียนรถ" />
                  </Form.Item>
                  <Form.Item
                    name="cus_band"
                    label="ยี่ห้อ"
                    rules={[{ required: true, message: "โปรดระบุยี่ห้อรถ" }]}
                  >
                    <Input placeholder="ป้ายทะเบียนรถ" />
                  </Form.Item>
                  <Form.Item
                    name="cus_address"
                    label="ที่อยู่"
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

export default CustomerEdit;
