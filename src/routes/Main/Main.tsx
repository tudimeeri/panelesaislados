import React, { Component, createRef } from "react";
import img1 from "../../images/icons/icons8-roofing-52 (1).png";
import img2 from "../../images/icons/icons8-pavilion-52.png";
import img3 from "../../images/others/about-image-1.png";
import img4 from "../../images/icons/icons8-control-panel-52.png";
import img5 from "../../images/icons/icons8-shunt-52.png";
import img6 from "../../images/icons/icon01.png";
import img7 from "../../images/icons/icons8-structural-52.png";
import img8 from "../../images/icons/icons8-feed-paper-52.png";
import img9 from "../../images/projects/project-image-4.jpg";
import img10 from "../../images/projects/project-image-6.jpg";
import img11 from "../../images/projects/project-image-8.jpg";
import img12 from "../../images/projects/project-image-5.jpg";
import img13 from "../../images/projects/project-image-7.jpg";
import img14 from "../../images/projects/project-image-3.jpg";
import img15 from "../../images/projects/project-image-9.jpg";
import img16 from "../../images/projects/project-image-10.jpg";
import img17 from "../../images/projects/CUBIERTA ARCOSOPORTANTE CON TRASLUCIDAS.jpg";
import img18 from "../../images/projects/project-image-1.jpg";
import img19 from "../../images/brand-logos/brand-logo-1.png";
import img20 from "../../images/brand-logos/brand-logo-2.png";
import img21 from "../../images/brand-logos/brand-logo-3.png";
import img22 from "../../images/brand-logos/brand-logo-4.png";
import img23 from "../../images/brand-logos/brand-logo-5.png";
import img24 from "../../images/testimonial/testimonial-author-image-1.png";
import imgcarrousel1 from "../../images/bg/bg-image-1.jpg";
import imgcarrousel2 from "../../images/bg/bg-image-2.jpg";
import imgcarrousel3 from "../../images/bg/CASETA.jpg";
import imgcarrousel4 from "../../images/bg/Arcoteccho.jpg";
import './Main.scss';
import '../../css/plugins.css';
import '../../style.css';
import { RouteComponentProps, Link } from "react-router-dom";
import CarouselComp from '../Carousel/Carousel';
import { Carousel } from 'react-bootstrap';

type Props = RouteComponentProps & {
  location?: any;
};
type State = {};

class DashboardLayout extends Component<Props, State> {
  Ref = createRef<HTMLDivElement>();
  scrollToRef = () => {
    const ref = this.Ref.current;
    if (ref) {
      window.scrollTo(0, ref.offsetTop);
    }
  };

  componentDidMount() {
    if (this.props.location.state) {
      this.scrollToRef();
    }
  }

  render() {
    return (
      <React.Fragment>
        <CarouselComp></CarouselComp>
        <main id="page-content">
          <div className="call-to-action-area bg-theme">
            <div className="container">
              <div className="call-to-action">
                <h5><b>Podemos ayudarlo a desarrollar su proyecto </b><br></br> y brindarle la asesoría técnica que requiera.</h5>
                <div className="button-group">
                  <Link to="/contact" className="cr-btn cr-btn-transparent cr-btn-white" >
                    <span>Solicitar cotización</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <section className="cr-section about-area bg-white section-padding-md">
            <div style={{ marginTop: "-5%;" }} className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="section-title">
                    <h3>Acerca de</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="row text-image-row">
                    <div className="col-md-12">
                      <div className="about-area-timeline">
                        <div className="about-timeline-single">
                          <span className="about-timeline-icon"><img src={img1} alt="about timeline icon"></img></span>
                          <div className="about-timeline-content">
                            <h5>Distribuidor directo de: </h5>
                            <p>Ternium México S.A. de C.V. <br></br> Productos: </p>
                            <ul>
                              <li><strong style={{ color: "#436078" }}>Multytecho, Multitecho</strong></li>
                              <li><strong style={{ color: "#436078" }}>Galvatecho</strong></li>
                              <li><strong style={{ color: "#436078" }}>Econotecho (lamina/vinil)</strong></li>
                              <li><strong style={{ color: "#436078" }}>Multymuro, Multimuro</strong></li>
                              <li><strong style={{ color: "#436078" }}>Frigomultymuro</strong></li>
                              <li><strong style={{ color: "#436078" }}>Y otros que fabrica.</strong></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row text-image-row">
                    <div className="col-md-12">
                      <div className="about-area-timeline">
                        <div className="about-timeline-single">
                          <span className="about-timeline-icon"><img src={img2} style={{ maxWidth: "52px", maxHeight: "52px" }} alt="about timeline icon"></img></span>
                          <div className="about-timeline-content">
                            <p>Metecno S.A. de C.V. <br></br>Productos:</p>
                            <ul>
                              <li><strong style={{ color: "#436078" }}>Glamet-(techmet)</strong></li>
                              <li><strong style={{ color: "#436078" }}>Superwall</strong></li>
                              <li><strong style={{ color: "#436078" }}>Superwall Flat</strong></li>
                              <li><strong style={{ color: "#436078" }}>Superwall Frigo</strong></li>
                              <li><strong style={{ color: "#436078" }}>Metcoppo (teja acanalada)</strong></li>
                              <li><strong style={{ color: "#436078" }}>Hipertec Wall (lana de roca)</strong></li>
                              <li><strong style={{ color: "#436078" }}>Hipertec Wall Sound (lana de roca)</strong></li>
                              <li><strong style={{ color: "#436078" }}>Y otros que fabrica.</strong></li>
                            </ul>
                            <p>*Oferta de servicio para fabricación de cuatro a cinco semanas, <br></br> productos en acabado duraplus, espuma clase 1 y lana de roca, <br></br> bajo consulta técnica.
                                    </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-area-images">
                    <img src={img3} alt="about large" className="large-image"></img>
                  </div>
                </div>
              </div>

              <div className="row text-image-row">
                <div className="col-md-6">
                  <div className="about-timeline-single">
                    <span className="about-timeline-icon"><img src={img4} alt="about timeline icon"></img></span>
                    <div className="about-timeline-content ">
                      <h5 style={{ color: "red" }}>Entrega de 24 a 72 Horas.</h5>
                      <p><strong>Multytecho de 1.5"</strong> de espesor, cal. 26/28, en color arena std./embozado, pol.std., en medidas de 3.00 hasta 12.00 m., ancho efectivo 1.00 m.
                            <br></br>
                        <strong>Multymuro de 1.5"</strong> de espesor, cal. 26/26, en color arena std./embozado, pol.std., en medidas de 3.00 hasta 12.00 m., ancho efectivo 1.067 m.
                        </p>
                      <hr></hr>
                      <p>
                        <strong>Galvatecho de 1.5"</strong> de espesor, cal. 26/28, en color arena ral/liso, pol. std., en medidas de 3.00 hasta 12.00 m., ancho efectivo 1.00 m.
                            <br></br>
                        <strong>Econotecho de 1.5"</strong> de espesor, acabado exterior en lámina cal. 26, en color arena ral/liso, pol. std., acabado interior en vinil color blanco, en medidas de 6.00 y 12.00 m.* , ancho efectivo
                        1.00 m.
                        </p>
                      <hr></hr>
                      <p>
                        <strong>Glamet de 1.5"</strong> de espesor, cal. 26/28, en color arena ral/liso, pol.std., en medidas de 3.00 hasta 12.00 m. , ancho efectivo 1.00 m.
                            <br></br>
                        <strong>Superwall de 1.5" </strong>de espesor, cal. 26/26, en color arena ral/liso, pol.std., en medidas de 3.00 hasta 12.00 m., ancho efectivo 1.00 m.
                        </p>
                      <hr></hr>
                      <p>
                        <strong>Glamet  de 1"</strong> de espesor, cal. 26/28, en color arena ral/liso, pol.std., en medidas de 10.00, 11.00 y 12.00 m.*, ancho efectivo 1.00 m.<br></br>
                        <strong>Glamet de 2" </strong>de espesor, cal. 26/28, en color arena ral/liso, pol.std., de 8.00, 9.00, 10.00, 11.00 y 12.00 m.*, ancho efectivo 1.00 m.
                        </p>
                      <hr></hr>
                      <p>
                        <strong> Metalpanel Muro de 40 y 50 mm.</strong> de espesor, cal. 26/28, <strong>60, 80,100 y 150 mm.</strong> de espesor, cal. 26/26, en color blanco grisáceo/liso , pol. std., en medidas de 11,95 m.*, ancho efectivo 1.00 m.
                            <br></br>
                        <strong>Metalpanel Techo de 30, 40, 50, 60, 80 y 100 mm.</strong> de espesor, cal. 26/28, en color blanco grisáceo/liso, pol. std., en medida de 11.95 m.*, ancho efectivo 1.00 m.
                        </p>
                      <hr></hr>
                      <p>
                        <strong>Hipertec Wall de 2"</strong> de espesor, cal. 5/.5, en color arena ral 9002/liso, pol. std., en medida de 11.90 m.*<br></br>
                        <strong>Hipertec Wall Sound de 2" y 4"</strong> de espesor, cal. .5/.6, en color arena ral 9002/liso, pol. std., en medida de 11.90 m.*
                        </p>
                      <hr></hr>
                      <p>Sujeto a existencias. <br></br> * En estos productos solo comercializamos piezas completas. (con corte si lo requieren).
                        </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-area-images">
                  </div>
                </div>
              </div>

              <div className="row text-image-row">
                <div className="col-md-6">
                  <div className="about-timeline-single">
                    <span className="about-timeline-icon"><img src={img5} alt="about timeline icon"></img></span>
                    <div className="about-timeline-content">
                      <h5>Perfiles, Accesorios y Selladores </h5>
                      <p>Los Sistemas Constructivos se complementan con la utilización de:</p>
                      <p>Tapagoteros, Caballetes Lisos, Canales "U", Esquineros Exteriores, Esquineros Interiores, y otros. </p>
                      <p>Placas de fijación tipo omega para el Multytecho, Clips para fijación del Galvatecho, Glamet, Metalpanel techo, Tornillería, Closures y otros. </p>
                      <p>Cartuchos de Sellador Soudaflex y Isobutilo, Adhesivo Imperflex (se aplica para protección de la espuma expuesta a la humedad), Cintas de Caucho Butílico y otros. </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-area-images">
                  </div>
                </div>
              </div>

              <div className="row text-image-row">
                <div className="col-md-6">
                  <div className="about-timeline-single">
                    <span className="about-timeline-icon"><img src={img6} style={{ maxWidth: "52px", maxHeight: "52px" }} alt="about timeline icon"></img></span>
                    <div className="about-timeline-content">
                      <h5>Arcotechos</h5>
                      <p><strong>Fabricación e Instalación </strong> de Sistema Autosoportante en forma de arco de una sola pieza para cubrir claros de hasta 35.00 metros. Se fabrica a través de rolado de lámina lisa, combada y engargolada
                          en sitio. Puede ser en acabado pintro, galvanizado, zintro, zintro alum, en calibres 24, 22,20, 18 y 16, dependiendo del claro a cubrir , asi como la zona donde se ubique. Tiene aproximadamente una vida útil de
                          50 años.
                        </p>
                      <p><strong>De Membrana</strong>, se recomienda que sean desplantados sobre apoyos altos con una flecha del 20% , debido a que la altura es relativamente baja en relación al claro cubierto.
                            <br></br>
                        <strong>Semi Circular</strong>, su característica principal es que se puede desplantar o fijar en apoyos bajos, dado a que su altura es considerablemente alta en relación al claro que cubre.
                        </p>
                      <p>El Sistema constructivo se complementa con : Canalon a base de placa de acero, Lámina traslúcida, Colgantes (cintas), Muros Metálicos (tímpanos), Tapajuntas, Botaguas y Extractores atmósfericos.
                        </p>
                      <p>*Oferta de servicio en la Ciudad de México y Estados Colindantes.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-area-images">
                  </div>
                </div>
              </div>
              <div className="row text-image-row">
                <div className="col-md-6">
                  <div className="about-timeline-single">
                    <span className="about-timeline-icon"><img src={img7} alt="about timeline icon"></img></span>
                    <div className="about-timeline-content">
                      <h5>Estructuras metálicas y Herrería</h5>
                      <p><strong>Fabricación e Instalación</strong> de estructuras metálicas para todo tipo de proyectos, entrepisos, portones y todo lo relacionado a la construcción.</p>
                      <p>*Oferta de servicio en la Ciudad de México y Estados Colindantes.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-area-images">
                  </div>
                </div>
              </div>
              <div className="row text-image-row">
                <div className="col-md-6">
                  <div className="about-timeline-single">
                    <span className="about-timeline-icon"><img src={img8} alt="about timeline icon"></img></span>
                    <div className="about-timeline-content">
                      <h5>Láminas Metálicas </h5>
                      <p><strong>Suministro </strong>de Láminas Tipo R-72, R-101, O-100 y KR-18.
                            <br></br>*Fabricación de largos especiales, hasta 12.20 m., en diferentes calibres.
                            <br></br>Entrega en 72 horas.
                        </p>
                      <p><strong>Suministro</strong> de Láminas Lisas, O-30, RN-100/35, Losacero 25, Losacero 15. <br></br>*Fabricación de largos especiales, hasta 12.20 m., en diferentes calibres.<br></br> Entrega en 72 horas.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-area-images">
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="cr-section portfolio-area bg-dark section-padding-md" id="products">
            <div ref={this.Ref} className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="section-title">
                    <h3>Productos</h3>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center sa-projects sa-projects-popup-active">
                <div className="col-lg-4 col-md-6 col-12 sa-project-single project-residencial ">
                  <div className="single-project">
                    <div className="single-project-thumb " data-src={img9}>
                      <a href="multytecho"><img src={img9} alt="Multytecho"></img></a>
                    </div>
                    <div className="single-project-content">
                      <h5><a href="multytecho">Multytecho</a></h5>
                      <ul className="project-tags">
                      </ul>
                      <div className="loadmore-btn-holder">
                        <a className="cr-btn cr-loadmore-btn"><span>Proyectos</span></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 sa-project-single project-publico">
                  <div className="single-project">
                    <div className="single-project-thumb" data-src={img10}>
                      <a href="multymuro"><img src={img10} alt="Multymuro"></img></a>
                    </div>
                    <div className="single-project-content">
                      <h5><a >Multymuro</a></h5>
                      <ul className="project-tags">
                      </ul>
                      <div className="loadmore-btn-holder">
                        <a className="cr-btn cr-loadmore-btn"><span>Proyectos</span></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 sa-project-single project-farmaceutico">
                  <div className="single-project">
                    <div className="single-project-thumb" data-src={img11}>
                      <a href="glamet"><img src={img11} alt="Glamet"></img></a>
                    </div>
                    <div className="single-project-content">
                      <h5><a href="glamet">Glamet</a></h5>
                      <ul className="project-tags">
                      </ul>

                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12 sa-project-single project-farmaceutico">
                  <div className="single-project">
                    <div className="single-project-thumb" data-src={img12}>
                      <a href="econotecho"><img src={img12} alt="Econotecho"></img></a>
                    </div>
                    <div className="single-project-content">
                      <h5><a href="econotecho">Econotecho</a></h5>
                      <ul className="project-tags">
                      </ul>
                      <div className="loadmore-btn-holder">
                        <a href="econotecho" className="cr-btn cr-loadmore-btn"><span>Proyectos</span></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 sa-project-single project-residencial">
                  <div className="single-project">
                    <div className="single-project-thumb" data-src={img13}>
                      <a href="refrimuro"><img src={img13} alt="Refrimuro"></img></a>
                    </div>
                    <div className="single-project-content">
                      <h5><a href="refrimuro">Refrimuro</a></h5>
                      <ul className="project-tags">
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 sa-project-single project-agroindustrial">
                  <div className="single-project">
                    <div className="single-project-thumb" data-src={img14}>
                      <a href="metcopo"><img src={img14} alt="Metcoppo"></img></a>
                    </div>
                    <div className="single-project-content">
                      <h5><a href="metcopo">Metcoppo</a></h5>
                      <ul className="project-tags">
                      </ul>

                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 sa-project-single project-publico">
                  <div className="single-project">
                    <div className="single-project-thumb" data-src={img15}>
                      <a href="losacero"><img src={img15} alt="Losacero"></img></a>
                    </div>
                    <div className="single-project-content">
                      <h5><a href="losacero">Losacero</a></h5>
                      <ul className="project-tags">
                      </ul>

                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12 sa-project-single project-comercial">
                  <div className="single-project">
                    <div className="single-project-thumb" data-src={img16}>
                      <a href="lamina"><img src={img16} alt="Laminas"></img></a>
                    </div>
                    <div className="single-project-content">
                      <h5><a href="lamina">Panel fonoaislante</a></h5>
                      <ul className="project-tags">
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12 sa-project-single project-comercial">
                  <div className="single-project">
                    <div className="single-project-thumb" data-src={img17}>
                      <a href="arcotechos"><img src={img17} alt="Arcotechos"></img></a>
                    </div>
                    <div className="single-project-content">
                      <h5><a href="arcotechos">Arcotechos</a></h5>
                      <ul className="project-tags">
                      </ul>

                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 sa-project-single project-carnico">
                  <div className="single-project">
                    <div className="single-project-thumb" data-src={img18}>
                      <a href="estructurasmetalicas"><img src={img18} alt="Estructuras Metálicas"></img></a>
                    </div>
                    <div className="single-project-content">
                      <h5><a href="estructurasmetalicas">Estructuras Metálicas</a></h5>
                      <ul className="project-tags">
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section><br></br><br></br>
          <div className="cr-section testimonial-brand-logo-area bg-white section-padding-bottom-md">
            <div className="container">
              <div className="row">

                <div className="col-lg-6 section-padding-top-md">
                  <div className="section-title">
                    <h3>Somos una empresa que distribuye:</h3>
                  </div>

                  <div className="brand-logos">
                    <a className="brand-logo">
                      <img src={img19} alt="brand logo"></img>
                    </a>
                    <a className="brand-logo">
                      <img src={img20} alt="brand logo"></img>
                    </a>
                    <a className="brand-logo">
                      <img src={img21} alt="brand logo"></img>
                    </a>
                    <a className="brand-logo">
                      <img src={img22} alt="brand logo"></img>
                    </a>
                    <a className="brand-logo">
                      <img src={img23} alt="brand logo"></img>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 section-padding-top-md">
                  <div className="section-title">
                    <h3>Testimoniales</h3>
                  </div>
                  <div className="testimonial2-wrapper">
                    <div className="testimonial2">
                      <div className="testimonial2-text">
                        <p>Ayudaron mucho a mi empresa en cuanto a construcción se refiere</p>
                      </div>
                      <div className="testimonial2-author">
                        <div className="testimonial2-author-image">
                          <img src={img24} alt="author image"></img>
                        </div>
                        <div className="testimonial2-author-content">
                          <h5>Jorge Díaz</h5>
                          <h6>CEO</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </main>
      </React.Fragment>
    );
  }
}

export default DashboardLayout;
