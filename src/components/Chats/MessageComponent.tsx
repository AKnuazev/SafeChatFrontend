import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Message from "../../types/Message";

interface MessageProps {
    message: Message
}

const useStyles = makeStyles((theme) => ({
    messageContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: theme.spacing(2),
    },
    sender: {
        fontWeight: 'bold',
        marginBottom: theme.spacing(0.5),
    },
    content: {
        backgroundColor: theme.palette.primary.light,
        padding: theme.spacing(1),
        color: 'white',
        borderRadius: theme.shape.borderRadius,
    },
    timestamp: {
        fontSize: '0.8rem',
        color: theme.palette.text.secondary,
        marginTop: theme.spacing(0.5),
    },
}));

const MessageComponent: React.FC<MessageProps> = ({ message }) => {
    const classes = useStyles();

    return (
        <div className={classes.messageContainer}>
            <div className={classes.sender}>{message.sender}</div>
            <div className={classes.content}>{message.content}</div>
            <div className={classes.timestamp}>{message.created_at}</div>
        </div>
    );
};

export default MessageComponent;
