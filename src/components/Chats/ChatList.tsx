import React from 'react';
import ChatListItem from './ChatListItem';

interface Chat {
    id: number;
    name: string;
    members: object[];
}

interface ChatListProps {
    chats: Chat[];
}

const ChatList: React.FC<ChatListProps> = ({ chats }) => {
    return (
        <div>
            <h2>Chat List</h2>
            {chats.map((chat) => (
                <ChatListItem key={chat.id} chat={chat} />
            ))}
        </div>
    );
};

export default ChatList;
