import axios from 'axios'
import React from 'react'
import { toast } from "react-toastify";
import { Icon } from "semantic-ui-react";

//import { connect } from 'react-redux';

// const prefix = 'http://tld-2udck360.cloud.agea.com.ar/api/weizenbock';
//let prefix = process.env[`REACT_APP_BACKEND_API_HOST`] || ''

//const isAbsoluteURLRegex = /^(?:\w+:)\/\//;

axios.interceptors.request.use(function (config) {
    /*
    if (config.headers.message === "off") {
        delete config.headers.message;
        config.headers['X-Requested-With'] = "NO MESSAGE"
    }

    if (config.api) {
        if (process.env[`REACT_APP_BACKEND_API_${config.api.toUpperCase()}_HOST`]) {
            prefix = process.env[`REACT_APP_BACKEND_API_${config.api.toUpperCase()}_HOST`];
        }
    }

    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
    if ( !isAbsoluteURLRegex.test(config.url) ) {
        config.url = [prefix, config.url].join('');
    }*/
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
    console.log("request - myAxios: ", localStorage.getItem('token'));
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (config) {


     let message = 'Se guardo correctamente 3'
        let string = <React.Fragment><Icon name='check' />{message}</React.Fragment>;
        const MESSAGE = React.createElement('div', {}, string);
        
        toast.success(MESSAGE, {
            position: "top-right",
            autoClose: 2000,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
        }); 
    
    // Solo cuando guardo o creo algo
    if (( config.config.method === 'post' || config.config.method === 'put') &&  config.config.headers['X-Requested-With'] !== "NO MESSAGE") {
        
        /* let message = 'Se guardo correctamente'
        let string = <React.Fragment><Icon name='check' />{message}</React.Fragment>;
        const MESSAGE = React.createElement('div', {}, string);
        
        toast.success(MESSAGE, {
            position: "top-right",
            autoClose: 2000,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
        }); */
        
       console.log("response - myAxios: ", config.config);
    }

    return config;
}, function (error) {

    console.log('aquiiiiiiiiiiiiii');

    let message;

    if (error.response && error.response.status === 401) {

        console.log('error 401');
        
        message = 'Error de Session'
        let string = <React.Fragment><Icon name='bomb' /> {`${message}`}</React.Fragment>;
        const MESSAGE = React.createElement('div', {}, string);

        toast('dsdghfgdhfgh')
        
        toast.error(MESSAGE, {
            position: "top-right",
            autoClose: 2000,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
        });
        //localStorage.removeItem('token');
        //localStorage.removeItem('user');
        //location.reload();
        

    }

    // console.error(error)
    
    return Promise.reject(error);
});

export {
    axios
}
