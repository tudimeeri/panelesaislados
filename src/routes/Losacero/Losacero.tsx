import React, { Component } from "react";
import pdf from "../../images/logo/pdf.png"
import img from "../../images/projects/project-image-9.jpg"
import '../../css/plugins.css';
import '../../style.css';
import { Table } from "react-bootstrap";


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
                <h1>Losacero</h1>
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
                      <p></p>
                    </a>
                    <h5>Categoría</h5>
                    <a href="">
                      <p></p>
                    </a>
                    <h5>Descrición</h5>
                    <a href="">
                      <p></p>
                    </a>
                  </div>
                  <div className="card">
                    <a href=""><img src={pdf} ></img>
                      <div className="container">
                        <b>Ficha técnica</b>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="product-specs">
                  <p><b>Losacero</b></p>
                  <br></br>
                  <br></br>
                  <h5> Usos </h5>
                  <ul>
                    <li>
                            </li>
                  </ul>
                  <br></br>
                  <br></br>
                  <h5>Características del producto</h5>
                  <ul>
                    <li>
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

export default DashboardLayout;
