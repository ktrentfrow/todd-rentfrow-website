import axios from 'axios';

/**
 * wrapper class for axios to make adding things like headers in central location
 */
export class AxiosProxy {
  static get<T>(url: string, options: any = {}) {
    return axios.get<T>(url, options);
  }
  static post<T>(url: string, body: any, options: any = {}) {
    return axios.post<T>(url, body, options);
  }
  static delete<T>(url: string, options: any = {}) {
    return axios.delete<T>(url, options);
  }
  static put<T>(url: string, body: any, options: any = {}) {
    return axios.put<T>(url, body, options);
  }
  //   static postApplicationFile<T>(
  //     url: string,
  //     body: unknown,
  //     options: any = {}
  //   ) {
  //     const formData = new FormData();
  //     formData.append('file', body.icon);
  //     formData.append('name', body.name);
  //     formData.append('redirectUris', JSON.stringify(body.redirectUris));
  //     const headers = {
  //       'Content-Type': 'multipart/form-data',
  //     };
  //     return axios.post(url, formData);
  //     // return axios.post(url, formData, { headers });
  //   }
}
