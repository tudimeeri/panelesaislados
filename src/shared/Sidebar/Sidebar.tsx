import React, { Component } from "react";
import Item from './sidebarItem';
import { SideItems } from './sidebarItem/sideMenuItems';
import { RouteComponentProps, withRouter } from "react-router";
import "./Sidebar.scss";
import '../../css/plugins.css';
import '../../style.css';
type Props = RouteComponentProps<any> & {
  showWhenMobile?: boolean;
};
type State = {};

class Sidebar extends Component<Props, State> {
  renderItems() {
    return SideItems.map(item => {
      return (
        <Item
          history={this.props.history}
          location={this.props.location}
          match={this.props.match}
          item={item}
        ></Item>
      );
    });
  }

  render() {
    return (
          <div className={`sidenav ${this.props.showWhenMobile ? 'show' : 'hide'}`}>
            <div className='sidenav__items'>
              {this.renderItems()}
            </div>
          </div>
    );
  }
}

export default withRouter(Sidebar);
