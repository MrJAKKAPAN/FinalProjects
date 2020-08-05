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
              <Route path="/stock" component={Stock} />
              <Route path="/login" component={Login} />
              <Route path="/home" component={Home} />
              <SecuredRoute path="/register" component={Register} />
              <SecuredRoute path="/report" component={Report} />
              <SecuredRoute path="/stock" component={Stock} />
              <SecuredRoute path="/stock-create" component={StockCreate} />
              <SecuredRoute path="/stock-edit/:id" component={StockEdit} />
              {/* redirect to home */}
              <Route exact={true} path="/" component={this.redirectToHome} />
              <Route exact={true} path="*" component={this.redirectToHome} />
          </Switch>
          {isLoggedIn() && <Footer />}
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
