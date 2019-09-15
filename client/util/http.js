import axios from 'axios';

const baseUrl = process.env.API_BASE || '';

const parseUrl = (url, params) => {
  const str = Object.keys(params).reduce((result, key) => {
    result += `${key}=${params[key]}&`;// eslint-disable-line
    return result;
  }, '');
  return `${baseUrl}/api/${url}?${str.substr(0, str.length - 1)}`
}

export const get = (url, params) => (
  new Promise((resolve, reject) => {
    axios.get(parseUrl(url, params))
      .then((resp) => {
        const data = resp.data;
        if (data && data.success === true) {
          resolve(data);
        } else {
          reject(data);
        }
      })
      .catch((err) => {
        if (err.response) {
          reject(err.response.data)
        } else {
          reject({
            success: false,
            err_msg: err.message,
          });
        }
      })
  })
)


export const post = (url, params, data) => (
  new Promise((resolve, reject) => {
    axios.get(parseUrl(url, params), data)
      .then((resp) => {
        const respData = resp.data;
        if (respData && respData.success === true) {
          resolve(respData);
        } else {
          reject(respData);
        }
      })
      .catch((err) => {
        if (err.response) {
          reject(err.response.data)
        } else {
          reject({
            success: false,
            err_msg: err.message,
          });
        }
      })
  })
)
