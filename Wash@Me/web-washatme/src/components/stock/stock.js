import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "./../../actions/stock.action";
import { imageUrl } from "./../../constants";
import _ from "lodash";

import Moment from "react-moment";
import NumberFormat from "react-number-format";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./stock.css";


// const MySwal = withReactContent(Swal);

class Stock extends Component {

  // componentDidMount(){
  //   this.props.getProducts()
  //   // ค้นหา Delay
  //   this.debounceSearch = _.debounce(this.props.getProductByKeyword,500);
  // }

 dummyData = [
      {p1:"001",p2:"potato",p3:"20",p4:"30",p5:"9"},
      {p1:"001",p2:"potato",p3:"20",p4:"30",p5:"9"},
      {p1:"001",p2:"potato",p3:"20",p4:"30",p5:"9"},
      {p1:"001",p2:"potato",p3:"20",p4:"30",p5:"9"},
      {p1:"001",p2:"potato",p3:"20",p4:"30",p5:"9"}

    ];

  renderRows = () =>{
    return this.dummyData.map(item=>(
      <tr>
        <td>{item.p1}</td>
        <td>{item.p2}</td>
        <td>{item.p3}</td>
        <td>{item.p4}</td>
        <td>{item.p5}</td>

      </tr>
    ))
}

  render() {
    
    return (
      <div className="content-wrapper">

        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>DataTables</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">DataTables</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">
                    DataTable with minimal features &amp; hover style
                  </h3>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <table
                    id="example2"
                    className="table table-bordered table-hover"
                  >
                    <thead>
                      <tr>
                        <th>รหัสสินค้า</th>
                        <th>ชื่อสินค้า</th>
                        <th>ราคาต้นทุน</th>
                        <th>ราคาขาย</th>
                        <th>จำนวน</th>
                      </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                  </table>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
  
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </section>
        {/* /.content */}
        </div>

      // <div className="content-wrapper">
      //   <h1>table</h1>
      //   <ul>
      //     {dummy.map((item) => (
      //       <li>{item}</li>
      //     ))}
      //   </ul>
      // </div>
    );
  }
}

export default Stock;
