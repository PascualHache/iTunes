import React from 'react';
import SongCard from './card';
import './cardGrid.css'

export default function CardGrid(props, open) {

    return (
        <div className="generalGrid">
            {props.params.results.length===0&&!props.params.loading&&!props.params.error?
            <div className="textoBienvenida">¡Hola!<br/>Escribe el nombre de un artista <br/>o una canción en el buscador</div>:null}
            {props.params.loading
                ? <p>Loading...</p>
                : props.params.error
                    ? <p>Error, try again</p>
                    : props.params.results && props.params.results.map(item => {
                        return <div key={item.trackId} className="cardGrid">
                            <SongCard
                                id={item.trackId}
                                img={item.artworkUrl100}
                                title={item.trackName}
                                album={item.collectionName}
                                open={open}
                                updateFavs={props.updateFavs}
                                favCardState={(localStorage.getItem(item.trackId) === null) ? false : true}
                                className="cardSingle"
                            />
                        </div>
                    })}
        </div>
    )
}