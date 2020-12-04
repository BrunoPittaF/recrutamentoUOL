import axios, { AxiosRequestConfig } from 'axios';


const api = axios.create({
    baseURL: 'https://api.github.com',
});

api.interceptors.request.use((request: AxiosRequestConfig) => {
    //request.headers['Authorization']  = 'Bearer a09241048a6a34fdd23ffc7f98608ffbcf80ff45';
    request.headers['Accept'] = 'application/vnd.github.v3+json'; 
    request.headers['Content-Type'] = `application/json`;
    return request;
})
export default api;