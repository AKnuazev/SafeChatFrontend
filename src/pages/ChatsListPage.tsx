import {Box, Button, Grid, makeStyles, Theme} from '@material-ui/core';
import {Add as AddIcon} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import ChatList from "../components/Chats/ChatList";
import React from "react";

// import { Chat } from '../types';

// interface ChatListPageProps {
//     chats: any[];
// }

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: '100vh',
    },
    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    addButton: {
        // marginLeft: 'auto',
    },
}));

const ChatListPage: React.FC = () => {
    const classes = useStyles();
    const CHATS = [
        {
            id: 1,
            name: 'Chat 1',
            members: [{username: 'User1'}, {username: 'User2'}, {username: 'User3'},],
        },
        {
            id: 2,
            name: 'Chat 2',
            members: [{username: 'User4'}, {username: 'User5'}, {username: 'User6'},],
        },
        {
            id: 3,
            name: 'Chat 3',
            members: [{username: 'User7'}, {username: 'User8'}, {username: 'User9'},],
        },
    ];

    return (
        <Box className={classes.root} display="flex">
            <Grid container direction="column" justify="center" alignItems="center">
                <ChatList chats={CHATS}/>
                <Button variant="contained" color="primary" className={classes.addButton} startIcon={<AddIcon/>}
                        component={Link} to="/create-chat">
                    New Chat
                </Button>
            </Grid>
        </Box>
    );
};

export default ChatListPage;
