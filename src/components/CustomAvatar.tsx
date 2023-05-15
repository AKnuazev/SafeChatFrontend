import { Avatar, makeStyles } from '@material-ui/core';
import React from "react";

interface AvatarProps {
    imageUrl: string;
    altText: string;
}

const useStyles = makeStyles({
    avatar: {
        width: 40,
        height: 40,
    },
});

const CustomAvatar: React.FC<AvatarProps> = ({ imageUrl, altText }) => {
    const classes = useStyles();

    return <Avatar className={classes.avatar} src={imageUrl} alt={altText} />;
};

export default CustomAvatar;
