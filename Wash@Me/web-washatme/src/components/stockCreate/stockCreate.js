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
import "./stockCreate.scss";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { Option } = Select;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class StockCreate extends Component {
  state = {
    price: "",
    original: "",
    name: "",
    quantity: "",
  };

  onFinish = async(value) => {
    const product = {
      price : value.price,
      original : value.original,
      name : value.name,
      quantity : value.quantity,
    }
    console.log(product);
   await httpClient.post(`http://localhost:8085/api/v1/stock/product`,product)
   .then((res) => {
     console.log(res);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
  message.success({ content: 'เพิ่มข้อมูลสินค้าเรียบร้อย!', duration: 2, style: {
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
              onBack={() => {this.props.history.goBack();}}
              title="สินค้า"
              subTitle="บันทึกข้อมูลสินค้า"
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
                    <Form.Item
                      
                      name="name"
                      label="ชื่อสินค้า"
                      rules={[
                        { required: true, message: "โปรดระบุชื่อสินค้า" },
                      ]}
                    >
                      <Input placeholder="ชื่อสินค้า" />
                    </Form.Item>
                    <Form.Item
                      label="ราคาต้นทุน"
                      name="original"
                      rules={[
                        { required: true, message: "โปรดระบุราคาต้นทุน" },
                      ]}
                    >
                      <InputNumber
                        min={1}
                        max={1000000}
                        formatter={(value) =>
                          `฿ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        }
                        placeholder="ราคาต้นทุน"
                      />
                    </Form.Item>

                    <Form.Item
                      name="price"
                      label="ราคาขาย"
                      rules={[
                        {
                          required: true,
                          message: " โปรดระบุราคาขาย ",
                        },
                      ]}
                    >
                      <InputNumber
                        min={1}
                        max={1000000}
                        placeholder="ราคาขาย"
                        formatter={(value) =>
                          `฿ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        }
                      />
                    </Form.Item>
                    <Form.Item
                      name="quantity"
                      label="จำนวน"
                      rules={[
                        {
                          required: true,
                          message: "โปรดระบุจำนวนสินค้า",
                          // pattern: new RegExp(/^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/),
                        },
                      ]}
                    >
                      <InputNumber
                        min={1}
                        max={1000000}
                        placeholder="จำนวสินค้า"
                        formatter={(value) =>
                          `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        }
                      />
                      {/* <h7>&nbsp; ชิ้น</h7> */}
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

export default StockCreate;
