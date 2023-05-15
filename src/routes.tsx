import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChatsListPage from './pages/ChatsListPage';
import ChatPage from "./pages/ChatPage";

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/chats" element={<ChatsListPage/>} />
                <Route path="/chats/1" element={<ChatPage/>} />
            </Routes>
        </Router>
    );
};

export default AppRouter;