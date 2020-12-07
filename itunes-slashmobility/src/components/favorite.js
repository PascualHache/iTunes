import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

export default function FavoriteComponent(bFav) {
    return (
        <div className="">
            {console.log("Abduscan", bFav)}
            {bFav.input === false ? <FavoriteBorderIcon /> : <FavoriteIcon />}
        </div>
    )
}
