// export default MemberCreate;
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
import "./memberCreate.css";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { Option } = Select;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class MemberCreate extends Component {
  state = {
    username: "",
    password: "",
    u_fname:"",
    u_lname: "",
    u_tel: "",
    u_cardNumber:"",
    u_email:"",
    u_address:"",
    u_status:"",
  };

  onFinish = async(values) => {
    console.log(values);
    const addMember = {
      username: values.username,
      password: values.password,
      u_fname: values.u_fname,
      u_lname: values.u_lname,
      u_tel: values.u_tel,
      u_cardNumber: values.u_cardNumber,
      u_email: values.u_email,
      u_address: values.u_address,
      u_status: values.u_status,
    }
    console.log(addMember);
    await httpClient.post(`http://localhost:8085/api/v1/user/user`, addMember)
    .then((res) => {
      console.log(res);
      console.log(res.data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
    message.success({ content: 'เพิ่มข้อมูลพนักงานเรียบร้อย!', duration: 2, style: {
      marginTop: '5vh',
    } } ,100);
    await this.props.history.goBack();
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
    return (
      <div className="content-wrapper">
        <section>Header</section>
        <section className="content">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <div className="card">
                <div className="card-body">
                  <Form {...layout} name="nest-messages" onFinish={(values) => this.onFinish(values)}>
                    <Form.Item name="username" label="ชื่อบัญชี" rules={[{ required: true, message: "โปรดระบุชื่อบัญชี" }]}>
                      <Input placeholder="Username" />
                    </Form.Item>
                    <Form.Item  name="password" label="รหัสผ่าน" rules={[{ required: true,  message: "โปรดระบุรหัสผ่าน" }]}>
                      <Input placeholder="Password" />
                    </Form.Item>
                    <Form.Item name="u_fname" label="ชื่อ" rules={[{ required: true, message: "โปรดระบุชื่อ" }]}>
                      <Input placeholder="ชื่อ" />
                    </Form.Item>
                    <Form.Item name="u_lname" label="นามสกุล" rules={[{ required: true, message: "โปรดระบุนามสกุล" }]}>
                      <Input placeholder="นามสกุล" />
                    </Form.Item>
                    <Form.Item name="u_email" label="อีเมล์" rules={[{ required: true,  message: "โปรดระบุอีเมล์" }]}>
                      <Input placeholder="ชื่อรายการ" />
                    </Form.Item>
                    <Form.Item name="u_tel" label="เบอร์โทร" rules={[{ required: true, message: " โปรดระบุเบอร์โทร " }]}>
                      <Input maxLength={10} minLength={10} placeholder="เบอร์โทร"/>
                    </Form.Item>
                    <Form.Item name="u_cardNumber" label="เลขบัตรประชาชน" rules={[{ required: true,message: " โปรดระบุเลขบัตรประชาชน",}]}>
                      <Input maxLength={13} minLength={13} placeholder="เลขบัตรประชาชน"/>
                    </Form.Item>
                    <Form.Item name="u_address" label="ที่อยู่" rules={[{ required: true, message: "โปรดระบุที่อยู่" }]}>
                      <Input placeholder="ชื่อรายการ" />
                    </Form.Item>
                    <Form.Item name="u_status" label="สถานะ" >
                      <Select placeholder="เลือกสถานะ" defaultValue="0">
                          <Option value="0">Admin</Option>
                          <Option value="1">SuperAdmin</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
                      <Button type="primary" htmlType="submit" style={{ marginRight: "5px" }}> Submit </Button>
                      <Button type="primary" danger type="submit" onClick={() => { this.props.history.goBack(); }} > Cancel </Button>
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

export default MemberCreate;
