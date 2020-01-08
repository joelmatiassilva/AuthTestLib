import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { config } from './';

class PrivateRoute extends React.Component {
    render () {
      console.log('private route');
        if ( this.props.token !== null ) {
	  //console.log("el token no es nulo: ", this.props);
            return (
                <div onClick={() => this.props.onCheckClick() }>
                    <Route {...this.props} />
                </div>
            )
        } else {
	  //console.log("el token es nulo");
            return (
                <Redirect to={{ pathname: config.loginPath, state: { from: this.props.location } }} />
            )
        }
    }
}

export default PrivateRoute;
