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
import "./stockEdit.css";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { Option } = Select;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class stockEdit extends Component {
  //create instance
  formRef = React.createRef();
  state = {
    id: "",
    price: "",
    original: "",
    name: "",
    number: "",
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    // alert(id)
    httpClient
      .get(`http://localhost:8085/api/v1/stock/product/${id}`)
      .then((e) => {
        this.formRef.current.setFieldsValue({
          id: e.data.id,
          price: e.data.price,
          original: e.data.original,
          name: e.data.name,
          number: e.data.number,
        });
      });
  }

  handleUpdate = async (values) => {
    const productUpdate = {
      id: this.props.match.params.id,
      price: values.price,
      original: values.original,
      name: values.name,
      quantity: values.quantity,
    };
    let result = await httpClient.put(
      "http://localhost:8085/api/v1/stock/product",
      productUpdate
    );
    // console.log(result);
    message.success(
      {
        content: "แก้ไขข้อมูลสินค้าเรียบร้อย!",
        duration: 2,
        style: {
          marginTop: "5vh",
        },
      },
      100
    );
    await this.props.history.goBack();
    // if (result.code !== 0 || result.status > 399) {
    //   return console.log("Cannot update product data.");
    // }
    // result = result.data;
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
            title="สินค้า"
            subTitle="แก้ไขข้อมูลสินค้า"
          />
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <div className="card">
                <div className="card-body">
                  <Form
                    ref={this.formRef}
                    {...layout}
                    name="nest-messages"
                    onFinish={this.handleUpdate}
                    onValuesChange={(changedValues, allValues) => {}}
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

export default stockEdit;
