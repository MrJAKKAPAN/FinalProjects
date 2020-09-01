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
import "./servicesCreate.css";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { Option } = Select;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class servicesCreate extends Component {
  state = {
    sv_name: "",
    sv_detail: "",
    sv_type:"",
    sv_price: "",
    sv_member: "",
  };

  onFinish = async(values) => {
    const serviceAdd = {
      sv_name : values.sv_name,
      sv_detail : values.sv_detail,
      sv_type : values.sv_type,
      sv_member : values.sv_member,
      sv_price : values.sv_price,
    }
    console.log(serviceAdd);
   await httpClient.post(`http://localhost:8085/api/v1/service/service/`, serviceAdd)
   .then((res) => {
     console.log(res);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
  message.success({ content: 'เพิ่มข้อมูลอัตราบริการเรียบร้อย!', duration: 2, style: {
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
                  <Form
                    {...layout}
                    name="nest-messages"
                    onFinish={(value) => this.onFinish(value)}
                  >
                    <Form.Item
                      name="sv_name"
                      label="ชื่อรายการ"
                      rules={[
                        { required: true, message: "โปรดระบุชื่อรายการ" },
                      ]}
                    >
                      <Input placeholder="ชื่อรายการ" />
                    </Form.Item>
                    <Form.Item
                        label="รายละเอียด"
                        name="sv_detail"
                        rules={[{ required: true, message: "โปรดระบุรายละเอียดการบริการ" },]}
                    >
                    <Input placeholder="รายละเอียด" />
                    </Form.Item>
                    <Form.Item
                        name="sv_type"
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
                        name="sv_price"
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
                        name="sv_member"
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

export default servicesCreate;
