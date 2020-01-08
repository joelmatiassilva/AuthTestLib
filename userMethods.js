import { userStore } from './';

let userMethods = (
    function () {
        return {
            getUser: () => {
                return userStore.getState().userActions.user;
            },
            getToken: () => {
                return userStore.getState().userActions.token;
            },
            getFullName: () => {
                return userStore.getState().userActions.user.firstName +
                    ' ' + userStore.getState().userActions.user.lastName;
            },
            getRoles: () => {
                return userStore.getState().userActions.user.roles;
            },
            getProducts: () => {
                return userStore.getState().userActions.user.products;
            },
            getProduct: () => {
                return userStore.getState().userActions.user.product;
            },
        }
    }
)(userStore);

export { userMethods };
