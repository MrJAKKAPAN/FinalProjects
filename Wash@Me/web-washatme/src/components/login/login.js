import React, { Component } from "react";
import "./login.css";
import { connect } from "react-redux";
import { login, autoLogin } from "./../../actions/login.action";



class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }
  

  componentDidMount() {
    this.props.autoLogin(this.props.history);
  }

  showError = () => {
    return (
      <div className="alert alert-danger alert-dismissable">
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-hidden="true"
        >
          x
        </button>
        <h4>
          <i className="icon fa fa-ban" /> Error!{" "}
        </h4>{" "}
        ไม่มีชื่อผู้ใช้นี้
      </div>
    );
  };

  render() {
    return (
      <div className="hold-transition login-page">
        <div
          className="login-box"
          style={{ background: "white", borderRadius: 10 }}
        >
          <div className="login-logo" style={{ marginTop: "20px" }}>
            <b>LOGIN</b>CARCARE
            {/* </a> */}
          </div>

          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your login</p>
              <form>
                <div className="input-group mb-3">
                  <input
                    name="username"
                    // type="text"
                    className="form-control"
                    placeholder="Username"
                    onChange={(e) =>
                      this.setState({ username: e.target.value })
                    }
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-address-book" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                
                {/* Ternary condition */}
                {this.props.loginReducer.isError ? this.showError() : null}
                {/* Sign In */}
                <div className="row">
                  <div className="col-12">
                    <button
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        this.props.login(this.props.history, this.state);
                      }}
                      className="btn btn-success btn-block"
                    >
                      Sign In
                    </button>
                  </div>
                  {/* /.col */}
                </div>
                <div className="row">
                  {/* Cancel */}
                  <div className="col-12">
                    <button
                      type="submit"
                      onClick={(e) => {
                        // ไม่ รีเฟรชหนา้จอ
                        e.preventDefault();
                        this.props.history.goBack();
                      }}
                      className="btn btn-danger btn-block"
                      style={{ marginTop: "8px" }}
                    >
                      cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => ({ loginReducer });
const mapDispatchToProps = {
  login,
  autoLogin,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
