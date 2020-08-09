import React, { Component } from 'react';
import * as actions from "./../../actions/service.action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";
import Sweetalerts from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import { Table } from 'antd';

const mySweetalerts = withReactContent(Sweetalerts);


class Service extends Component {


  createRow = () => {
    try {
    const{result, isFetching} = this.props.serviceReducer; 
    return (
      !isFetching &&
      result !== null &&
      // ตรวจสอบค่าว่าโหลอยู่และไม่เป็นค่าว่างเสด
      result.map((item) => {
        // ใน Jsx ของ react อะไรก็ตามที่ถูกเจนใน Array นั้นจะต้อง Key เพื่อป้องกันไม่ให้มัน duplicate หรือว่ามันทำซ้ำกันนั้นเอง
            return {
              name:item.sv_name,
              detail:item.sv_detail,
              member:item.sv_member,
              price:item.sv_price,

            }
          })
    )
  } catch (e) {}
  }

  render() {
    const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 150,
    },
    {
      title: 'Detail',
      dataIndex: 'detail',
      width: 150,
    },
    {
      title: 'Member',
      dataIndex: 'member',
      width: 150,
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
  ];


    return (
  
      <div className="content-wrapper">
           <Table columns={columns} dataSource={this.createRow()} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />,
        Service
      </div>
      );
  }
}

// export default Service;
const mapStateToProps = ({serviceReducer}) => ({
  serviceReducer
});

const mapDispatchToProps = {
  ...actions
}
export default connect(mapStateToProps, mapDispatchToProps)(Service);