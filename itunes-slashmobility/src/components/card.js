import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteComponent from './favorite';
// import mdiHeart from '@mdi/js';
// import mdiHeartOutline from '@mdi/js';
// import useLocalStorage from './../storage/useLocalStorage'
import { useState } from 'react';
import './card.css';

export default function SongCards(props) {

    const [fav, setFav] = useState(false);
    const [touch, setTouch] = useState(false);

        const handleClick = (props) => {
            console.log(localStorage.getItem(props.id))
            console.log("Comprobar si " + props.id + " esta en la lista")
            setTouch(true)
            if (localStorage.getItem(props.id) === null) {
                console.log("Añadimos")
                localStorage.setItem(props.id, props.title);
            } else {
                localStorage.removeItem(props.id);
                console.log("Eliminamos")
            }setFav(!fav)
        };

        return (
            <Card className="cardRoot">
                <CardMedia
                    className="cardMedia"
                    image={props.img}
                    title={props.title} />
                <h2 className="title">{props.title}</h2>
                <h3 className="album">{props.album}</h3>
                <IconButton aria-label="add to favorites" className="iconFav"
                    onClick={() => handleClick(props)}>
                        {/* {setFav(props.fav)} */}
                        <FavoriteComponent input={!props.fav?fav:!fav}/>
                    {/* {props.fav === false ? <FavoriteBorderIcon /> : <FavoriteIcon />} */}
                </IconButton>
            </Card>
        );
    }
