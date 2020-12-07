import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './card.css';

export default function SongCards(props) {

    // const handleExpandClick = () => {
    //     console.log("")
    // };

    return (
        <Card className="cardRoot">
            <CardMedia
                className="cardMedia"
                image={props.img}
                title={props.title}
            />
            <h2 className="title">{props.title}</h2>
            <h3 className="album">{props.album}</h3>
            {/* <CardActions disableSpacing> */}
                <IconButton aria-label="add to favorites" className="iconFav">
                    <FavoriteIcon />
                </IconButton>
            {/* </CardActions> */}
        </Card>
    );
}
