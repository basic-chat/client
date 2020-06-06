import React from 'react';

import ChatMessages from './ChatMessages/ChatMessages';
import InfoBar from './InfoBar/InfoBar';

import { Button, TextField } from 'rmwc';
import { IChatProps } from './Chat.model';

import './Chat.scss';

const Chat = (props: IChatProps) => (
    <div className="chat">
        <InfoBar room={props.room} />

        <div className="chat__messages-container">
            <ChatMessages messages={props.messages} user={props.user} />
        </div>

        <div className="chat__input-container">
            <TextField 
                onKeyPress={(e: any) => e.key === 'Enter' ? props.sendMessage() : null}
                outlined
                className="chat__input"
                type="text"
                value={props.message}
                onChange={(e: React.FormEvent<HTMLInputElement>) => props.onChange(e)}
            />
            <Button
                className="chat__button"
                onClick={() => props.sendMessage()}
                raised
            >
                Send
            </Button>

        </div>
    </div>
)


export default Chat;