import React, { Component } from "react";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import Home from "./components/home/home";
import Register from "./components/register/register";
import Report from "./components/report/report";

import Stock from "./components/stock/stock";
import StockCreate from "./components/stockCreate/stockCreate";
import StockEdit from "./components/stockEdit/stockEdit";

import Customer from "./components/customer/customer";
import CustomerCreate from "./components/customerCreate/customerCreate";
import CustomerEdit from "./components/customerEdit/customerEdit";

import Member from "./components/member/member";
import MemberCreate from "./components/member/member";
import MemberEdit from "./components/memberEdit/memberEdit";

import servicePaged from "./components/servicePaged/servicePaged";
import ServiceCreate from "./components/servicesCreate/servicesCreate";
import ServiceEdit from "./components/servicesEdit/servicesEdit";

import Revenue from "./components/revenue/revenue";
import RevenueCreate from "./components/revenueCreate/revenueCreate";
import RevenueEdit from "./components/revenueEdit/revenueEdit";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { server, YES } from "./constants";
import { connect } from "react-redux";
import { setApp } from "./actions/app.action";


// function ถ้าไม่ login ให้ซ่อนบาง menu
const isLoggedIn = () => {
  return localStorage.getItem(server.LOGIN_PASSED) === YES;
};
// กำหนดถ้าไม่ login ไม่สามารถเข้าได้ ความปลอดภัยของเว็บ
const SecuredRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render = {props => isLoggedIn() === true ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
    }
  />
);

class App extends Component {
  componentDidMount() {
    this.props.setApp(this);
  }

  RedirectToLogin = () => {
    return <Redirect to="/home" />;
  };

  render() {
    return (
      <Router>
        <div>
          {isLoggedIn() && <Header />}
          {isLoggedIn() && <Menu />}
          <Switch>
              {/* <Route component={NotFount} /> */}
              <Route path="/stock" component={Stock} />
              <Route path="/login" component={Login} />
              <Route path="/home" component={Home} />
              <Route path="/stock-edit/:id" component={StockEdit} />
              <SecuredRoute path="/register" component={Register} />
              <SecuredRoute path="/report" component={Report} />

              <SecuredRoute path="/stock" component={Stock} />
              <SecuredRoute path="/stock-create" component={StockCreate} />
              <SecuredRoute path="/stock-edit/:id" component={StockEdit} />

              <SecuredRoute path="/customer" component={Customer} />
              <SecuredRoute path="/customer-create" component={CustomerCreate} />
              <SecuredRoute path="/customer-edit/:id" component={CustomerEdit} />

              <SecuredRoute path="/servicePaged" component={servicePaged} />
              <SecuredRoute path="/service-create" component={ServiceCreate} />
              <SecuredRoute path="/service-edit/:id" component={ServiceEdit} />

              <SecuredRoute path="/revenue" component={Revenue} />
              <SecuredRoute path="/revenue-create" component={RevenueCreate} />
              <SecuredRoute path="/revenue-edit/:id" component={RevenueEdit} />

              <SecuredRoute path="/member" component={Member} />
              <SecuredRoute path="/member-create" component={MemberCreate} />
              <SecuredRoute path="/member-edit/:id" component={MemberEdit} />

              {/* redirect to home */}
              <Route exact={true} path="/" component={this.redirectToHome} />
              <Route exact={true} path="*" component={this.redirectToHome} />
          </Switch>
          {/* {isLoggedIn() && <Footer />} */}
        </div>
      </Router>
    );
  }
}


// export default App;
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  // ...action
  setApp,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
