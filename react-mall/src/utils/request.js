/**
 * create by wangchunyan1 on 2021/6/8
 */

import 'whatwg-fetch'

const fetchAsync = async function(url, method, data, contentType = 'application/json; charset=UTF-8') {
    let apiHostPath = '';

    if (url.indexOf('http://') !== -1 || url.indexOf('https://') !== -1) {
        apiHostPath = '';
    }

    const myHeaders = new Headers();

    myHeaders.append('Content-Type', contentType || 'application/json; charset=UTF-8');

    const req = {
        method: method,
        headers: myHeaders,
        mode: 'cors',
        credentials: 'include'
    };
    if (method === 'GET') {
        if (!data) {
            data = {};
        }
        url += (url.indexOf('?') === -1 ? '?' : '&');
    } else {
        if (contentType === 'application/json; charset=UTF-8') {
            req.body = JSON.stringify(data);
        } else {
            let ret = '';
            for (var i in data) {
                ret += encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + '&';
            }
            req.body = ret;
        }
    }

    return fetch(apiHostPath + url, req).then(function(response) {
        if (!response.ok) {
            console.log('服务器开小差了，请稍后再试！');
            return response.json().then(function(errorInfo) {
                const error = new Error('serverError');
                error.source = 'server';
                error.error = errorInfo;
                throw error;
            });
        }
        return response.json();
    }).catch(function(err) {
        if (!err.source) {
            console.log('网络已断开，请检查网络状态！');
            err.source = 'network';
        }
        throw err;
    });
};

export async function get(url, data, contentType) {
    return await fetchAsync(url, 'GET', data, contentType);
}

export async function post(url, data, contentType) {
    return await fetchAsync(url, 'POST', data, contentType);
}
