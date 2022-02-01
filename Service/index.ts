/* eslint-disable valid-jsdoc */
import Axios, { AxiosRequestConfig } from 'axios';
​
const Request = {
  getUserToken() {
    let token = localStorage.getItem('auth_token');
​
    if (!token) {
      return '';
    }
​
    return token;
  },
  /**
   * Prepares request options
   *
   * @param {AxiosRequestConfig} axiosOpts
   * @param {string} authToken
   * @return {Object}
   */
    prepareOptions(axiosOpts?: AxiosRequestConfig | null, authToken?: string) {
    /* eslint-disable-next-line */
    const { url, method, headers, data, ...requestOptions } = axiosOpts || {};
​
    const options = {
      ...requestOptions,
      headers: {
        ...(headers || {}),
        'x-auth-token': authToken ?? "",
      },
    };
​
    return { data, ...options };
  },
  /**
   * Makes a GET request
   *
   * @param {string}                    endpoint
   * @param {AxiosRequestConfig | null} options
   */
  async get(endpoint: string, options?: AxiosRequestConfig | null) {
    return (await Axios.get(endpoint, options || {})).data;
  },
  /**
   * Makes a POST request
   *
   * @param endpoint
   * @param data
   * @param options
   */
  async post(endpoint: string, options?: AxiosRequestConfig | null) {
    let postData;
    let requestOptions;
​
    if (options) {
      const { data, ...rest } = options;
​
      postData = data;
      requestOptions = rest;
    }
​
    return (await Axios.post(endpoint, postData, requestOptions)).data;
  },
  /**
   * Makes a POST request
   *
   * @param endpoint
   * @param data
   * @param options
   */
  async put(endpoint: string, options?: AxiosRequestConfig | null) {
    let postData;
    let requestOptions;
​
    if (options) {
      const { data, ...rest } = options;
​
      postData = data;
      requestOptions = rest;
    }
​
    return (await Axios.put(endpoint, postData, requestOptions)).data;
  },
  /**
   * Makes a POST request
   *
   * @param endpoint
   * @param data
   * @param options
   */
  async patch(endpoint: string, options?: AxiosRequestConfig | null) {
    let postData;
    let requestOptions;
​
    if (options) {
      const { data, ...rest } = options;
​
      postData = data;
      requestOptions = rest;
    }
​
    return (await Axios.patch(endpoint, postData, requestOptions)).data;
  },
  /**
   * Makes a GET request
   *
   * @param endpoint
   * @param options
   */
  async delete(endpoint: string, options?: AxiosRequestConfig | null) {
    return (await Axios.delete(endpoint, options || {})).data;
  },
  /**
   * Makes a POST request to a service with service token
   *
   * @param endpoint
   * @param options
   */
  async postWithUserToken(endpoint: string, options?: AxiosRequestConfig | null) {
    const opts = this.prepareOptions(options, this.getUserToken());
​
    return await this.post(endpoint, opts);
  },
  /**
   * Makes a POST request to a service with service token
   *
   * @param endpoint
   * @param options
   */
  async putWithUserToken(endpoint: string, options?: AxiosRequestConfig | null) {
    const opts = this.prepareOptions(options, this.getUserToken());
​
    return await this.put(endpoint, opts);
  },
  /**
   * Makes a POST request to a service with service token
   *
   * @param endpoint
   * @param options
   */
  async patchWithUserToken(endpoint: string, options?: AxiosRequestConfig | null) {
    const opts = this.prepareOptions(options, this.getUserToken());
​
    return await this.patch(endpoint, opts);
  },
  /**
   * Makes a GET request to a service with service token
   *
   * @param endpoint
   * @param options
   */
  async getWithUserToken(endpoint: string, options?: AxiosRequestConfig | null) {
    const opts = this.prepareOptions(options, this.getUserToken());
​
    return await this.get(endpoint, opts);
  },
  /**
   * Makes a GET request to a service with service token
   *
   * @param endpoint
   * @param options
   */
  async deleteWithUserToken(endpoint: string, options?: AxiosRequestConfig | null) {
    const opts = this.prepareOptions(options, this.getUserToken());
​
    return await this.delete(endpoint, opts);
  },
};
​
export default Request; 