import React, { Component } from "react";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import Home from "./components/home/home";
import Register from "./components/register/register";
import Report from "./components/report/report";
import Stock from "./components/stock/stock";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { server, YES } from "./constants";
import { connect } from "react-redux";
import { setApp } from "./actions/app.action";

const isLoggedIn = () => {
  return localStorage.getItem(server.LOGIN_PASSED) == YES;
};
// ใช้กับ route ที่ต้องใช้การ login
const SecuredRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn() === true ? 
      (
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

  redirectToHome = () => {
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
