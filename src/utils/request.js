import fetch from 'dva/fetch';

function parseJSON(response) {
    return response.json();
}

function checkStatus(response) {
    if (response && response.status === 401) {
    }
    if (response.status >= 200 && response.status < 500) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
    if(options)
    {
        options.body =JSON.stringify(options.body)
    }
    options.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      };
    return fetch(url, { ...options })
        .then(checkStatus)
        .then(parseJSON)
        .then((data) => ({ data }));
}