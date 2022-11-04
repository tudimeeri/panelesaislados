import React, { Component } from "react";
import { Navbar, Dropdown, DropdownButton, Button } from "react-bootstrap";
import { Icon } from '@mdi/react';
import { mdiMenu } from '@mdi/js';
import mainImage from "../../images/logo/LOGO  NARANJA Paneles Aislados y Arcos Steel arco 2019.png";

import "./Navbar.scss";
import { RouteComponentProps, withRouter } from "react-router-dom";

type Props = RouteComponentProps & {
  toggleSidebar?: () => void
};

type State = {
  showNavbar: boolean;
  showWeHiit: boolean;
  showWeRide: boolean;
  userName: string;
};
class AppNavbar extends Component<Props, State> {
  state = {
    showNavbar: false,
    userName: "Usuario",
    showWeHiit: true,
    showWeRide: true,
  };

  verifyShowNavbar = (location: any) => {
    const { pathname } = location;
    this.setState({ showNavbar: pathname.includes("/panel") });
  };



  render() {
    return (
      <div>
        <Navbar className="app-nav">
          <div className='app-nav__sidebar-button'>
            <button className='app-nav__sidebar-button-invisible' onClick={this.props.toggleSidebar ? this.props.toggleSidebar : () => { }}>
              <Icon
                path={mdiMenu}
                size={1}
                color={'white'}
              ></Icon>
            </button>
          </div>
          <div className='app-nav__img-row'>
            <img className='app-nav__img-row__image' alt='hiit' src={mainImage}></img>
          </div>

          <div>
            <div className='app-nav__buttons-nav'>
              <Button className='app-nav__buttons-nav__button' variant={'warning'} onClick={() => { this.props.history.push('main') }}>Inicio</Button>
              <Button className='app-nav__buttons-nav__button' variant={'warning'} onClick={() => { this.props.history.push('nosotros') }}>Sobre nosotros</Button>
              <DropdownButton className='app-nav__buttons-nav__dropdown' variant={'warning'} id="dropdown-basic-button" title="Productos">
                <Dropdown.Item onClick={() => { this.props.history.push('multytecho') }}>Multytecho</Dropdown.Item>
                <Dropdown.Item onClick={() => { this.props.history.push("multymuro") }}> Multymuro</Dropdown.Item>
                <Dropdown.Item onClick={() => { this.props.history.push("glamet") }}> Glamet</Dropdown.Item>
                <Dropdown.Item onClick={() => { this.props.history.push("econotecho") }}> Econotecho</Dropdown.Item>
                <Dropdown.Item onClick={() => { this.props.history.push("refrimuro") }}> Refrimuro</Dropdown.Item>
                <Dropdown.Item onClick={() => { this.props.history.push("metcopo") }}> Metcopo</Dropdown.Item>
                <Dropdown.Item onClick={() => { this.props.history.push("losacero") }}> Losacero</Dropdown.Item>
                <Dropdown.Item onClick={() => { this.props.history.push("lamina") }}> Lámina</Dropdown.Item>
                <Dropdown.Item onClick={() => { this.props.history.push("arcotechos") }}> Arcotecho</Dropdown.Item>
                <Dropdown.Item onClick={() => { this.props.history.push("estructurasmetalicas") }}> Estructuras</Dropdown.Item>
              </DropdownButton>
              <Button className='app-nav__buttons-nav__button' variant={'warning'} onClick={() => { this.props.history.push('contact') }}>Contacto</Button>
              <Button className='app-nav__buttons-nav__button' variant={'warning'} onClick={() => { this.props.history.push('proyectos') }}>Proyectos</Button>
              <Button className='app-nav__buttons-nav__button' variant={'warning'} onClick={() => { this.props.history.push('manuales') }}>Manuales y catálogos</Button>
            </div>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(AppNavbar);
