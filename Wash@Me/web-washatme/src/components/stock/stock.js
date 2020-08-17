import React, { Component } from "react";
import * as actions from "./../../actions/stock.action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";
import Moment from "react-moment";
import NumberFormat from "react-number-format";
import SweetAlerts from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./stock.css";

const mySweetAlerts = withReactContent(SweetAlerts);

// const script = document.createElement("script");
//       script.src = `js/pagination.js`;
//       script.async = true;
//       document.body.appendChild(script);
class Stock extends Component {

  
  async  componentDidMount () {
        this.props.getProducts();
        this.debounceSearch = _.debounce(this.props.getProductByKeyword, 500);
    // ค้นหา Delay

      
  }



  onChange = (e) => {
    //e ไม่ถูกทำลาย กรณีหา value ไม่เจอ  ให้ใช้คำสั่ง e.persist();
    e.persist();
    this.debounceSearch(e);
  };

  createRow = () => {
    try {
      const { result, isFetching } = this.props.stockReducer;
      return (
        !isFetching &&
        result !== null && // ตรวจสอบค่าว่าโหลอยู่และไม่เป็นค่าว่างเสด
        result.map((item) => (
          // ใน Jsx ของ react อะไรก็ตามที่ถูกเจนใน Array นั้นจะต้อง Key เพื่อป้องกันไม่ให้มัน duplicate หรือว่ามันทำซ้ำกันนั้นเอง
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>
              <Moment format="DD/MM/YYYY">{item.createdAt}</Moment>
            </td>
            <td>{item.pro_name}</td>
            <td>
              <NumberFormat
                value={item.pro_original}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                fixedDecimalScale={true}
                suffix={"฿."}
              />
            </td>
            <td>
              <NumberFormat
                value={item.pro_price}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                fixedDecimalScale={true}
                suffix={"฿."}
              />
            </td>
            <td>
              <NumberFormat
                value={item.pro_number}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={0}
                fixedDecimalScale={true}
                suffix={" pcs"}
              />
            </td>

            <td style={{ textAlign: "center" }}>
              <button
                onClick={() =>
                  this.props.history.push(`/stock-edit/${item.id}`)
                }
                type="button"
                className="btn btn-info"
              >
                แก้ไข
              </button>
              <span style={{ color: "grey" }}> | </span>
              <button
                onClick={() => {
                  mySweetAlerts
                    .fire({
                      title: "คุณต้องการลบหรือไม่",
                      text: "You won't be able to revert this!",
                      type: "warning",
                      showCancelButton: true,
                      confirmButtonText: "ใช่",
                      cancelButtonText: "ไม่",
                    })
                    .then((result) => {
                      if (result.value) {
                        // ยิงมาจาก stockProduct
                        this.props.deleteProduct(item.id);
                      }
                    });
                }}
                type="button"
                className="btn btn-danger"
              >
                ลบ
              </button>
            </td>
          </tr>
        ))
      );
    } catch (e) {}
  };

  render() {
    
    return (
      <div className="content-wrapper" >
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>สินค้า</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Product</li>
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
                <div className="card-body">
                  <div className="row">
                    <div className="col-6 col-md-4">
                      <input
                        onChange={this.onChange}
                        type="search"
                        className="form-control input-lg"
                        placeholder="Enter search keyword"
                        style={{ borderRadius: 10 }}
                      />
                    </div>
                    <div className="col-6 col-md-4"></div>
                    <div className="col-6 col-md-4">
                      <Link
                        to="/stock-create"
                        style={{ float: "right", margin: 0, width: 100 }}
                        className="btn btn-success btn-lg"
                      >
                        เพิ่ม
                      </Link>
                    </div>
                  </div>

                  <table
                    id="example2"
                    className="table table-bordered table-striped table-hover table-sm"
                    style={{ border: "2px", marginTop: "10px" }}
                  >
                    <thead className="thead-dark">
                      <tr>
                        <th>รหัสสินค้า</th>
                        <th style={{ width: "7%", textAlign: "center" }}>
                          CREATED
                        </th>
                        <th>ชื่อสินค้า</th>
                        <th>ราคาต้นทุน</th>
                        <th>ราคาขาย</th>
                        <th>จำนวน</th>
                        <th style={{ width: "14%", textAlign: "center" }}>
                          ACTION
                        </th>
                      </tr>
                    </thead>
                    <tbody>{this.createRow()}</tbody>
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
       
      </div>
    );
  }
}

// export default Stock;

const mapStateToProps = ({ stockReducer }) => ({
  stockReducer,
});

const mapDispatchToProps = {
  ...actions,
};
export default connect(mapStateToProps, mapDispatchToProps)(Stock);
