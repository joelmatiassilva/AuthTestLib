import {axios} from './myAxios';

export function login (userData, cb) {
    const {username, password, product} = userData;
    const params = {
        method: 'post',
        url: process.env.API.PROTOCOL + '://' +
             process.env.API.HOST + '/api/auth/login',
        data: {...{product: product}, username, password}
    };

    axios(params).then( response => {
        cb(response);
    }).catch(err => {
        cb(err);
    })
}

export function logout (cb) {
    const params = {
        method: 'post',
        url: process.env.API.PROTOCOL + '://' +
             process.env.API.HOST + '/api/auth/logout'
    };

    axios(params).then( response => {
        cb(response);
    }).catch(err => {
        cb(err);
    })
}

export function checkToken (cb) {
    const params = {
        method: 'get',
        url: process.env.API.PROTOCOL + '://' +
             process.env.API.HOST + '/api/auth/me'
    };

    axios(params).then( response => {
        cb(response);
    }).catch(err => {
        cb(err);
    })
}
