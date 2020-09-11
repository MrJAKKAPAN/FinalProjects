// export default MemberEdit;
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
import "./memberEdit.css";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { Option } = Select;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class MemberEdit extends Component {
    //create instance
    formRef = React.createRef();
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

  componentDidMount() {
    const id = this.props.match.params.id;
    httpClient.get(`http://localhost:8085/api/v1/user/user/${id}`)
    .then((e) =>{
      this.formRef.current.setFieldsValue({
        id: e.data.id,
        username: e.data.username,
        password: e.data.password,
        u_fname: e.data.u_fname,
        u_lname: e.data.u_lname,
        u_tel: e.data.u_tel,
        u_cardNumber: e.data.u_cardNumber,
        u_email: e.data.u_email,
        u_address: e.data.u_address,
        u_status: e.data.u_status,
      })
    })
  }


  updateMember = async(values) => {
    console.log(values);
    const memberUpdate = {
      id: this.props.match.params.id,
      u_fname: values.u_fname,
      u_lname: values.u_lname,
      u_tel: values.u_tel,
      u_cardNumber: values.u_cardNumber,
      u_email: values.u_email,
      u_address: values.u_address,
    }
    console.log(memberUpdate);
    let result = await httpClient.put(
      "http://localhost:8085/api/v1/user/user", 
      memberUpdate
    );
    console.log(result);
    message.success({ content: 'แก้ไขข้อมูลพนักงานเรียบร้อย!', duration: 2, style: {
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
    return (
      <div className="content-wrapper">
        <section>Header</section>
        <section className="content">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <div className="card">
                <div className="card-body">
                  <Form {...layout} name="nest-messages" ref={this.formRef} onFinish={this.updateMember}>
                    <Form.Item name="username" label="ชื่อบัญชี" rules={[{ required: true, message: "โปรดระบุชื่อบัญชี" }]}>
                      <Input disabled placeholder="Username" />
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
export default MemberEdit;
