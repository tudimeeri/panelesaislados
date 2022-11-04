import React, { Component } from "react";
import pdf from "../../images/logo/pdf.png"
import img from "../../images/projects/project-image-6.jpg"
import '../../css/plugins.css';
import '../../style.css';
import { Table } from "react-bootstrap";
const agent_file = require('../../pdf/multymuro.pdf');


type Props = {};
type State = {};

class Multymuro extends Component<Props, State> {

  render() {
    return (
      <React.Fragment>
        <main id="page-content">
          <div className="cr-breadcrumb-area bg-breadcrumb-1 title-page" data-overlay="7">
            <div className="container">
              <div className="cr-breadcrumb">
                <h1>Multymuro</h1>
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
                      <p>Ternium</p>
                    </a>
                    <h5>Categoría</h5>
                    <a href="">
                      <p>Muro</p>
                    </a>
                    <h5>Descrición</h5>
                    <a href="">
                      <p>Panel aislante</p>
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
                  <p><b>Multymuro</b> es un panel aislante fabricado en proceso continuo, compuesto por un núcleo de espuma rígida de poliuretano (PUR) y dos caras de acero Ternium Pintro unidas por el propio núcleo. Cuenta con un sistema de fijación
                            oculta que facilita su instalación.</p>
                  <br></br>
                  <br></br>
                  <h5> Usos </h5>
                  <ul>
                    <li>Muros para aplicaciones comerciales e industriales, cuartos fríos, naves refrigeradas, casetas. El uso como cuarto de congelación (temperaturas menores a -10° C) queda sujeto a revisión técnica.
                            </li>
                    <li>Diferencial de temperatura máxima (temperatura de lámina exterior – temperatura de lámina interior) : 50°C.
                            </li>
                    <li>Cuando se excede el diferencial de temperatura, los esfuerzos térmicos generados al panel pudieran derivar en quiebres de la lámina si la distancia entre apoyos de la estructura y la longitud del panel no son las adecuadas.
                            </li>
                    <li>La utilización de Panel con espuma base Isocianurato (PIR) con certificación contra fuego será bajo consulta técnica.</li>
                  </ul>
                  <br></br>
                  <br></br>
                  <h5>Características del producto</h5>
                  <ul>
                    <li>Unión lateral off-set que proporciona una excelente hermeticidad</li>
                    <li>Sistema de fijación oculta, clip galvanizado cal. 16 para muro (excepto para espesores de panel de 1.5”).</li>
                    <li>Cuenta con un sistema integral de accesorios metálicos y no metálicos necesarios para una solución integral libre de filtraciones y puentestérmicos</li>
                    <li>Muy importante: La cara Micro V – Micro V solo se recomienda para uso interior, para aplicaciones en exterior el Multymuro deberá ser en presentación Mesa oStuko.</li>
                  </ul>
                </div>


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
                    <td> Ternium Multymuro Micro V</td>
                    <td>1.5", 2", 2.5", 3" y 4" </td>
                    <td>26</td>
                    <td>Embozado Std. ó Liso </td>
                    <td>26</td>
                    <td>Embozado Std ó Liso</td>
                  </tr>
                  <tr>
                    <td> Ternium Multymuro Mesa</td>
                    <td>1.5", 2", 2.5", 3" y 4" </td>
                    <td>26</td>
                    <td>Embozado Std. ó Liso </td>
                    <td>26</td>
                    <td>Embozado Std ó Liso</td>
                  </tr>
                  <tr>
                    <td> Ternium Multymuro Stuko</td>
                    <td>1.5", 2", 2.5", 3" y 4" </td>
                    <td>26</td>
                    <td>Embozado Stuko </td>
                    <td>26</td>
                    <td>Embozado Std ó Liso</td>
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

export default Multymuro;
