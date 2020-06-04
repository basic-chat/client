import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import ChatMessages from '../ChatMessages';

import InfoBar from '../InfoBar';

import { Button, TextField } from 'rmwc';

let socket: any;

const Chat = (props: any) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const ENDPOINT = 'localhost:8000'

    useEffect(() => {
        const data: any = queryString.parse(props.location.search);

        socket = io(ENDPOINT);
        setName(data.name)
        setRoom(data.room)

        socket.emit('join', {name: data.name, room: data.room}, () => {
        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [])

    useEffect(() => {
        socket.on('message', (message: any) => {
            console.log(message, messages);
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
        <div>
            <InfoBar room={room} />
            <div style={{height: "500px", width: "100%", background:"#f8f8f8", marginTop: "20px"}}>
                <ChatMessages messages={messages} user={name} />
            </div>
            <div style={{display: "flex", marginTop: "10px"}}>
                <TextField onKeyPress={(e: any) => e.key === 'Enter' ? sendMessage() : null} outlined style={{width: "100%"}} type="text" value={message} onChange={(e) => onChange(e)} />
                <Button onClick={() => sendMessage()} style={{height: "55px"}} raised>Send</Button>

            </div>
        </div>
    )
}

export default Chat;