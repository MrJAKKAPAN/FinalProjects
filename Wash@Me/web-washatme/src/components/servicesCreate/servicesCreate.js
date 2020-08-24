// import React, { Component } from 'react';
// import 'antd/dist/antd.css';
// import './index.css';
// import {  } from 'antd';
// import { Layout, Menu, Breadcrumb, Input, InputNumber, Button, Select,Space,Form, Tooltip } from "antd";

// import {
//   UserOutlined,
//   LaptopOutlined,
//   NotificationOutlined,
// } from "@ant-design/icons";

// const { Option } = Select;
// const { SubMenu } = Menu;
// const { Header, Content, Sider } = Layout;

// const Demo = () => {
//   const onFinish = values => {
//     console.log('Received values of form: ', values);
//   };

//   return (
//     <div className="content-wrapper">
//     <Layout>
//       <Layout>
//         <Layout style={{ padding: "0 24px 24px" }}>
          
//           <Content className="site-layout-background" style={{ padding: 24, margin: 0, minHeight: 450, }}>
//             <Form {...layout} name="nest-messages" onFinish={onFinish}>
//             <Form.Item name='cus_fname' label="ชื่อ" onChange={this.handleChange} rules={[{required: true ,message:'โปรดระบุชื่อ ', }]}  >
//               <Input placeholder="ชื่อลูกค้า" />
//             </Form.Item >
//             <Form.Item  label="นามสกุล" name='cus_lname' onChange={this.handleChange} rules={[{required: true ,message:'โปรดระบุนามสกุล', pattern: new RegExp(/\D+/g)}]}>
//               <Input placeholder="นามสกุล" />
//             </Form.Item>
//             {/* </Space> */}
//             <Form.Item name='cus_email' label="อีเมล์" onChange={this.handleChange} rules={[{required: true , message:' โปรดระบุอีเมล์ ', type: 'email'}]} >
//               <Input placeholder="อีเมล์" />
//             </Form.Item>
//             <Form.Item name='cus_tel' label="เบอร์โทร" onChange={this.handleChange} rules={[{required: true,message: 'โปรดระบุเบอร์โทร',pattern: new RegExp(/^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/)}]} >
//               <Input  addonBefore={prefixSelector} placeholder="เบอร์โทร"  style={{width: '100%',}} maxLength={10} minLength={8}/>
//             </Form.Item>
//             <Form.Item name='cus_car_number' label="ป้ายทะเบียนรถ" onChange={this.handleChange} rules={[{required: true,message: 'โปรดระบุป้ายทะเบียนรถ'}]}>
//               <Input  placeholder="ป้ายทะเบียนรถ" />
//             </Form.Item>
//             <Form.Item name='cus_band' label="ยี่ห้อ" onChange={this.handleChange} rules={[{required: true,message: 'โปรดระบุยี่ห้อรถ'}]}>
//               <Input  placeholder="ป้ายทะเบียนรถ" />
//             </Form.Item>
//             <Form.Item name='cus_address' label="ที่อยู่" onChange={this.handleChange} rules={[{required: true,message: 'โปรดระบุที่อยู่'}]}>
//               <Input  placeholder="ป้ายทะเบียนรถ" />
//             </Form.Item>
//             <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }} >
//               <Button type="primary" htmlType="submit" style={{marginRight:'5px'}} >
//                 Submit
//               </Button>
//               <Button type="primary" danger type="submit"  onClick={() => {
//                       this.props.history.goBack();
//                       }}>
//                   Cancel
//               </Button>
//             </Form.Item>
//           </Form>
//           </Content>
//         </Layout>
//       </Layout>
//     </Layout>
//   </div>  );
// };

// export default ServicesCreate;
