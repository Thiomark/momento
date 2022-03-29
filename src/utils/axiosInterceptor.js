import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

let headers = {};

const instance = axios.create({
    headers
})

instance.interceptors.request.use(
    async (config) => {
        const url = await AsyncStorage.getItem('url');
        if(url) config.baseURL = url
        return config;
    }
);

export default instance