import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "./../../actions/register.action";
// import { server } from "../../constants";
// import { httpClient } from "./../../utils/HttpClient";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      fname: "",
      lname: "",
      tel: "",
      CardNumber: "",
      email: "",
      status: 0,
      address: "",
    };
  }

  showError = () => {
    return (
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <div className="alert alert-danger alert-dismissible">
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-hidden="true"
            >
              ×
            </button>
            <h5>
              <i className="icon fas fa-info" /> Eroor!
            </h5>
            Incorrectp
          </div>
        </div>
        <div className="col-sm-1"></div>
      </div>
    );
  };

  // onClickRegister = () => {
  //   // เรียกแบบตรงๆๆ
  //   // Axios.post("http://localhost:8085/api/v1/authen/register",this.state).then(response=>{
  //   //   alert(JSON.stringify(response.data))

  //   httpClient.post(server.REGISTER_URL, this.state).then(response => {
  //     alert(JSON.stringify(response.data));
  //   });
  // };

  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Member</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Member</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>

        <section className="content">
          <div className="container-fluid" style={{ borderRadius: "5rem" }}>
            <div className="row">
              <div className="col-md-12">
                {/* general form elements */}
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Add Member</h3>
                  </div>
                  <div className="row" style={{ marginTop: "20px" }}>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5">
                      {/* textarea */}
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername">UserName</label>
                        <input
                          onChange={(e) =>
                            this.setState({ username: e.target.value })
                          }
                          name="username"
                          type="text"
                          className="form-control"
                          placeholder="username"
                        />
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword">Password</label>
                        <input
                          type="password"
                          onChange={(e) =>
                            this.setState({ password: e.target.value })
                          }
                          name="password"
                          className="form-control"
                          id="exampleInputPassword"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div className="col-sm-1"></div>
                  </div>
                  <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5">
                      <div className="form-group">
                        <label htmlFor="exampleInputFirstName">
                          First Name
                        </label>
                        <input
                          onChange={(e) =>
                            this.setState({ fname: e.target.value })
                          }
                          name="fname"
                          id="exampleInputFirstName"
                          className="form-control"
                          placeholder="FirstName"
                        />
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="form-group">
                        <label htmlFor="exampleInputLastName">Last Name</label>
                        <input
                          // type="Last Name"
                          onChange={(e) =>
                            this.setState({ lname: e.target.value })
                          }
                          name="lname"
                          className="form-control"
                          id="exampleInputLastName"
                          placeholder="LastName"
                        />
                      </div>
                    </div>
                    <div className="col-sm-1"></div>
                  </div>
                  <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5">
                      <div className="form-group">
                        <label htmlFor="exampleInputCardNumber">
                          CardNumber
                        </label>
                        <input
                          onChange={(e) =>
                            this.setState({ cardNumber: e.target.value })
                          }
                          type="Number"
                          name="cardNumber"
                          className="form-control"
                          id="exampleInputCardNumber"
                          placeholder="CardNumber"
                        />
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="form-group">
                        <label htmlFor="exampleInputTel">Tel.</label>
                        <input
                          onChange={(e) =>
                            this.setState({ tel: e.target.value })
                          }
                          type="Number"
                          name="tel"
                          className="form-control"
                          id="exampleInputTel"
                          placeholder="Tel."
                        />
                      </div>
                    </div>
                    <div className="col-sm-1"></div>
                  </div>
                  <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail">Email</label>
                        <input
                          onChange={(e) =>
                            this.setState({ email: e.target.value })
                          }
                          type="email"
                          name="email"
                          className="form-control"
                          id="exampleInputEmail"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div classname="col-md-6">
                        <div className="form-group">
                          <label>Status</label>
                          <select
                            onChange={(e) =>
                              this.setState({ status: e.target.value })
                            }
                            name="status"
                            className="form-control select2"
                            style={{ width: "100%" }}
                          >
                            <option selected="selected">0</option>
                            <option>0</option>
                            <option>1</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-1"></div>
                  </div>
                  <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                      <div className="form-group">
                        <label>Address</label>
                        <textarea
                          onChange={(e) =>
                            this.setState({ address: e.target.value })
                          }
                          className="form-control"
                          name="address"
                          rows={3}
                          placeholder="Address"
                        />
                      </div>
                    </div>
                    <div className="col-sm-1"></div>
                  </div>

                  {/* Ternary condition */}
                  {this.props.registerReducer.isError && this.showError()}

                  {/* Save */}
                  <div className="row" style={{ padding: "18px" }}>
                    <div className="col-3"></div>
                    <div className="col-3">
                      <button
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault();
                          this.props.register(this.props.history, this.state);
                        }}
                        className="btn btn-info btn-block btn-lg"
                      >
                        Save
                      </button>
                    </div>

                    {/* Cancel */}
                    <div className="col-3">
                      <button
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault();
                          this.props.history.goBsck();
                        }}
                        className="btn btn-danger btn-block btn-lg"
                      >
                        Cancel
                      </button>
                    </div>
                    <div className="col-3"></div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* /.row */}
          </div>{" "}
          {/* /.container-fluid */}
        </section>
      </div>
    );
  }
}

// export default Register;
const mapStateToProps = ({ registerReducer }) => ({ registerReducer });
const mapDispatchToProps = {
  register,
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
