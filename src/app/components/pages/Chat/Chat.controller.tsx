import React, {useState, useEffect, useContext} from 'react';
import io from 'socket.io-client';
import {AuthContext} from '../../../common/context/AuthContext';

import Chat from './Chat';

let socket: any;

const ChatController = () => {
    const { user } = useContext(AuthContext);

    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const Room = "Main room";

    useEffect(() => {
        socket = io();
        socket.emit('join', {name: user.username, room: "Main room"}, () => {
        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [])

    useEffect(() => {
        socket.on('message', (message: any) => {
            setMessages([...messages ,message] as any);
        })
    }, [messages])

    const onChange = (e: any) => {
        setMessage(e.target.value);
    }

    const sendMessage = () => {
        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    return (
        <Chat
            user={user.username}
            messages={messages}
            message={message}
            room={Room}
            sendMessage={sendMessage}
            onChange={onChange}
        />
    )
}

export default ChatController;