import React, { Component } from 'react';
import { withRouter} from "react-router-dom";
import { server } from "../../constants";
import * as actions from "./../../actions/login.action"
import {connect} from "react-redux";

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {

    };
  }
  componentDidMount(){
    this.props.loadState(this.props.history);
  }
  nameData = () => {
    try {
      const { data, result } = this.props.loginReducer;
      console.log(data, result )
      if(result.data.u_status === 1){
        return (
          "Super Admin" 
        )
      }else{
        return (
          "Admin" 
        )
      }
      
    } catch (error) {
      {}
    }
  }

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
  <ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <div>
        <p style={{fontSize:'18px', paddingTop:'10px'}}>
         - &nbsp; {this.nameData()} &nbsp; -
        </p>
      </div>
    </li>
  </ul>
  {/* Right navbar links */}
  <ul className="navbar-nav ml-auto">
    <li className="nav-item">
    <div
        style={{cursor:'pointer'}}
        onClick={() => {
            this.props.history.push("/home")
            localStorage.removeItem(server.LOGIN_PASSED);
            this.props.appReducer.app.forceUpdate();
            }}>
      <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" style={{color:'#EF5148'}}>
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
const mapStateToProps = ({ loginReducer, appReducer }) => ({ loginReducer,appReducer })
const mapDispatchToProps = { ...actions }
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))
