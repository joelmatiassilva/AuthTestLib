import { combineReducers } from 'redux'
import { LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGIN_FAIL, LOGOUT_FAIL, CHECK_TOKEN } from './actions';
//import { LOGIN_FAIL } from '../../actions/user';

let toMerge = () => {
    return {
        isLogged: localStorage.getItem('token') !== null,
        user: JSON.parse(localStorage.getItem('user')),
        token: localStorage.getItem('token'),
    }
}

let updateState = (state) => {
    return{
        ...state,
    ...toMerge()
    }
}

const initialState = {
    isLogged: false,
    loging: false,
    user: JSON.parse(localStorage.getItem('user')),
    token: localStorage.getItem('token'),
};

export function userActions(state = initialState, action) {
    console.log('src/components/Auth/reducers.js:', action.type);
    switch(action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('user', JSON.stringify(action.data.user));
            localStorage.setItem('token', action.data.token);
            return{
                ...updateState(...state),
                loggin: false
            }
            
        case LOGOUT_SUCCESS : 
            console.log('login');
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            return{
                ...updateState(...state)
            }
        case LOGIN_FAIL:
            console.log('error al hacer login');
            return{
                ...updateState(...state)
            }
        case LOGOUT_FAIL:
            console.log("errror al logout")
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            return{
                ...updateState(...state)
            }
        case CHECK_TOKEN:
                console.log("check token")
            return{
                ...updateState(...state)
            } 
        default:
            return state
    }
}

const Pilsener = combineReducers({
    userActions
});

export default Pilsener;
