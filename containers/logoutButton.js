import { connect } from 'react-redux';
import LogoutButton from "../logoutButton";
import { LOGOUT_FAIL, LOGOUT_SUCCESS } from '../actions';
import { logout } from '../commons';


const mapStateToProps = (state) => {
    return {
        user: state.userActions.user,
        token: state.userActions.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogoutClick: () => {
            console.log('test')
            //return dispatch({action: 'LOGOUT', lalala: {}})
	    logout((response) => {
	        console.log(response);
                if ( response.status && response.status === 200) {                    
		  console.log('entro en el primer if')
                    dispatch({ type: LOGOUT_SUCCESS, ...response });
                } else {
		    console.log('entro en el fail')
                    dispatch({ type: LOGOUT_FAIL }, {});
                }
            })

        }
    }
}

const ContainerLogout = connect(
    mapStateToProps,
    mapDispatchToProps
)(LogoutButton);

export { ContainerLogout as LogoutButton};
