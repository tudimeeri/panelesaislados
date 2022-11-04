import React, { Component } from "react";
import '../../css/plugins.css';
import '../../style.css';
import Formspree from '../../shared/Formspree'
import imgface from "../../images/logo/facewhite.png"

type Props = {};
type State = {};

class Contact extends Component<Props, State> {

  render() {
    return (
      <React.Fragment>
        <main id="page-content">
          <div className="cr-breadcrumb-area bg-breadcrumb-1" data-overlay="7">
            <div className="container">
              <div className="cr-breadcrumb">
                <h2>Contacto</h2>
              </div>
            </div>
          </div>
          <section className="contact-page-top-area bg-white section-padding-sm">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-12">
                  <div className="section-title section-title-2 text-center">
                    <h2>Contacto</h2>
                    <p>Puede contactarnos a cualquiera de las opciones listadas abajo: </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="contact-infobox text-center">
                    <a href="https://goo.gl/maps/eA59hyXXHcYHBBaw9"><span className="contact-infobox-icon"> <i className="pe-7s-map-marker"></i></span></a>
                    <h6>Ubicación</h6>
                    <p> EDO. MÉXICO</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="contact-infobox text-center">
                    <span className="contact-infobox-icon"><i className="pe-7s-call"></i></span>
                    <h6>Número telefónico</h6>
                    <p>Tel: <a href="tel:55 5803 6916">(01) 55 5803 6916</a></p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="contact-infobox text-center">
                    <a href="mailto:ventas.panelesaislados@hotmail.com"><span className="contact-infobox-icon"><i className="pe-7s-mail"></i></span></a>
                    <h6>Correo electrónico</h6>
                    <p><a href="mailto:ventas.panelesaislados@hotmail.com">ventas.panelesaislados@hotmail.com</a></p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="contact-infobox text-center">
                    <a href="https://www.facebook.com/TERMIPANEL1/"><span className="contact-infobox-icon"><img src={imgface} alt="logo theme"></img></span></a>
                    <h6>Facebook</h6>
                    <p><a href="#">Termipane1</a></p>
                  </div>
                </div>

              </div>
            </div>
          </section>
          <section className="contact-page-bottom-area bg-grey section-padding-sm">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-12">
                  <div className="section-title section-title-2 text-center">
                    <h2>Hablanos de tu proyecto</h2>
                  </div>
                </div>
              </div>
              <Formspree></Formspree>
              <p className="form-message"></p>
            </div>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default Contact;
