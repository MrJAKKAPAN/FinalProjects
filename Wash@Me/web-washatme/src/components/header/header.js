import React, { Component } from 'react';
import { withRouter, Link} from "react-router-dom";
import { server } from "../../constants";
import * as actions from "./../../actions/login.action"
import {connect} from "react-redux";

class Header extends Component {
  render() {
    return (
    <div>
<nav className="main-header navbar navbar-expand navbar-white navbar-light">
  {/* Left navbar links */}
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars" /></a>
    </li>
  </ul>

  {/* Right navbar links */}
  <ul className="navbar-nav ml-auto">
    {/* Messages Dropdown Menu */}
    <li className="nav-item">
    <div
        style={{cursor:'pointer'}}
        onClick={() => {
            this.props.history.push("/home")
            localStorage.removeItem(server.LOGIN_PASSED);
            this.props.appReducer.app.forceUpdate();
            }}>
      <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" >
        ออกระบบ &nbsp;
        <i className="nav-icon fas fa-door-open" />
      </a>
      </div>
    </li>
  </ul>
</nav>
  </div>
    );
  }
}
const mapStateToProps = ({  appReducer }) => ({ appReducer })
const mapDispatchToProps = { ...actions }
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))
