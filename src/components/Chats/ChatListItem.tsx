import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import {useNavigate} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    chatListItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: theme.spacing(2),
        borderRadius: theme.spacing(1),
        backgroundColor: '#f5f5f5',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease-in-out',
        '&:hover': {
            backgroundColor: '#e5e5e5',
        },
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    },
    chatName: {
        fontWeight: 'bold',
        marginBottom: theme.spacing(1),
    },
    members: {
        color: theme.palette.text.secondary,
    },
}));

type Props = {
    chat: any;
};

const ChatListItem: React.FC<Props> = ({chat}) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const chatId = 1
    const handleChatItemClick = () => {
        navigate(`/chats/${chatId}`);
    };

    const members = chat.members.map((member: { username: any; }) => member.username).join(', ');

    return (
        <div className={classes.chatListItem} onClick={handleChatItemClick}>
            <Typography variant="h6" className={classes.chatName}>
                {chat.name}
            </Typography>
            <Typography variant="body2" className={classes.members}>
                Members: {members}
            </Typography>
        </div>
    );
};

export default ChatListItem;

