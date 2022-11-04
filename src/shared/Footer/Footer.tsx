import React, { Component } from "react";
import "./Footer.scss";
import '../../css/plugins.css';
import '../../style.css'

import logoWhite from '../../images/logo/logo-white.png'
import tw from './images/logo/tw.png'
import fb from './images/logo/fb.png'
import { RouteComponentProps, withRouter } from "react-router-dom";

type Props = RouteComponentProps & {
  toggleSidebar?: () => {}
};

type State = {
};
class Footer extends Component<Props, State> {

  render() {
    return (
      <div className="footer bg-dark">
        <div className="footer-top-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <ul className="footer-social-icons">

                  <li>
                    <a href="https://twitter.com/panelesyarcos?lang=es"><img src={tw} alt="logo theme"></img> </a>
                  </li>

                  <li>
                    <a href="https://www.facebook.com/TERMIPANEL1/"><img src={fb} alt="logo theme"></img></a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        <div className="footer-bottom-area section-padding-xs">
          <div className="container">
            <div className="row widgets footer-widgets">

              <div className="col-lg-3">
                <div className="single-widget widget-about">
                  <h5 className="widget-title">Suministro de paneles</h5>
                  <a href="index.html">
                    <img src={logoWhite} alt="footer logo"></img>
                  </a>
                  <p>Somos una empresa 100% Mexicana dedicada desde 2016 a la comercialización e instalación de paneles, con servicio en toda la Republica Mexicana.</p>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="single-widget widget-quick-links">
                  <h5 className="widget-title">Conoce</h5>
                  <ul>
                    <li><a href="nosotros">Sobre nosotros</a></li>
                    <li><a href="proyectos">Proyectos</a></li>
                    <li><a href="#" onClick={() => {this.props.history.push(`main`, {product: true})}}>Productos</a></li>
                    <li><a href="contact">Contacto</a></li>

                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <iframe title='map' width="100%" height="230" src="https://www.google.com/maps/embed/v1/place?q=place_id:EkVDYW1pbm8gYSBUZXBleHBhbiwgRWppZG8gZGUgVGVxdWlzaXRsYW4sIFRlcXVpc2lzdGzDoW4sIE3DqXguLCBNZXhpY28iLiosChQKEgkhCk9UxO7RhRHATyVtyM29exIUChIJ7VWFSdvu0YURx7SH_t8hrS8&key=AIzaSyBh0oT1s0VaBt2W-O6QfDQ611YfK1V43G4"></iframe>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);
