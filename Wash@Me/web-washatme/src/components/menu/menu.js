import React, { Component } from "react";
import { connect } from "react-redux";
// import * as action from "../../actions/login.action";
import { withRouter } from "react-router-dom";
import { server } from "../../constants";

class Menu extends Component {
  constructor(props) {
    super(props)
  
    this.state = {

    }
  }
  
  render() {
    return (
      <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="index3.html" className="brand-link">
            <img
              src="dist/img/AdminLTELogo.png"
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">Wash@Me</span>
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-item">
                  <a href="pages/widgets.html" className="nav-link">
                    <i className="nav-icon fas fa-th" />
                    <p>
                      Dashbord
                      <span className="right badge badge-danger">New</span>
                    </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/widgets.html" className="nav-link">
                    <i className="nav-icon fas fa-th" />
                    <p>รายรับ-รายจ่าย</p>
                  </a>
                </li>

                {/* <li className="nav-header">EXAMPLES</li> */}
                <li className="nav-item">
                  <a href="pages/gallery.html" className="nav-link">
                    <i className="nav-icon fas fa-users" />
                    <p>ลูกค้า / Customer</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/gallery.html" className="nav-link">
                    <i className="nav-icon far fa-image" />
                    <p>สินค้า / Product</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/gallery.html" className="nav-link">
                    <i className="nav-icon fas fa-user-circle" />
                    <p>พนักงาน / Member</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/gallery.html" className="nav-link">
                    <i className="nav-icon fas fa-money-check" />
                    <p>อัตราบริการ / Service</p>
                  </a>
                </li>
                <li className="nav-item">
                  <div
                    // logout
                    onClick={() => {
                      this.props.history.push("/home")
                      localStorage.removeItem(server.LOGIN_PASSED);
                      // บอกให้มันไปใช้ func update
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
const mapStateToProps = ({appReducer}) => ({
  appReducer
})

const mapDispatchToProps = {
  // action
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Menu))

