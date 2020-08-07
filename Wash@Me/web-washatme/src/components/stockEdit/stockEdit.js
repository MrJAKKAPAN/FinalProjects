import React, { Component } from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import * as actions from "./../../actions/stock.action";
import { getProductById } from "./../../actions/stock.action";
import { server } from "./../../constants";
import { httpClient } from "./../../utils/HttpClient";
import "./stockEdit.css";

class StockEdit extends Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    //alert(id)
    this.props.getProductById(id);
  }

  showForm = ({
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    isSubmitting,
  }) => {
    return (
      <form
        className="form-horizontal"
        onSubmit={handleSubmit}
        // style={{border:'2px solid red'}}
      >
        <div className="form-group">
          <label className="col-sm-2 control-label" htmlFor="name">
            Product Name
          </label>
          <div className="col-sm">
            <input
              name="pro_name"
              value={values.pro_name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="โปรดระบุ"
              className="form-control"
              type="text"
              id="pro_name"
            />
          </div>
        </div>
        <div className="form-group" style={{ marginBottom: 10 }}>
          <label className="col-sm-2 control-label" htmlFor="stock">
            Price
          </label>
          <div className="col-sm">
            <div className="input-group">
              <input
                name="pro_original"
                value={values.pro_original}
                // id="pro_original"
                className="form-control"
                type="number"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="โปรดระบุ"
              />
              {/* <span className="input-group-addon input-group-addon_custom">
                ฿
              </span> */}
            </div>
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label" htmlFor="price">
            Price
          </label>
          <div className="col-sm">
            <div className="input-group">
              <input
                name="pro_price"
                value={values.pro_price}
                id="pro_price"
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
                type="number"
                // id="pro_price"
                placeholder="โปรดระบุ"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label" htmlFor="price">
            Counts
          </label>
          <div className="col-sm">
            <div className="input-group">
              <input
                name="pro_number"
                id="pro_number"
                value={values.pro_number}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
                type="number"
                // id="pro_number"
                placeholder="โปรดระบุ"
              />
              {/* <span className="input-group-addon input-group-addon_custom">
                ฿
              </span> */}
            </div>
          </div>
        </div>

        <div className="box-footer" style={{ marginTop: 30 }}>
          <button
            disabled={isSubmitting}
            type="submit"
            className="btn btn-success pull-right"
            style={{ margin: "10px", float: "right" }}
          >
            Save
          </button>
          <a
            onClick={() => {
              this.props.history.goBack();
            }}
            type="Button"
            className="btn btn-default pull-right"
            style={{ marginRight: 10, margin: "10px", float: "right" }}
          >
            Cancel
          </a>
        </div>
      </form>
    );
  };

  render() {
    // ข้อมูลในการโหลดมาโชว์
    const { result } = this.props.stockReducer;
    return (
      <div className="content-wrapper">
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
        <section className="content">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <div className="card">
                <div className="card-body">
                  {/* Main content */}
                  <section className="content" style={{ maxWidth: "100%" }}>
                    <div className="box box-primary">
                      <div className="box-header with-border">
                        <p
                          className="box-title"
                          style={{ fontSize: 30, marginLeft: "9%" }}
                        >
                          Edit Product
                        </p>
                      </div>
                      <div className="box-body" style={{ marginTop: 30 }}>
                        <div className="row">
                          <div className="col-1"></div>
                          <div className="col-10">
                            <Formik
                              enableReinitialize
                              Debugger
                              initialValues={result ? result : {}}
                              onSubmit={(values, { setSubmitting }) => {
                                //sub for backend/node
                                let formData = new FormData();
                                formData.append(
                                  "id",
                                  this.props.match.params.id
                                );
                                formData.append("pro_name", values.pro_name);
                                formData.append(
                                  "pro_original",
                                  values.pro_original
                                );
                                formData.append("pro_price", values.pro_price);
                                formData.append(
                                  "pro_number",
                                  values.pro_number
                                );
                                this.props.updateProduct(
                                  this.props.history,
                                  formData
                                );
                                setSubmitting(false);
                              }}
                            >
                              {(props) => this.showForm(props)}
                            </Formik>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ stockReducer }) => ({
  stockReducer,
});

const mapDispatchToProps = {
  ...actions,
  getProductById,
};

export default connect(mapStateToProps, mapDispatchToProps)(StockEdit);

// export default StockEdit;
// const mapStateToProps = ({stockReducer}) => ({
//   stockReducer
// })

// const mapDispatchToProps = {
//   ...actions,
//   getProductById
// }

// export default connect(mapStateToProps,mapDispatchToProps)(StockEdit);
