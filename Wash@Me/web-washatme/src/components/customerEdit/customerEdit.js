import React, { Component ,useState} from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import * as actions from "./../../actions/customer.action";
import { getCustomerById } from "./../../actions/customer.action";
import { server } from "./../../constants";
import { httpClient } from "./../../utils/HttpClient";
import "./customerEdit.css";
import { Button, Form, Col ,InputGroup } from 'react-bootstrap';



class CustomerEdit extends Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    //alert(id)
    this.props.getCustomerById(id);
  }

  render() {
    const { result } = this.props.customerReducer;
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
                  <li className="breadcrumb-item active">Customer</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        <section className="content">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
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
                          Edit Customer
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
                                formData.append("id",this.props.match.params.id);
                                formData.append("cus_fname", values.cus_fname);
                                formData.append("cus_lname",values.cus_lname);
                                formData.append("cus_email", values.cus_email);
                                formData.append("cus_tel",values.cus_tel);
                                formData.append("cus_car_number",values.cus_car_number);
                                formData.append("cus_band",values.cus_band);
                                formData.append("cus_address",values.cus_address);
                                this.props.updateCustomer(
                                  this.props.history,
                                  formData
                                );
                                setSubmitting(false);
                              }}
                            >
                               {({
                                    values,
                                    handleChange,
                                    handleSubmit,
                                    handleBlur,
                                    isSubmitting,
                                  }) => (
                                    <Form  onSubmit={handleSubmit} >
                                      <Form.Row>
                                        <Form.Group as={Col} md="6" controlId="validationFormik01">
                                          <Form.Label>ชื่อ</Form.Label>
                                          <Form.Control
                                            id="cus_fname"
                                            type="text"
                                            name="firstName"
                                            value={values.cus_fname}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            // isValid={touched.firstName && !errors.firstName}
                                          />
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" controlId="validationFormik02">
                                          <Form.Label>นามสกุล</Form.Label>
                                          <Form.Control
                                            id="cus_lname"
                                            type="text"
                                            name="lastName"
                                            value={values.cus_lname}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            // isValid={touched.lastName && !errors.lastName}
                                          />
                                        </Form.Group>
                                      </Form.Row>
                                      <Form.Row>
                                        <Form.Group as={Col} md="12" controlId="validationFormik01">
                                          <Form.Label>อีเมล์</Form.Label>
                                          <Form.Control
                                            id="cus_email"
                                            type="text"
                                            name="email"
                                            value={values.cus_email}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            // isValid={touched.firstName && !errors.firstName}
                                          />
                                        </Form.Group>
                                      </Form.Row>
                                      <Form.Row>
                                      <Form.Group as={Col} md="6" controlId="validationFormik02">
                                          <Form.Label>เบอร์โทร</Form.Label>
                                          <Form.Control
                                            id="cus_tel"
                                            type="text"
                                            name="tel"
                                            value={values.cus_tel}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            // isValid={touched.lastName && !errors.lastName}
                                          />
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" controlId="validationFormik02">
                                          <Form.Label>จังหวัด</Form.Label>
                                          <Form.Control
                                            id="cus_tel"
                                            type="text"
                                            name="tel"
                                            // value={values.cus_tel}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            // isValid={touched.lastName && !errors.lastName}
                                          />
                                        </Form.Group>
                                      </Form.Row>
                                      <Form.Row>
                                      <Form.Group as={Col} md="6" controlId="validationFormik02">
                                          <Form.Label>ป้ายทะเบียนรถ</Form.Label>
                                          <Form.Control
                                            id="cus_car_number"
                                            type="text"
                                            name="tel"
                                            value={values.cus_car_number}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            // isValid={touched.lastName && !errors.lastName}
                                          />
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" controlId="validationFormik02">
                                          <Form.Label>ยี่ห้อ</Form.Label>
                                          <Form.Control
                                            id="cus_band"
                                            type="text"
                                            name="tel"
                                            value={values.cus_band}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            // isValid={touched.lastName && !errors.lastName}
                                          />
                                        </Form.Group>
                                      </Form.Row>
                                      <Form.Row>
                                      <Form.Group as={Col} md="12" controlId="validationFormik02">
                                          <Form.Label>ที่อยู่</Form.Label>
                                          <Form.Control
                                            id="cus_address"
                                            type="text"
                                            name="tel"
                                            value={values.cus_address}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            // isValid={touched.lastName && !errors.lastName}
                                          />
                                        </Form.Group>
                                      </Form.Row>
                                      <div className="box-footer" style={{ marginTop: 30 }}>
                                            <Button
                                              disabled={isSubmitting}
                                              type="submit"
                                              className="btn btn-success pull-right"
                                              style={{ margin: "10px", float: "right" }}
                                            >
                                              Save
                                            </Button>
                                            <Button
                                              variant="danger"
                                              className="btn btn-success pull-right"
                                              style={{ margin: "10px", float: "right" }}
                                              onClick={() => {
                                                this.props.history.goBack();
                                              }}
                                            >
                                              Cancel
                                            </Button>
                                          </div>
                                    </Form>
                              )}
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

const mapStateToProps = ({ customerReducer }) => ({customerReducer})
const mapDispatchToProps = {
  ...actions,
  getCustomerById
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomerEdit);
