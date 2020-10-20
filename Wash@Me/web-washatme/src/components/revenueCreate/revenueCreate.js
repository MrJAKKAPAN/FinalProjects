import React, { Component } from "react";
import ListService from "./cart/cartService/listCartService";
import ListProduct from "./cart/cartProduct/listCartProduct";
import { server } from "../../constants";
import * as actions from "./../../actions/login.action"
import {connect} from "react-redux";
import Cart from "./cart/cart";
import moment from "moment";
import {
  Layout,
  Menu,
  Breadcrumb,
  Form,
  Input,
  InputNumber,
  Button,
  Space,
  message,
  PageHeader,
  Statistic,
  Row,
  Col,
  Descriptions,
  Card,
  Radio,
  Tabs,
  Table,
  Select,
  DatePicker,
} from "antd";
import "antd/dist/antd.css";
import { httpClient } from "../../utils/HttpClient";
import "./revenueCreate.scss";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import AddedItem from "../test/cartItem";

const { Option } = Select;
const { TextArea } = Input;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Column, ColumnGroup } = Table;
const { TabPane } = Tabs;
const { Search } = Input;
class RevenueCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCustomer: [],
      dataProduct: [],
      dataService: [],
      dataAdmin: [],
      addedItems: [],
      total: 0,
    };
  }
  // join data
  componentDidMount = async() => {
    await httpClient
      .get("http://localhost:8085/api/v1/user/user")
      .then((e) => this.setState({ dataAdmin: e.data }));
    await httpClient
      .get("http://localhost:8085/api/v1/customer/customer/")
      .then((e) => this.setState({ dataCustomer: e.data }));
    await httpClient
      .get("http://localhost:8085/api/v1/stock/product/")
      .then((e) => this.setState({dataProduct: e.data}))
    await httpClient
      .get("http://localhost:8085/api/v1/service/service/")
      .then((e) => this.setState({dataService: e.data}))
  };


  onFinish = async(values) => {
    console.log(values)
    const { addedItems, total } = this.state;
    // console.log(addedItems.data.name);
    if(total !== 0 ) {
      values.re_total = total;
      const { data, result } = this.props.loginReducer;
      const mappedItems = addedItems.map(({id,...doc})=>{
        doc.car_number = values.cus_car_number;
        doc.reference = values.re_reference;
        doc.detail = values.re_detail;
        doc.total = doc.price * doc.quantity;
        doc.adName = result.data.u_fname;
      return doc;
    })
      await httpClient
              .post(`http://localhost:8085/api/v1/revenue/revenue`,{addedItems: mappedItems})
              .then((res) => {
                console.log(res);                
              }
              )
              .catch((error) => {
                console.log("Error :", error);
              }) 
              console.log('mappedItems',mappedItems);

        if(addedItems !== null){   
          const dataBase = this.state.dataProduct;
          const filters = addedItems.filter([{dataBase}])
          console.log(filters)
          // if( mappedItems.type === null && undefined && "" ) {

          //     console.log('hello',mappedItems);
          // }else{

          //   console.log('No');
          // }

          // const result = addedItem.find(({name}) => name === dataBases.data.name);
          // console.log('result :',result);
        // console.log(mappedItems)
        // console.log(addedItems.data.name);

        // const setProduct = httpClient.get("").then(()=>{})
        // console.log(setProduct)
      }else{}





      message.success({ content: 'บันทึกรายรับเรียบร้อย!', duration: 2, style: {
        marginTop: '7vh',
      }} ,100);
      await this.props.history.goBack();
    }else{
      message.warning({ content: 'โปรดเลือกบริการ!', duration: 2, style: {
        marginTop: '7vh',
      }} ,500);
    }
    // console.log(addedItems);
    
    
  //  }else{
  //   message.warning({ content: 'โปรดเลือกบริการ', duration: 2, style: {
  //     marginTop: '10vh',
  //   }} ,100);
  //  }
  };

  // cart
  addCart = (e, item) => {
    // console.log(item);
    const addedItems = this.state.addedItems.slice();
    const addedItem = addedItems.find(
      (cartItem) => item.name === cartItem.name
    );
    if (addedItem) {
      addedItem.quantity++;
      // delete addedItems.id;
    } else {
      let new_item = item;
      // delete addedItems.id;
      new_item.quantity = 1;
      addedItems.push(new_item);
    }
    this.setState({ addedItems });
    this.getTotal();
  };
  addCertProduct = (e, item) => {
    const addedItems = this.state.addedItems.slice();
    const addedItem = addedItems.find(
      (cartItem) => item.name === cartItem.name
    );
    if (addedItem) {
      addedItem.quantity++;
      // delete addedItems.id;
    } else {
      let new_item = item;
      // delete addedItems.id;
      new_item.quantity = 1;
      addedItems.push(new_item);
      
    }
    this.setState({ addedItems });
    this.setState((prevState) => ({
      total: prevState.addedItems.reduce(
        (total, { price, quantity }) => total + quantity * price,
        0
      ),
    }));
  };
  onClickRemove = (e, item) => {
    this.setState((prevState) => ({
      addedItems: prevState.addedItems.flatMap((cartItem) => {
        if (cartItem.name === item.name) {
          return cartItem.quantity === 1
            ? [] // return [] to remove
            : [
                {
                  ...cartItem,
                  quantity: cartItem.quantity - 1,
                },
              ]; 
        } else {
          return [cartItem]; // return cart item to keep
        }
      }),
    }));
    this.getTotal();
  };
  getTotal = () => {
    this.setState((prevState) => ({
      total: prevState.addedItems.reduce(
        (total, { price, quantity }) => total + quantity * price,
        0
      ),
    }));
  };
  // select
  onChange = (value) => {
    console.log(`selected ${value}`);
  };
  onSearch = (value) => {
    console.log("search:", value);
  };

  render() {
    const {
      dataCustomer,
      dataProduct,
      dataService,
      dataAdmin,
      addedItems,
      total,
    } = this.state;
    const dateFormat = "DD/MM/YYYY";

    //layout
    const layout = {
      labelCol: {
        span: 6,
      },
      wrapperCol: {
        span: 12,
      },
    };
    // TableService
    const tableService = dataService.map((item) => (
      <tr key={item.id}>
        <td>{item.name}</td>
    <td>{item.type}</td>
        <td>{item.price.toFixed(2)}</td>
        <td>
          <button
            type="button"
            className="btn btn-success"
            style={{ fontSize: "12px" }}
            onClick={(e) => this.addCart(e, item)}
          >
            เพิ่ม
          </button>
        </td>
      </tr>
    ));
    // TableProduct
    const tableProduct = dataProduct.map((item) => (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.price.toFixed(2)}</td>
        <td>
          <button
            type="button"
            className="btn btn-success"
            style={{ fontSize: "12px" }}
            onClick={(e) => this.addCertProduct(e, item)}
          >
            เพิ่ม
          </button>
        </td>
      </tr>
    ));
    // cart
    const tableCart = addedItems.map((addedItem) => (
      <tr key={addedItem.id}>
        <td>{addedItem.name}</td>
        <td>{addedItem.type}</td>
        <td>{addedItem.price.toFixed(2)}</td>
        <td>{addedItem.quantity}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            style={{ fontSize: "12px" }}
            onClick={(e) => this.onClickRemove(e, addedItem)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    //  Option
    const car = dataCustomer.map((item) => (
      <Option key={item.id} value={item.cus_car_number}>{item.cus_car_number}</Option>
    ));

    return (
      <div className="content-wrapper">
        <section className="content">
          <PageHeader
            className="site-page-header"
            onBack={() => {
              this.props.history.goBack();
            }}
            title="รายรับ"
            subTitle="บันทึกข้อมูลรายรับ"
          />
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <div className="card" style={{ top: "1%" }}>
                <div className="card-body">
                  <Form
                    {...layout}
                    name="nest-messages"
                    onFinish={(values) => this.onFinish(values)}
                    style={{ border: "1px solid rgb(226, 225, 225)" }}
                  >
                    <Row style={{ paddingTop: "3%" }}>
                      <Col span={12}>
                        <Form.Item name="date" label="วันที่บันทึก">
                          <DatePicker
                            disabled
                            defaultValue={moment()}
                            format={dateFormat}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          name="re_reference"
                          label="เลขที่ใบเสร็จอ้างอิง"
                        >
                          <Input placeholder="เลขที่ใบเสร็จอ้างอิง" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        <Form.Item name="re_detail" label="บันทึกย่อ"
                        rules={[
                          {
                              required: true,
                              message: "โปรดระบุบันทึกย่อ",
                          },
                          ]}>
                          <TextArea
                            placeholder="รายละเอียด"
                            autoSize
                            rows={4}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item name="cus_car_number" label="ป้ายทะเบียนรถ" rules={[
                          {
                              required: true,
                              message: "โปรดระบุป้ายทะเบียนรถ",
                          },
                          ]}
                        >
                          <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="เลือกป้ายทะเบียนรถ"
                            optionFilterProp="children"
                            // onChange={this.onChange}
                            onSearch={this.onSearch}
                          >
                            {car}
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Content style={{ padding: "0 10px" }}>
                      <div className="site-layout-content">
                        <Row>
                          <Col span={11}>
                            <Tabs
                              defaultActiveKey="1"
                              onChange={this.callback}
                              type="card"
                            >
                              <TabPane tab="บริการ" key="1">
                                <div className="card" style={{ height: 170 }}>
                                  <div className="card-body table-responsive p-0">
                                    <table
                                      className="table  table-sm table-head-fixed"
                                      style={{ textAlign: "center" }}
                                    >
                                      <thead>
                                        <tr>
                                          <th scope="col">ชื่อบริการ</th>
                                          <th scope="col">ประเภท</th>
                                          <th scope="col">ราคา</th>
                                          <th scope="col">Action</th>
                                        </tr>
                                      </thead>
                                      <tbody>{tableService}</tbody>
                                    </table>
                                  </div>
                                </div>
                              </TabPane>
                              <TabPane tab="สินค้า" key="2">
                                <div className="card" style={{ height: 170 }}>
                                  <div className="card-body table-responsive p-0">
                                    <table
                                      className="table  table-sm table-head-fixed"
                                      style={{ textAlign: "center" }}
                                    >
                                      <thead>
                                        <tr>
                                          <th scope="col">ชื่อบริการ</th>
                                          <th scope="col">ราคา</th>
                                          <th scope="col">Action</th>
                                        </tr>
                                      </thead>
                                      <tbody>{tableProduct}</tbody>
                                    </table>
                                  </div>
                                </div>
                              </TabPane>
                            </Tabs>
                          </Col>
                          <Col span={12} offset={1}>
                            <div className="card" style={{ height: 230 }}>
                              <p style={{ textAlign: "center" }}>
                                --- Order ---
                              </p>

                              <div className="card-body table-responsive p-0">
                                <table
                                  className="table  table-sm table-head-fixed"
                                  style={{ textAlign: "center" }}
                                >
                                  <thead>
                                    <tr>
                                      {/* <th scope="col">id</th> */}
                                      <th scope="col">รายการ</th>
                                      <th scope="col">ประเภท</th>
                                      <th scope="col">ราคา</th>
                                      <th scope="col">จำนวน</th>
                                      <th scope="col">Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>{tableCart}</tbody>
                                </table>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Content>
                    <Form.Item
                      name="re_total"
                      style={{ paddingTop: "1%" }}
                      label="ยอดรวม"
                    >
                      <InputNumber disabled value={total} formatter={value => `฿ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}/>
                      <p style={{display:'none'}}>{this.state.total}</p>
                    </Form.Item>
                    <Form.Item
                      wrapperCol={{ ...layout.wrapperCol, offset: 10 }}
                    >
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

const mapStateToProps = ({ loginReducer }) => ({ loginReducer })
const mapDispatchToProps = { ...actions }
export default connect(mapStateToProps, mapDispatchToProps)(RevenueCreate)