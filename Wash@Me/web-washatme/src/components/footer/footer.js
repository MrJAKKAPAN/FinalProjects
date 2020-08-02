import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        {/* Main Footer */}
        <footer className="main-footer">
          <strong>
            Copyright © 2020 <a href="http://adminlte.io">Wash At Me</a>.
          </strong>
          All rights reserved.
          <div className="float-right d-none d-sm-inline-block">
            <b>Version</b> 3.0.0
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
