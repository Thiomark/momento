import React, { useState, createContext, useContext, useEffect } from "react";
import { ToastAndroid } from "react-native";
import io from 'socket.io-client';
import { AuthContext } from "./AuthProvider";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
    const { user, url } = useContext(AuthContext);
    const [isBrowerOpen, setIsBrowerOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    
    const socket = io(url);

    useEffect(() => {
        socket.on('MainSession', (res) => {
            setIsBrowerOpen(res.isBrowserOpen);
        });
        socket.on('UiMessage', (message) => {
            setMessages(prevArray => [...prevArray, message]);
        });
        socket.on('Queue', (message) => {
            setIsButtonEnabled(message.isFunctionDone);
        })
    }, [socket]);

    const openBrowser = async () => {
        socket.emit('openBrowser', user.Username);
    };
    
    const action = async (action) => {
        if(isButtonEnabled){
            socket.emit(action);
        }else {
            ToastAndroid.showWithGravityAndOffset('Wait for other function to finish first', ToastAndroid.LONG, ToastAndroid.BOTTOM, 0, 350);
        }
    };

    const removedMessages = () => {
        setMessages([]);
    }
    
    const closeBrowser = async () => {
        socket.emit('closeBrowser');
    };

    const deleteMessage = (x) => {
        setMessages(messages.filter((message, index) => index !== x))
    }

    return (
        <SocketContext.Provider value={{ isBrowerOpen, socket, messages, removedMessages, deleteMessage, openBrowser, closeBrowser, action }}>
            { children }
        </SocketContext.Provider>
    );
};