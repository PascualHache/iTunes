import React from 'react';
import { mdiHeart } from '@mdi/js';
import { mdiHeartOutline } from '@mdi/js';
import Icon from '@mdi/react';

export default function FavoriteComponent(bFav) {
    return (
        <div className="iconFavIn">
            {bFav.input === false ?
                <Icon
                    path={mdiHeartOutline}
                    size={1}
                    color={"#76B3C8"}
                     />
                : <Icon
                    path={mdiHeart}
                    size={1}
                    color={"#76B3C8"}
                     />}
        </div>
    )
}
