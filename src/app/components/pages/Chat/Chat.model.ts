export type ChatMessages = {
    user: string,
    text: string,
}

export interface IChatProps {
    user: string,
    messages: ChatMessages[],
    message: string,
    room: string,
    sendMessage: () => void,
    onChange: (e: React.FormEvent<HTMLInputElement>) => void,
}