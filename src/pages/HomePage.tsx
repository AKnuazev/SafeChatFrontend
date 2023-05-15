import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    homePage: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
    },
    heading: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
    },
    description: {
        fontSize: '1.2rem',
        marginBottom: '2rem',
    },
    navList: {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
    },
    navItem: {
        marginBottom: '0.5rem',
    },
    navLink: {
        textDecoration: 'none',
        color: '#333',
        fontSize: '1.2rem',
    },
    initButton: {
        backgroundColor: '#ff4081',
        color: '#fff',
        border: 'none',
        padding: '0.75rem 1.5rem',
        fontSize: '1.2rem',
        cursor: 'pointer',
        borderRadius: '4px',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
        transition: 'box-shadow 0.3s ease',
        '&:hover': {
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
        },
    },
}));

const HomePage: React.FC = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleStartChatting = () => {
        navigate('/chats'); // Navigate to chats list
    };
    return (
        <div className={classes.homePage}>
            <h1 className={classes.heading}>Welcome to SafeChat Messenger</h1>
            <p className={classes.description}>Securely connect and chat with your friends!</p>
            <nav>
                <ul className={classes.navList}>
                    <li className={classes.navItem}>
                        <Link to="/chats" className={classes.navLink}>
                            Go to chats List!
                        </Link>
                    </li>
                </ul>
            </nav>
            <button className={classes.initButton} onClick={handleStartChatting}>Start Chatting</button>
        </div>
    );
};

export default HomePage;
