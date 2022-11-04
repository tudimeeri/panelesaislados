import React, { Component } from "react";
import metecno from '../../images/brand-logos/logo-metecno-specialist-01.jpg'
import ternium from '../../images/brand-logos/1280px-Ternium_Logo.svg.png'
import '../../css/plugins.css';
import '../../style.css';
const glamet = require("../../pdf/FT GLAMET METECNO - PANELES AISLADOS, S.A. DE C.V..pdf")
const superwall = require("../../pdf/MANUAL_TÉCNICO_INSTALACIÓN_SUPERWALL.pdf")
const metecnoManual = require("../../pdf/Catalogo Productos  Metecno.pdf")
const multypanelManual = require("../../pdf/MANUAL_INSTALACIÓN_TERNIU_MULTYPANEL.pdf")
//const manualTerminum = require("../../pdf/Informacion Tecnica Recubiertos Ternium Láminas y Paneles.pdf")

type Props = {};
type State = {};

class Manuales extends Component<Props, State> {

  render() {
    return (
      <React.Fragment>
        <main id="page-content">
          <div className="cr-breadcrumb-area bg-breadcrumb-1 title-page" data-overlay="7">
            <div className="container">
              <div className="cr-breadcrumb">
                <h1>Manuales </h1>
              </div>
            </div>
          </div>
          <section className="manuals-area">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-lg-3 col-centered text-center mx-auto">
                  <a href={glamet} download='manual.pdf'>
                    <div className="card card-block d-flex mx-auto">
                      <div className="card-body align-items-center d-flex justify-content-center">
                        <img src={metecno} alt="Avatar"
                          style={{ width: "100%", margin: "auto" }}></img>
                      </div>
                    </div>
                  </a>
                  <h5>Glamet</h5>
                </div>
                <div className="col-md-6 col-lg-3 col-centered text-center mx-auto">
                <a href={superwall} download='manual.pdf'>
                    <div className="card card-block d-flex mx-auto">
                      <div className="card-body align-items-center d-flex justify-content-center">
                        <img src={metecno} alt="Avatar"
                          style={{ width: "100%", margin: "auto" }}></img>
                      </div>
                    </div>
                  </a>
                  <h5>Superwall</h5>
                </div>
                <div className="col-md-6 col-lg-3 col-centered text-center mx-auto">
                  <a href={metecnoManual} download='catalogo.pdf'>
                    <div className="card card-block d-flex mx-auto">
                      <div className="card-body align-items-center d-flex justify-content-center">
                        <img src={metecno} alt="Avatar"
                          style={{ width: "100%", margin: "auto" }}></img>
                      </div>
                    </div>
                  </a>
                  <h5>Catálogo Metecno</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-3 col-centered text-center mx-auto">
                  <a href={multypanelManual} download='manual.pdf'>
                    <div className="card card-block d-flex mx-auto">
                      <div className="card-body align-items-center d-flex justify-content-center">
                        <img src={ternium} alt="Avatar"
                          style={{ width: "100%", margin: "auto" }}></img>
                      </div>
                    </div>
                  </a>
                  <h5>Multypanel</h5>
                </div>
                <div className="col-md-6 col-lg-3 col-centered text-center mx-auto">
                  <a href='' download='manual.pdf'>
                    <div className="card card-block d-flex mx-auto">
                      <div className="card-body align-items-center d-flex justify-content-center">
                        <img src={ternium} alt="Avatar"
                          style={{ width: "100%", margin: "auto" }}></img>
                      </div>
                    </div>
                  </a>
                  <h5>Manual Ternium</h5>
                </div>
              </div>
            </div>

          </section>

        </main>
      </React.Fragment>
    );
  }
}

export default Manuales;
