import React, { Component } from "react";
import '../../css/plugins.css';
import '../../style.css';
import { RouteComponentProps } from "react-router-dom";


type Props = RouteComponentProps & {};
type State = {};

class RedirectWithState extends Component<Props, State> {

    componentWillMount(){
        this.props.history.push('main', {product: true});
    }

    render() {
        return (
            <React.Fragment>
                
            </React.Fragment>
        );
    }
}

export default RedirectWithState;
