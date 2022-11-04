import React, { Component } from "react";
import img1 from '../../images/logo/tel.png'
import img2 from '../../images/logo/mail.png'
import img3 from "../../images/logo/fb.png"
import img4 from "../../images/logo/tw.png"
import img5 from "../../images/logo/clock.png"

import './HeaderTop.scss'

import { RouteComponentProps, withRouter } from "react-router-dom";

type Props = RouteComponentProps & {
};

type State = {
};
class HeaderTop extends Component<Props, State> {
    state = {
    };

    render() {
        return (
            <header className="header-top-area-inner">
                <ul>
                    <li><a href="99-94-47-70-40"><img src={img1} alt="logo theme"></img>&nbsp; (01) 55 5803 6916</a></li>
                    <li><a href="mailto:ventas.panelesaislados@hotmail.com"><img src={img2} alt="logo theme"></img>&nbsp; ventas.panelesaislados@hotmail.com</a></li>
                    <li><a href="https://www.facebook.com/TERMIPANEL1/"><img src={img3} alt="logo theme"></img>&nbsp; Termipanel</a></li>
                    <li><a href="https://twitter.com/panelesyarcos?lang=es"><img src={img4} alt="logo theme"></img>&nbsp; Panelesyarcos</a></li>
                    <li><img src={img5} alt="logo theme"></img>&nbsp; Lunes - Viernes 9.00 - 18.00, Sábados 9.00 - 14.00 Hrs.</li>
                </ul>
            </header>
        );
    }
}

export default withRouter(HeaderTop);
