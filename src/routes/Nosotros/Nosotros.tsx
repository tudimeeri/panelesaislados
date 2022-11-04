import React, { Component } from "react";
import img1 from '../../images/others/pg-service-image.jpg';
import img2 from '../../images/calidad.png';
import img3 from '../../images/honestidad.png';
import img4 from '../../images/integridad.png';
import img5 from '../../images/innovacion.png';
import img6 from '../../images/liderazgo.png';
import '../../css/plugins.css';
import '../../css/custom.css';
import '../../style.css';
type Props = {};
type State = {};

class Nosotros extends Component<Props, State> {

  render() {
    return (
      <React.Fragment>
        < main id="page-content">
          <div className="cr-breadcrumb-area bg-breadcrumb-1 title-page" data-overlay="7">
            <div className="container">
              <div className="cr-breadcrumb">
                <h2>Nuestra empresa</h2>
                <ul>
                  <li><a href="index.php">Inicio</a></li>
                  <li>Nosotros</li>
                </ul>
              </div>
            </div>
          </div>
          <section className="cr-section about-area bg-white section-padding-md">
            <div style={{ marginTop: "-5%" }} className="container">

              <div className="cr-section service-page-area bg-grey">
                <div className="row no-gutters align-items-center">
                  <div className="col-xl-6 col-12 order-2 order-xl-1">
                    <div className="pg-service-content text-center">
                      <div className="section-title text-center">
                        <h2>¿Quiénes Sómos?</h2>
                      </div>
                      <p>Somos una empresa 100% Mexicana dedicada desde 2016 a la comercialización e instalación de paneles, con servicio en toda la Republica Mexicana. Brindamos las mejores soluciones de construcción, para que cada uno de nuestros
                                    Clientes cumpla con sus expectativas a realizar en cada una de sus Obras. <br></br> Mejorando e innovando cada parte que se necesite. Autorizada por la planta Ternium México, S.A. De C.V. para comercializar sus productos:
Multytecho, galvatecho, econotecho, multymuro, economuro, asi como otros productos que fabrica. También contamos con autorización de la planta Metecno, S.A. De C.V para la distribución de: Glamet, glamet lv, superwall,
                                    superwall lv, asi como otros productos que fabrica</p>
                      <a href="contact.html" className="cr-btn cr-btn-black cr-btn-transparent">
                        <span>Contactar</span>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-6 col-12 order-1 order-xl-2">
                    <div className="pg-service-thumb">
                      <img src={img1} alt="beautiful background"></img>
                    </div>
                  </div>
                </div>
              </div><br></br><br></br>

              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="funfact">
                    <div className="funfact-inner">
                      <i className="pe-7s-graph1"></i>
                      <h4>VISIÓN</h4>
                      <p>Consolidarnos como la mejor opción en SOLUCIONES INTEGRALES INDUSTRIALES</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="funfact">
                    <div className="funfact-inner">
                      <i className="pe-7s-flag"></i>
                      <h4>MISIÓN</h4>
                      <p>Desarrollar soluciones en servicio y calidad que agreguen valor a nuestros productos.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 col-12 col-centered">
                  <div className="funfact">
                    <div className="funfact-inner">
                      <i className="pe-7s-arc"></i>
                      <h4>OBJETIVOS</h4>
                      <p>Contar con el mejor equipo humano, financiero y material, en beneficio de nuestros clientes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
            <div className='container-fluid'>

              <div className='row justify-content-md-center'>
                <div className='col col-sm-2 col-centered'>
                  <h2>Valores</h2>
                </div>
              </div>

              <br></br>

              <div className='container'>

                <div className="row justify-content-md-center">
                  <div className="col-lg-4 col-md-6 col-centered">
                    <img src={img2} alt="beautiful background"></img>
                    <h4>Calidad</h4>
                  </div>
                  <div className="col-lg-4 col-md-6 col-centered">
                    <img src={img3} alt="beautiful background"></img>
                    <h4>Honestidad</h4>
                  </div>
                  <div className="col-lg-4 col-md-6 col-centered">
                    <img src={img4} alt="beautiful background"></img>
                    <h4>Integridad</h4>
                  </div>
                </div>

                <br></br>
                <br></br>

                <div className="row justify-content-md-center">
                  <div className="col-lg-6 col-md-6 col-centered">
                    <img src={img5} alt="beautiful background"></img>
                    <h4>Innovación</h4>
                  </div>
                  <div className="col-lg-6 col-md-6 col-centered">
                    <img src={img6} alt="beautiful background"></img>
                    <h4>Liderazgo</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main >
      </React.Fragment >
    );
  }
}

export default Nosotros;
