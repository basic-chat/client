import React from 'react';

import './ChatMessage.scss';
import { Typography } from 'rmwc';

const ChatMessage = (props: any) => {
    return (
        <div className={`chat-message ${props.isMe ? "chat-message--me" : ''}`}>
            <div className="chat-message__body">
                <Typography className="chat-message__data" use="headline6">{props.message}</Typography>
                <Typography className="chat-message__user" use="body1">{props.name}</Typography>
            </div>

        </div>
    )
};

export default ChatMessage;