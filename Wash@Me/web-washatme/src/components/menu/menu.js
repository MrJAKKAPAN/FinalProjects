import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link} from "react-router-dom";
import { server } from "../../constants";

class Menu extends Component {
  constructor(props) {
    super(props)
  
    this.state = {

    }
  }
  
  render() {
      const {pathname} = this.props.location;
    return (
      <div style={{minHeight:'100hv'}}>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="index3.html" className="brand-link" style={{textAlign:'center'}}>
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
                    <p>&nbsp; รายรับ / รายจ่าย</p>
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
                  <Link to="/member" className="nav-link">
                    <i className="nav-icon fas fa-user-circle" />
                    <p>&nbsp; พนักงาน / Member</p>
                  </Link>
                </li>
                <li className={pathname === '/servicePaged' ? 'nav-item' : null}>
                  <Link to="/servicePaged" className="nav-link" >
                    <i className="nav-icon fas fa-money-check" />
                    <p>&nbsp; อัตราบริการ / Service</p>
                  </Link>
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

export default withRouter(Menu);
// const mapStateToProps = ({appReducer}) => ({
//   appReducer
// })

// const mapDispatchToProps = {
//   // action
// }
// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Menu))

