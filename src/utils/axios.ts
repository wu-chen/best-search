import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: '/prod-api',
    // 超时
    timeout: 40000
});

// Request interceptors
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // do something
        return config;
    },
    (error: any) => {
        Promise.reject(error);
    }
);

// Response interceptors
service.interceptors.response.use(
    async (response: AxiosResponse) => {
        console.log(response);
        return response.data;
        // do something
    },
    (error: any) => {
        // do something
        return Promise.reject(error);
    }
);

export default service;
