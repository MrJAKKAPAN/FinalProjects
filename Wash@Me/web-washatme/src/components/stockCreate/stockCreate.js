import React, { Component } from "react";
import { Formik } from "formik";
import "./stockCreate.css";

class StockCreate extends Component {
  showForm = ({
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    handleBlur,
    isSubmitting,
  }) => {
    return (
      <form className="form-horizontal" onSubmit={handleSubmit} style={{border:'2px solid red'}}>
        <div className="form-group">
          <label className="col-sm-2 control-label" htmlFor="name">
            Product Name
          </label>
          <div className="col-sm-10">
            <input
              name="productName"
              value={values.pro_name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="โปรดระบุ"
              className="form-control"
              type="text"
              id="name"
            />
          </div>
        </div>
        <div className="form-group" style={{ marginBottom: 10 }}>
          <label className="col-sm-2 control-label" htmlFor="stock">
            Stock
          </label>
          <div className="col-sm-10">
            <div className="input-group">
              <input
                name="stock"
                className="form-control"
                type="number"
                value={values.pro_original}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {/* <span className="input-group-addon input-group-addon_custom">
              </span> */}
            </div>
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label" htmlFor="price">
            Price
          </label>
          <div className="col-sm-10">
            <div className="input-group">
              <input
                name="price"
                value={values.pro_price}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
                type="number"
                id="price"
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
          <div className="col-sm-10">
            <div className="input-group">
              <input
                name="price"
                value={values.pro_number}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
                type="number"
                id="price"
              />
              {/* <span className="input-group-addon input-group-addon_custom">
                ฿
              </span> */}
            </div>
          </div>
        </div>

        <div className="box-footer" style={{ marginTop: 50 }}>
          <button
            type="submit"
            className="btn btn-primary pull-right"
            disabled={isSubmitting}
          >
            Submit
          </button>
          <a
            onClick={() => {
              this.props.history.goBack();
            }}
            type="Button"
            className="btn btn-default pull-right"
            style={{ marginRight: 10 }}
          >
            Cancel
          </a>
        </div>
      </form>
    );
  };

  render() {
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
                  <section className="content" style={{ maxWidth: "80%" }}>
                    <div className="box box-primary">
                      <div className="box-header with-border">
                        <p className="box-title" style={{ fontSize: 30 }}>
                          Add Product
                        </p>
                      </div>
                      <div className="box-body" style={{ marginTop: 30 }}>
                        <Formik
                          initialValues={{
                            pro_name: "",
                            pro_original: "",
                            pro_price: "",
                            pro_number: "",
                          }}
                          onSubmit={(values, { setSubmitting }) => {
                            //sub for backend/node
                            let formData = new FormData();
                            formData.append("pro_name", values.pro_name);
                            formData.append(
                              "pro_original",
                              values.pro_original
                            );
                            formData.append("pro_price", values.pro_price);
                            formData.append("pro_number", values.pro_number);
                            this.props.addProduct(this.props.history, formData);
                            setSubmitting(false); //button submit ไม่สามารถกดได้ถ้าไม่ใส่ข้อมูล
                          }}
                        >
                          {(props) => this.showForm(props)}
                        </Formik>
                      </div>
                    </div>
                  </section>

                  {/* /.content */}
                </div>
                {/* Main content */}
              </div>
            </div>
          </div>
      </section>
      </div>
    );
  }
}

export default StockCreate;
