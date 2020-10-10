import React, { Component } from "react";
import { withRouter, Link} from "react-router-dom";
import { server } from "../../constants";
import * as actions from "./../../actions/login.action"
import {connect} from "react-redux";

class Menu extends Component { 
  constructor(props){
    super(props)
    this.state = {
      // resultsssss: this.props.loginReducer
    }
  }
  renderData = () => {
    try {
      const { results, isFetching } = this.props.loginReducer;
      // console.log(results);
      // console.log(results.data.u_status);
      // 
      const item = results.data
      console.log(item);
      
      if (item.u_status === 1) {
        console.log(item.u_status)
        return(  
            <Link to="/member" className="nav-link">
                    <i className="nav-icon fas fa-user-circle" />
                    <p>&nbsp; พนักงาน / Member</p>
            </Link>   
        )
      }
  } catch (error) {
      console.log('เป็น', error)
    
}}

  render() {
    console.log(this.state)
      const {pathname} = this.props.location;

    return (
      <div style={{minHeight:'100hv'}}>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="index3.html" className="brand-link" style={{textAlign:'center', height:'auto'}}>
            <span className="brand-text font-weight-light">Wash@Me</span>
          </a>
          {/* Sidebar */}
          <div className="sidebar" style={{height:'auto'}}>
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className={pathname === '/report' ? 'nav-item' : null}>
                  <Link to="/report" className="nav-link">
                    <i className="far fa-chart-bar" />
                    <p>
                    &nbsp; Report
                      <span className="right badge badge-danger">New</span>
                    </p>
                  </Link>
                </li>
                <li className={pathname === '/revenue' ? 'nav-item' : null}>
                  <Link to="/revenue" className="nav-link">
                    <i className="nav-icon fas fa-th" />
                    <p>&nbsp; รายรับ / Revenue</p>
                  </Link>
                </li>
                <li className={pathname === '/expenditure' ? 'nav-item' : null}>
                  <Link to="/expenditure" className="nav-link">
                    <i className="nav-icon fas fa-th" />
                    <p>&nbsp; รายจ่าย / expenditure</p>
                  </Link>
                </li>

                {/* <li className="nav-header">EXAMPLES</li> */}
                <li className={pathname === '/customer' ? 'nav-item' : null}>
                  <Link to="/customer" className="nav-link">
                    <i className="nav-icon fas fa-id-badge" />
                    <p>&nbsp; ลูกค้า / Customer</p>
                  </Link>
                </li>
                <li className={pathname === '/stock' ? 'nav-item' : null}>
                  <Link to="/stock" className="nav-link">
                    <i className="nav-icon fas fa-clipboard-list" />
                    <p>&nbsp; สินค้า / Product</p>
                  </Link>
                </li>

                <li className={pathname === '/member' ? 'nav-item' : null}>
                {this.renderData()}
                {/* <Link to="/member" className="nav-link">
                    <i className="nav-icon fas fa-user-circle" />
                    <p>&nbsp; พนักงาน / Member</p>
                </Link>    */}
                </li>

                <li className={pathname === '/servicePaged' ? 'nav-item' : null}>
                  <Link to="/servicePaged" className="nav-link" >
                    <i className="nav-icon fas fa-money-check" />
                    <p>&nbsp; อัตราบริการ / Service</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <div
                    onClick={() => {
                      this.props.history.push("/home")
                      localStorage.removeItem(server.LOGIN_PASSED);
                      //func update
                      this.props.appReducer.app.forceUpdate();
                    }}
                  >
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-door-open" />
                      <p>Logout</p>
                    </a>
                  </div>
                </li>
              
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      </div>
    ); 
  }
}

// export default withRouter(Menu);
const mapStateToProps = ({  loginReducer,appReducer }) => ({ loginReducer,appReducer })
const mapDispatchToProps = { ...actions }
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Menu))

  