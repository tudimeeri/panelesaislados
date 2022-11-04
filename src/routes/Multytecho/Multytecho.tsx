import React, { Component } from "react";
import '../../css/plugins.css';
import '../../style.css';
import img1 from "../../images/projects/project-image-4.jpg"
import pdf from "../../images/logo/pdf.png"
import { Table } from "react-bootstrap";
const agent_file = require('../../pdf/multytecho.pdf');

type Props = {};
type State = {};

class Multytecho extends Component<Props, State> {

  render() {
    return (
      <React.Fragment>
        <main id="page-content">
          <div className="cr-breadcrumb-area bg-breadcrumb-1 title-page" data-overlay="7">
            <div className="container">
              <div className="cr-breadcrumb">
                <h1>Multytecho</h1>
              </div>
            </div>
          </div>
          <section className="product-area">
            <div className="product-flex">
              <div className="flex-product-column">
                <div className="flex-product-row">
                  <div className="product-image">
                    <img src={img1} alt="beautiful background"></img>
                  </div>
                  <div className="product-sumary">
                    <h5>Fabricante</h5>
                    <a href="">
                      <p>Ternium</p>
                    </a>
                    <h5>Categoría</h5>
                    <a href="">
                      <p>Techo</p>
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
                  <p><b>Multytecho</b> es un panel sándwich para cubiertas prefabricadas, que se fabrica en un proceso continuo; esta compuesto por un núcleo de espuma rígida de poliuretano y dos caras de acero Ternium Pintro, ambas caras van adheridas
                      químicamente en forma continua mediante el propio núcleo. Este producto está diseñado para cubiertas de una gran diversidad de aplicaciones, es complementado con una tapajunta que ensambla como clip a presión sobre las crestas
                      laterales, para cubrir la unión longitudinal hembra-macho y los accesorios de fijación.
                        </p>
                  <br></br>
                  <br></br>
                  <h5> Usos </h5>
                  <ul>
                    <li>Cubiertas</li>
                    <li>Fachadas</li>
                    <li>Faldones de Naves Industriales</li>
                    <li>Centros Comerciales</li>
                    <li>Cámaras de Congelación y Refrigeración</li>
                    <li>Casetas</li>
                    <li>etc.</li>

                  </ul>

                  <br></br>
                  <br></br>

                  <h5>Características del producto</h5>
                  <ul>
                    <li> Excelente aislamiento térmico, resistencia estructural y a la intemperie; fácil y rápido de instalar, adaptable a un gran número de aplicaciones constructivas.</li>
                    <li> Pendiente mínima recomendada 5%, longitud máxima de vertiente 60.00 mts.</li>
                    <li> Traslape mínimo recomendado 200 mm (~8”)</li>
                    <li> De manera opcional se puede suministrar con la cara interior precortada para facilitar su instalación, cuando la pieza va a ser traslapada.</li>

                    <p>*Cubiertas con pendientes menores y/o longitudes mayores quedan sujetas a revisión individual bajo Consulta Técnica</p>

                  </ul>

                </div>
                  <br></br>
                  <br></br>

                  <h5>Presentaciones</h5>
                  <Table bordered hover responsive >
                    <thead>
                      <tr>
                        <th>Producto</th>
                        <th>Espesor</th>
                        <th>Calibre exterior</th>
                        <th>Presentación cara exterior</th>
                        <th>Calibre cara interior</th>
                        <th>Presentación cara interior</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> Ternium Multytecho</td>
                        <td>1", 1.5", 2", 2.5", 3", 4", 5"y 6"</td>
                        <td>26</td>
                        <td>Blanco Liso Arena Embozado </td>
                        <td>26</td>
                        <td>Arena Blanco Embozado</td>
                      </tr>
                    </tbody>
                  </Table>
              </div>

            </div>
          </section>

        </main>
      </React.Fragment>
    );
  }
}

export default Multytecho;
