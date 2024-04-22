const BASEURL = '/api';
export function httpGet(path, options = null) {
  return callApi(path, 'GET', null, false, options );
}
export function httpPost(path, body, options = null) {
  return callApi(path, 'POST', body, false, options );
}
export function httpPut(path, body, options = null) {
  return callApi(path, 'PUT', body, false, options);
}

export function httpDelete(path, options = null) {
  return callApi(path, 'DELETE', null, false, options);
}

export function httpPostFormData(path, body, options = null) {
  return callApi(path, 'POST', body, true, options);
}
export function httpPutFormData(path, body, options = null) {
  return callApi(path, 'PUT', body, true, options);
}

function callApi(url, method, body = null, isFormData = false, options = null) {
  url = BASEURL + url;

  const requestHeaders = new Headers();
  requestHeaders.set('Content-Type', 'application/json');

  // to be defined
  // let token = localStorage.getItem('token') || '';
  // if (token != '') requestHeaders.set('Authorization', 'bearer ' + token);

  let requestInfo;

  switch (method) {
    case 'POST':
      requestInfo = { method: method, headers: requestHeaders, body: JSON.stringify(body) };
      break;
    case 'PUT':
      requestInfo = { method: method, headers: requestHeaders, body: JSON.stringify(body)  };
      break;
    case 'DELETE':
    case 'GET':
      requestInfo = { method: method, headers: requestHeaders };
      break;
    default:
      break;
  }

  if (options) requestInfo = Object.assign(requestInfo, options);

  return new Promise((resolve, reject) => {
    fetch(url, requestInfo)
      .then(response => {
        if (response.status !== 200) {
          if (response.status === 401) {
            return reject('Please check your permission');
          }
          return response.json().then(obj => {
            return reject(JSON.stringify(obj));
          });
        }
        return resolve(response.json());
      })
      .catch(ex => {
        console.log(ex);
        if (ex.toString() === `TypeError: Failed to fetch`) {
          return reject(ex.toString() + ' ' + url);
        }
        if (ex.name === 'AbortError') {
          return;
        }
        return reject(ex);
      });
  });
}
