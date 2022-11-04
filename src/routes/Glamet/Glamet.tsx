import React, { Component } from "react";
import pdf from "../../images/logo/pdf.png"
import img from "../../images/projects/project-image-8.jpg"
import '../../css/plugins.css';
import '../../style.css';
import { Table } from "react-bootstrap";
const agent_file = require('../../pdf/glamet.pdf');


type Props = {};
type State = {};

class DashboardLayout extends Component<Props, State> {

  render() {
    return (
      <React.Fragment>
        <main id="page-content">
          <div className="cr-breadcrumb-area bg-breadcrumb-1 title-page" data-overlay="7">
            <div className="container">
              <div className="cr-breadcrumb">
                <h1>Glamet</h1>
              </div>
            </div>
          </div>
          <section className="product-area">
            <div className="product-flex">
              <div className="flex-product-column">
                <div className="flex-product-row">
                  <div className="product-image">
                    <img src={img} alt="beautiful background"></img>
                  </div>
                  <div className="product-sumary">
                    <h5>Fabricante</h5>
                    <a href="">
                      <p>Metecno</p>
                    </a>
                    <h5>Categoría</h5>
                    <a href="">
                      <p>Cubierta</p>
                    </a>
                    <h5>Descrición</h5>
                    <a href="">
                      <p>Panel metálico</p>
                    </a>
                  </div>
                  <div className="card">
                    <a href={agent_file} download="ficha.pdf"><img src={pdf} ></img>
                      <div className="container">
                        <b>Ficha técnica</b>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="product-specs">
                  <p><b>Glamet</b>es un panel metálico para cubiertas, tipo sandwich, inyectado en línea continua con poliuretano expandido de alta densidad (40 Kg/m3) y ambas caras en lámina de acero galvanizada prepintada.</p>
                  <br></br>
                  <br></br>
                  <h5> Usos </h5>
                  <ul>
                    <li>Elemento de cubierta para edificaciones industriales, comerciales y residenciales.
                            </li>
                    <li>Elemento para fachadas por la rigidez que proporcionan las nervaduras.
                            </li>
                  </ul>
                  <br></br>
                  <br></br>
                  <h5>Características del producto</h5>
                  <ul>
                    <li>Elevada resistencia mecánica con posibilidad de mayor separación entre apoyos.
                            </li>
                    <li>Optimo aislamiento térmico y acústico.
                            </li>
                    <li>Permite suprimir la instalación de plafón / cielo raso u otro detalle de acabado.
                            </li>
                    <li>Excelente acabado interior y exterior.</li>
                    <li>Ligero.</li>
                  </ul>
                </div>
                <br></br>
                <br></br>
                <h5>Presentaciones</h5>
                <Table responsive >
                  <tr>
                    <th>Producto</th>
                    <th>Espesor</th>
                    <th>Calibre exterior</th>
                    <th>Presentación cara exterior</th>
                    <th>Calibre cara interior</th>
                    <th>Presentación cara interior</th>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </Table>
              </div>
            </div>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default DashboardLayout;
