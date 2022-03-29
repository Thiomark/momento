import React, { useState, createContext, useContext, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastAndroid } from "react-native";
import axiosInterceptor from '../utils/axiosInterceptor';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [qrCodeUrl, setUrl] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        AsyncStorage.getItem('user').then(x => {
            if(x){
                const { token } = JSON.parse(x);
                setUser(token);
            }
        });

        AsyncStorage.getItem('url').then(x => {
            if(x){
                setUrl(x);
            }
        })
    }, []);

    useEffect(() => {
        if(qrCodeUrl) AsyncStorage.setItem('url', qrCodeUrl);
    }, [qrCodeUrl]);
    
    const login = (credentials) => {
        setIsSubmitting(true);
        axiosInterceptor.post(`/users/login`, credentials)
            .then(({data}) => {
                setUser(data);
                AsyncStorage.setItem('user', JSON.stringify(data));
            })
            .catch((error) => {
                ToastAndroid.showWithGravityAndOffset(error?.response?.data?.message || error.message, ToastAndroid.LONG, ToastAndroid.TOP, 0, 50);
            })
            .finally(() => {
                setIsSubmitting(false);
            })
    }

    const register = (credentials) => {
        setIsSubmitting(true);
        // axiosInterceptor.post(`/users/register`, credentials)
        //     .then(({data}) => {
        //         setUser(data);
        //         AsyncStorage.setItem('user', JSON.stringify(data));
        //     })
        //     .catch((error) => {
        //         ToastAndroid.showWithGravityAndOffset(error?.response?.data?.message || error.message, ToastAndroid.LONG, ToastAndroid.TOP, 0, 50);
        //     })
        //     .finally(() => {
        //         setIsSubmitting(false);
        //     })
    }

    const logout = async () => {
        setUser(null);
        await AsyncStorage.removeItem('user');
    }

    const setUserFromLocalStorage = async() => {
        const res = await AsyncStorage.getItem('user');
        res ? setUser(JSON.parse(res)) : null;
    }

    return (
        <AuthContext.Provider value={{user, isSubmitting, login, setUserFromLocalStorage, register, logout, qrCodeUrl, setUrl}}>
            { children }
        </AuthContext.Provider>
    );
};