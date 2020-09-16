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
  Select,
  Space,
  message,
  PageHeader,
  DatePicker,
} from "antd";
import "antd/dist/antd.css";
import { httpClient } from "../../utils/HttpClient";
import "./expenditureCreate.css";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { Option } = Select;
const { SubMenu } = Menu;

class ExpenditureCreate extends Component {
    state = {
      ex_name: "",
      ex_price: "",
      ex_detail: "",
      ex_name_member: "",
    };


  onFinish = async(values) => {
    // console.log(value);
    const result = {
      ex_name: values.ex_name,
      ex_price: values.ex_price,
      ex_detail: values.ex_detail,
      // ex_name_member: values.ex_detail,
    }
    console.log(result);
    await httpClient.post(`http://localhost:8085/api/v1/expenditure/expenditure/`, result)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log("Error :", error);
    });
    message.success({ content: 'เพิ่มรายการจ่ายเรียบร้อย', duration: 2, style: {
      marginTop: '5vh',
    } } ,100);
    await this.props.history.goBack();
  };

  render() {
    const dateFormat = 'DD/MM/YYYY';
    
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
            onBack={() => {this.props.history.goBack();}}
            title="รายจ่าย"
            subTitle="บันทึกข้อมูลราจ่าย"
          />
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <div className="card">
                <div className="card-body">
                  <Form
                    style={{ marginTop: "2%" }}
                    {...layout}
                    name="nest-messages"
                    onFinish={(value) => this.onFinish(value)}
                  >
                    <Form.Item  label="วันที่">
                      <DatePicker disabled defaultValue={moment()} format={dateFormat}/>
                    </Form.Item>
                    <Form.Item
                      label="รายการ"
                      name="ex_name"
                      rules={[{ required: true, message: "โปรดระบุรายการ" }]}
                    >
                      <Input placeholder="รายการจ่าย" />
                    </Form.Item>
                    <Form.Item
                      name="ex_price"
                      label="จำนวนเงิน"
                      rules={[
                        {
                          required: true,
                          message: " โปรดระบุจำนวนเงิน ",
                        },
                      ]}
                    >
                      <InputNumber
                        min={1}
                        max={1000000}
                        placeholder="ราคาขาย"
                        formatter={(value) =>
                          `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        }
                      />
                    </Form.Item>
                    <Form.Item
                      name="ex_detail"
                      label="บันทึกย่อ"
                      rules={[
                        {
                          required: true,
                          message: "โปรดระบุบันทึกย่อ",
                        },
                      ]}
                    >
                      <Input placeholder="บันทึกย่อ" />
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

export default ExpenditureCreate;
