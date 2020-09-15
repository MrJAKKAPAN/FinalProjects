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
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onFinish = (value) => {
    console.log(value);
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
            onBack={() => { this.props.history.goBack(); }}
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
