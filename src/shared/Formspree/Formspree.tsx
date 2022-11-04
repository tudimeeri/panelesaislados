import React from "react";
import Alert from '../alert';

type Props = {

}

type State = {
    error: boolean,
    message: string,
    alertVariant: string
}

class Formspree extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            error: false,
            message: '',
            alertVariant: ''
        };
    }

    submitForm(ev: any) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ error: true, message: 'En breve uno de nuestros agentes se pondrá en contacto con usted', alertVariant: 'success' });
            } else {
                this.setState({ error: true, message: 'Ocurrió un error al enviar su mensage. Intente conmunicarse vía telefónica', alertVariant: 'error' });
            }
        };
        xhr.send(data);
    }

    render() {
        const { error, message, alertVariant } = this.state;
        return (

            <form
                onSubmit={this.submitForm}
                action="https://formspree.io/ventas.panelesyarcos@hotmail.com"
                method="POST"
                id="contact-form"
                className="contact-page-form"
            >
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 mt-30">
                        <input type="text" id="name" name="name" placeholder="Nombre"></input>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 mt-30">
                        <input type="email" id="email" name="email" placeholder="Correo electrónico"></input>
                    </div>
                    <div className="col-12 mt-30">
                        <input type="text" id="subject" name="subject" placeholder="Asunto"></input>
                    </div>
                    <div className="col-lg-12 col-12 mt-30">
                        <textarea id="message" name="message" cols={30} rows={7} placeholder="Mensaje"></textarea>
                    </div>
                    <div className="col-lg-12 col-12 mt-30 text-center">
                        <button type="submit" className="cr-btn mt-30">
                            <span>Enviar mensaje <i className="fa fa-angle-right"></i></span>
                        </button>
                    </div>
                </div>
                {
                    error && 
                    <Alert
                        message={message}
                        variant={alertVariant}
                        parentHandleClose={()=>{this.setState({error: false})}}
                    ></Alert>
                }
            </form>
        );
    }
}

export default Formspree;