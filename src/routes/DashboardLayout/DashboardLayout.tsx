import React, { Component } from "react";
import Navbar from "../../shared/Navbar/index";
import Footer from "../../shared/Footer";
import Sidebar from '../../shared/Sidebar';
import Overlay from '../../shared/ovelay';
import HeaderTop from '../../shared/HeaderTop';
import "./DashboardLayout.scss";
import Icon from '@mdi/react';
import { mdiPhone } from '@mdi/js';


type Props = {};
type State = {
  showSidebar: boolean;
};

class DashboardLayout extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showSidebar: false,
    }
  }

  toggleSidebar = () => {
    this.setState({ showSidebar: !this.state.showSidebar });
  }

  hideSidebar = () => {
    this.setState({ showSidebar: false });
  }

  render() {
    return (
      <React.Fragment>
        <HeaderTop></HeaderTop>
        <Navbar toggleSidebar={this.toggleSidebar}></Navbar>
        <Sidebar showWhenMobile={this.state.showSidebar}></Sidebar>
        {this.state.showSidebar &&
          <Overlay clickEvent={this.hideSidebar}></Overlay>
        }
        <div>{this.props.children}</div>
        <div className='make-call'>
          <a href="tel:5558036916" className='phone'>
            <Icon path={mdiPhone}
              size={2}
              color="black" />
          </a>
        </div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default DashboardLayout;
