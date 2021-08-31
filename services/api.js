import axios from "axios";

const apis = {
    api_key: '/api/v1/key',
}

export const getUrlMapping = (key) => {
    return apis[key]
}

axios.interceptors.request.use(function (config) {
    return config;
});
