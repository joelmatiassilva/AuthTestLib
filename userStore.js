import { createStore, compose } from 'redux';
import Auth from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Auth, {}, composeEnhancers());

export { store as userStore };
