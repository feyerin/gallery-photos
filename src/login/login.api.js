import axios from 'axios';

export const getUser = (username, password) => (dispatch, getState) => {
    dispatch({
        type: "IS_LOADING",
        payload: true 
    })
    let endpoint;
    if (username.includes("@")) {
        endpoint = 'https://jsonplaceholder.typicode.com/users?email=' + username
    } else {
        endpoint = 'https://jsonplaceholder.typicode.com/users?username=' + username
    }
    return axios.get( endpoint)
        .then((res) => {
            dispatch({
                type: "GET_DATA",
                payload: res.data,
            });
        })
        .catch(err => {
            dispatch({
                type: "ERROR_DATA",
                payload: console.log(err)
            })
        }).finally(() => {
            dispatch({
                type: "IS_LOADING",
                payload: false
            })
        })
}