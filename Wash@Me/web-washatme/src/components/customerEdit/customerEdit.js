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
import Axios from 'axios'
import "./customerEdit.css";
import { UserOutlined, LaptopOutlined, NotificationOutlined} from "@ant-design/icons";

const { Option } = Select;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const FormItem = Form.Item;


class CustomerEdit extends Component {
//create instance
formRef = React.createRef();

  constructor(props) {
    super(props);
      this.state = {
        id:'',
        cus_fname:'',
        cus_lname:'',
        cus_email:'',
        cus_tel:'',
        cus_car_number:'',
        cus_band:'',
        cus_address:'',
      }
}


componentDidMount () {
  const id = this.props.match.params.id;
  // alert(id)
  httpClient
        .get(`http://localhost:8085/api/v1/customer/customer/${id}`)
        .then((e) => {
            this.formRef.current.setFieldsValue({
                cus_fname: e.data.cus_fname,
                cus_lname: e.data.cus_lname,
                cus_email: e.data.cus_email,
                cus_tel: e.data.cus_tel,
                cus_car_number: e.data.cus_car_number,
                cus_band: e.data.cus_band,
                cus_address: e.data.cus_address,
            });
             this.setState({ 
                cus_fname: e.data.cus_fname,
                cus_lname: e.data.cus_lname,
                cus_email: e.data.cus_email,
                cus_tel: e.data.cus_tel,
                cus_car_number: e.data.cus_car_number,
                cus_band: e.data.cus_band,
                cus_address: e.data.cus_address,
          });
})}


updateCustomer = values => {
  // event.preventDefault();
  // console.log("ค่า e ที่มาจาก form: ", values);
    const customerUpdate = {
        id: this.state.id,  
        cus_fname: this.state.cus_fname,
        cus_lname: this.state.cus_lname,
        cus_email: this.state.cus_email,
        cus_tel: this.state.cus_tel,
        cus_car_number: this.state.cus_car_number,
        cus_band: this.state.cus_band,
        cus_address: this.state.cus_address,
    };
    
    console.log(customerUpdate);

    Axios.put("http://localhost:8085/api/v1/customer/customer", customerUpdate)
    .then(res => { 
      console.log(res);
      // console.log(res.data);
    })
          // .then((res) => {
          //   console.log(res);
          //   if(res.status === 200) {
          //       console.log("Update Success",res.data);
          //   }
          //     }).catch((res) => {
          //       console.log(res);
          //     })
    // await this.props.history.goBack();
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
                <Form ref={this.formRef} {...layout} name="nest-messages" onFinish={this.updateCustomer}  onValuesChange={(changedValues, allValues) => {}}>
                  <Form.Item
                    label="ชื่อ"
                    name="cus_fname"
                    rules={[{ required: true, message: "โปรดระบุชื่อ ", }]}
                  > 
                    <Input  />
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
