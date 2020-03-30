import Axios, {  Method, AxiosResponse } from 'axios';

export default class BaseWebService {
    protected baseUrl: string;

    constructor(baseUrl: string){
        this.baseUrl = baseUrl;
    }

    protected sendRequest (url: string, method: Method, data: any ):Promise<AxiosResponse<any>> {
        return Axios.request({ 
            url: url, 
            method: method, 
            data: data
        });
    }
}