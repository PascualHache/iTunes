import React from 'react';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import FavoriteComponent from './favorite';
import { useState } from 'react';
import './card.css';

export default function SongCards(props) {

    //comprobamos si es favorito, si no lo es
    //lo añadimos a localStorage, si lo es
    //lo quitamos de la lista
    const [fav, setFav] = useState(props.favCardState);
    const handleClick = (props) => {
        if (localStorage.getItem(props.id) === null) {
            localStorage.setItem(props.id, props.title);
        } else {
            localStorage.removeItem(props.id);
        } setFav(!fav);
        props.updateFavs()       
    };

    return (
        <Card className="cardRoot">
            <img src={props.img} className="cardMedia" alt="Album cover"/>
            <h2 className="title">{props.title}</h2>
            <h3 className="album">{props.album}</h3>
            <div className="iconBox">
                <IconButton aria-label="add to favorites" className="iconFav"
                    onClick={() => handleClick(props)}>
                    <FavoriteComponent  input={props.favCardState} />
                </IconButton>
            </div>
        </Card>
    );
}
