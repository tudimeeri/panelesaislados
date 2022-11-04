import React, { Component } from "react";
import "./DashboardLayout.scss";
import pdf from "../../images/logo/pdf.png"
import img from "../../images/projects/project-image-7.jpg"
import '../../css/plugins.css';
import '../../style.css';
import { Table } from "react-bootstrap";
const agent_file = require('../../pdf/refrimuro.pdf');


type Props = {};
type State = {};

class Refrimuro extends Component<Props, State> {

  render() {
    return (
      <React.Fragment>
        <main id="page-content">
          <div className="cr-breadcrumb-area bg-breadcrumb-1 title-page" data-overlay="7">
            <div className="container">
              <div className="cr-breadcrumb">
                <h1>Refrimuro</h1>
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
                      <p>Metal panel</p>
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
                  <p><b>Refrimuro</b> </p>
                  <br></br>
                  <br></br>
                  <h5> Usos </h5>
                  <ul>

                  </ul>

                  <br></br>
                  <br></br>

                  <h5>Características del producto</h5>
                  <ul>

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

export default Refrimuro;
