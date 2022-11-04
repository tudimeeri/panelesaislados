import React, { Component } from "react";
import pdf from "../../images/logo/pdf.png"
import img from "../../images/projects/project-image-3.jpg"
import '../../css/plugins.css';
import '../../style.css';
import { Table } from "react-bootstrap";
const agent_file = require('../../pdf/metcoppo.pdf');


type Props = {};
type State = {};

class Metcopo extends Component<Props, State> {

  render() {
    return (
      <React.Fragment>
        <main id="page-content">
          <div className="cr-breadcrumb-area bg-breadcrumb-1 title-page" data-overlay="7">
            <div className="container">
              <div className="cr-breadcrumb">
                <h1>Metcopo</h1>
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
                      <p>Techo</p>
                    </a>
                    <h5>Descrición</h5>
                    <a href="">
                      <p>Panel metálico para cubiertas</p>
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
                  <p><b>Metcopo</b> es un panel metálico para cubiertas, inyectado en línea continua con poliuretano expandido de alta densidad (40 Kg/m3),cara externa en lámina de acero galvanizada prepintada, en forma de teja acanalada y cara interna
                            en acero galvanizada prepintada.</p>
                  <br></br>
                  <br></br>
                  <h5> Usos </h5>
                  <p>Elemento de cubierta para edificaciones industriales, comerciales y residenciales, con alta apariencia estética que permite suprimir la cubierta de teja tradicional, brindando aislamiento térmico y mejores condiciones de confort.</p>

                  <br></br>
                  <br></br>

                  <h5>Características del producto</h5>
                  <ul>
                    <li> Elevada resistencia mecánica con posibilidad de mayor separación entre apoyos.</li>
                    <li> Óptimo aislamiento térmico y acústico.</li>
                    <li> Permite suprimir la instalación de plafón / cielo raso u otro detalle de acabado.</li>
                    <li> Compatible con diferentes sistemas deacabados.</li>
                    <li> Excelente aspecto estético en combinación con el medio ambiente. La cara externa generalmente es solicitada en color rojo terracota, por su similitud con la teja de barro tradicional.</li>
                    <li> Ligero.</li>
                    <li> Elimina el mantenimiento de un techado de teja tradicional.
                            </li>
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

export default Metcopo;
