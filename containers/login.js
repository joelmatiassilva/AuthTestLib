import { connect } from 'react-redux';
import Login from "../login";
import { LOGIN_FAIL, LOGIN_SUCCESS } from '../actions';
import { login } from '../commons';

const mapStateToProps = (state) => {
    return {
        user: state.userActions.user,
        token: state.userActions.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginClick: (userData) => {
            login(userData, (response) => {
                if ( response.status && response.status === 200 ) {                    
                    dispatch({ type: LOGIN_SUCCESS, ...response });
                } else {
                    dispatch({ type: LOGIN_FAIL }, {});
                }
            })
        }
    }
}

const ContainerLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export { ContainerLogin as LoginPage };
