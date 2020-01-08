import { connect } from 'react-redux';
import PrivateRoute from "../privateRoute";
import { CHECK_TOKEN } from '../actions';
import { checkToken } from '../commons';

const mapStateToProps = (state) => {
    return {
        user: state.userActions.user,
        token: state.userActions.token,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCheckClick: () => {
            dispatch({type: 'CHECK_TOKEN'})
            console.log('check token dfkjdjdgj')
            checkToken((response) => {
                console.log(response);
               /*  if ( response.status && response.status === 200 ) {                    
                    dispatch({ type: CHECK_SUCESS, ...response });
                } else {
                    dispatch({ type: CHECK_FAIL }, {});
                } */
            })
            //return dispatch({action: 'LOGOUT', lalala: {}})
	    /* logout((response) => {
	        console.log(response);
                if ( response.status && response.status === 200) {                    
		  console.log('entro en el primer if')
                    dispatch({ type: LOGOUT_SUCCESS, ...response });
                } else {
		    console.log('entro en el fail')
                    dispatch({ type: LOGOUT_FAIL }, {});
                }
            }) */

        }
    }
}

const ContainerPrivateRouter = connect(
    mapStateToProps,
    mapDispatchToProps
)(PrivateRoute);

export { ContainerPrivateRouter as PrivateRoute };
