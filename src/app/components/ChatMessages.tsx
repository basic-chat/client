import React from 'react';
// import ScrollToBottom from 'react-scroll-to-bottom';

import ChatMessage from './ChatMessage/ChatMessage';

const ChatMessages = (props: any) => {
    
    return (
        <div>
            {props.messages.map((message: any, i: number) => (
                <ChatMessage key={i} message={message.text} name={message.user} isMe={message.user === props.user} />
            ))}
        </div>
    )
};

export default ChatMessages;