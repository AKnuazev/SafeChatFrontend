import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useLocation} from "react-router-dom";
import MessageComponent from "../components/Chats/MessageComponent"
import Message from "../types/Message";


interface Chat {
    id: number;
    name: string;
    messages: Message[];
}

interface ChatPageProps {
    chatId: number;
}

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(3),
    },
    heading: {
        marginBottom: theme.spacing(2),
    },
    messageContainer: {
        marginBottom: theme.spacing(2),
    },
    messageText: {
        fontWeight: 'bold',
    },
    messageSender: {
        color: theme.palette.text.secondary,
    },
    messageCreatedAt: {
        color: theme.palette.text.secondary,
    },
    form: {
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        marginRight: theme.spacing(2),
    },
    button: {
        minWidth: 100,
    },
}));

const LoginPage = () => {
    const location = useLocation();
    // const { chatId } = location.state;
    const { chatId } = {chatId:1};
    const classes = useStyles();
    const [chat, setChat] = useState<Chat | null>(null);
    const [message, setMessage] = useState<string>('');
    const demoChat = {
        id: 1,
        name: 'Demo Chat',
        members: ['User1', 'User2', 'User3'],
        messages: [
            { id: 1, sender: 'User1', content: 'Hello!', created_at: '2023-05-15T10:00:00Z' },
            { id: 2, sender: 'User2', content: 'Hi there!', created_at: '2023-05-15T10:05:00Z' },
            { id: 3, sender: 'User1', content: 'How are you?', created_at: '2023-05-15T10:10:00Z' },
            { id: 4, sender: 'User3', content: 'Im good, thanks!', created_at: '2023-05-15T10:15:00Z' },
],
};


    const fetchChat = async () => {
        try {
            const response = await axios.get(`/api/v1/chats/${chatId}/`);
            setChat(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchChat();
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await axios.post(`/api/v1/chats/${chatId}/send/`, { text: message });
            setMessage('');
            await fetchChat();
        } catch (error) {
            console.error(error);
        }
    };

    // if (!chat) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div className={classes.container}>
            <Typography variant="h4" className={classes.heading}>
                {demoChat.name}
            </Typography>
            <div className={classes.messageContainer}>

                {demoChat.messages.map((message: Message) => <MessageComponent message={message}/>)}
            </div>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    className={classes.input}
                    type="text"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    variant="outlined"
                    placeholder="Type your message..."
                />
                <Button
                    className={classes.button}
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Send
                </Button>
            </form>
        </div>
    );
};

export default LoginPage;
