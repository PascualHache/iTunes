import React from 'react';
import { mdiHeart } from '@mdi/js';
import Icon from '@mdi/react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

export default function FavoriteBar(props) {
    return (
        <IconButton aria-label="" color="inherit">
            <Badge badgeContent={props.props} color="secondary" className="notifications">
                <Icon
                    path={mdiHeart}
                    size={1.6}
                    color={"#FBFBFB"}
                    className="favoriteBar"
                />
            </Badge>
        </IconButton>
    )
}