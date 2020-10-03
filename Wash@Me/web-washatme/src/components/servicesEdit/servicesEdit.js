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
  PageHeader
} from "antd";
import "antd/dist/antd.css";
import { httpClient } from "../../utils/HttpClient";
import "./servicesEdit.css";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { Option } = Select;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class ServicesEdit extends Component {
  formRef = React.createRef();
  state = {
    name: "",
    detail: "",
    type:"",
    price: "",
    member: "",
  };

  componentDidMount() {
    const id =this.props.match.params.id;
    httpClient.get(`http://localhost:8085/api/v1/service/service/${id}`)
    .then((e) => {
      this.formRef.current.setFieldsValue({
        id: e.data.id,
        name: e.data.name,
        detail: e.data.detail,
        type: e.data.type,
        price: e.data.price,
        member: e.data.member
      });
    });
    console.log(this.state);
  }


  updateService = async(values) => {
    const serviceAdd = {
      id: this.props.match.params.id,
      name : values.name,
      detail : values.detail,
      type : values.type,
      member : values.member,
      price : values.price,
    }
    console.log(serviceAdd);
  let result =  await httpClient.put(
    "http://localhost:8085/api/v1/service/service/", 
    serviceAdd
    );
    console.log(result)
  message.success({ content: 'แก้ไขข้อมูลอัตราบริการเรียบร้อย!', duration: 2, style: {
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
        <section className="content">
        <PageHeader
            className="site-page-header"
            onBack={() => {
              this.props.history.goBack();
            }}
            title="อัตราบริการ"
            subTitle="แก้ไขข้อมูลอัตราบริการ"
          />
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <div className="card">
                <div className="card-body">
                  <Form
                    {...layout}
                    ref={this.formRef}
                    name="nest-messages"
                    onFinish={this.updateService}
                    onValuesChange={(changedValues, allValues) => {}}
                  >
                    <Form.Item
                      name="name"
                      label="ชื่อรายการ"
                      rules={[
                        { required: true, message: "โปรดระบุชื่อรายการ" },
                      ]}
                    >
                      <Input placeholder="ชื่อรายการ" />
                    </Form.Item>
                    <Form.Item
                        label="รายละเอียด"
                        name="detail"
                        rules={[{ required: true, message: "โปรดระบุรายละเอียดการบริการ" },]}
                    >
                    <Input placeholder="รายละเอียด" />
                    </Form.Item>
                    <Form.Item
                        name="type"
                        label="ประเภทรถ"
                        rules={[
                        {
                            required: true,
                            message: "โปรดระบุประเภทรถ",
                        },
                        ]}
                    >
                    <Select placeholder="เลือกประเภทรถ">
                        <Option value="กระบะ">กระบะ</Option>
                        <Option value="เก๋งเล็ก">เก๋งเล็ก</Option>
                        <Option value="เก๋งใหญ่">เก๋งใหญ่</Option>
                        <Option value="รถตู้">รถตู้</Option>
                        <Option value="SUV">SUV</Option>
                        <Option value="มอเตอร์ไซค์">มอเตอร์ไซค์</Option>
                        <Option value="BigBike">BigBike</Option>
                    </Select>
                    </Form.Item>
                    <Form.Item
                        name="price"
                        label="ค่าบริการ"
                        rules={[
                        {
                            required: true,
                            message: "โปรดระบุค่าบริการ",
                        },
                        ]}
                    >
                    <InputNumber
                        min={1}
                        max={1000000}
                        placeholder="ค่าบริการ"
                        formatter={(value) =>
                          `฿ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        }
                      />
                      {/* <h7>&nbsp; ชิ้น</h7> */}
                    </Form.Item>
                    <Form.Item
                        name="member"
                        label="ค่าบริการสำหรับสมาชิก"
                        rules={[
                        {
                            required: true,
                            message: " โปรดระบุค่าบริการสำหรับสมาชิก ",
                        },
                        ]}
                    >
                    <InputNumber
                        min={1}
                        max={1000000}
                        placeholder="ค่าบริการสำหรับสมาชิก"
                        formatter={(value) =>
                            `฿ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        }
                        />
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ServicesEdit;
