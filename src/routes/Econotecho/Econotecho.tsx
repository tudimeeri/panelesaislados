import React, { Component } from "react";
import img from "../../images/projects/project-image-5.jpg"
import pdf from "../../images/logo/pdf.png"
import '../../css/plugins.css';
import '../../style.css';
import { Table } from "react-bootstrap";
const agent_file = require('../../pdf/econotecho.pdf');


type Props = {};
type State = {};

class Econotecho extends Component<Props, State> {

  render() {
    return (
      <React.Fragment>
        <main id="page-content">
          <div className="cr-breadcrumb-area bg-breadcrumb-1 title-page" data-overlay="7">
            <div className="container">
              <div className="cr-breadcrumb">
                <h1>Econotecho</h1>
              </div>
            </div>
          </div>
          <section className="product-area">
            <div className="product-flex">
              <div className="flex-product-column">
                <div className="flex-product-row">
                  <div className="product-image">
                    <img src={img} alt="beautiful background "></img>
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
                      <p>-</p>
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
                  <p><b>Econotecho </b>es una opción económica de panel aislante para cubiertas, fabricado con la cara exterior de acero y la cara interior de vinil.</p>
                  <br></br>
                  <br></br>
                  <h5> Usos </h5>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <br></br>
                  <br></br>
                  <h5>Características del producto</h5>
                  <ul>
                    <li>Traslape mínimo recomendado 150 mm (6”).
                            </li>
                    <li>Pendiente mínima 5%, longitud máxima de vertiente 60.0 mts.
                            </li>
                    <p>*Cubiertas con pendientes menores y/o longitudes mayores quedan sujetas a revisión individual bajo consulta técnica</p>
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
                    <th>Presentación cara interior</th>
                  </tr>
                  <tr>
                    <td> Ternium Econotecho</td>
                    <td> 1”, 1.5" y 2" </td>
                    <td>26</td>
                    <td>Liso o embozado </td>
                    <td>Papel liso blanco</td>
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

export default Econotecho;
