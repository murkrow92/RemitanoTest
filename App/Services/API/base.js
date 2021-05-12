import axios from 'axios';
import * as qs from 'query-string';
import lodash from 'lodash';

import { API_ENDPOINT, REQUEST_TIME_OUT } from 'Config/Remote';

const instance = axios.create({
  baseURL: API_ENDPOINT,
  timeout: REQUEST_TIME_OUT,
  headers: {}
});

export const GET = (url, params = {}, config = {}) => {
  const queryString = params ? qs.stringify(params) : '';
  const urlWithQuery = lodash.size(params) > 0 ? `${url}?${queryString}` : url;
  return instance
    .get(urlWithQuery, config)
    .then(handleSuccess)
    .catch(handleError);
};

export const POST = (url, params = {}, config = {}) => {
  return instance
    .post(url, params, config)
    .then(handleSuccess)
    .catch(handleError);
};

export const PUT = (url, params, config = {}) => {
  return instance
    .put(url, params, config)
    .then(handleSuccess)
    .catch(handleError);
};

export const DELETE = (url, config = {}) => {
  return instance.delete(url, config).then(handleSuccess).catch(handleError);
};

const handleSuccess = response => {
  return {
    data: response?.data,
    status: true
  };
};

const handleError = error => {
  return {
    status: false,
    statusCode: error?.response?.status,
    error: error?.response?.data
  };
};

export const setAccessToken = accessToken => {
  instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};
