import React from 'react';
import './App.css';
// import { fetchSongs } from './actions/action';
import SongCard from './components/card';
import IonSearchbar from './components/menuBar';

export default class App extends React.Component {
  render() {

    return (<div>
      <IonSearchbar params={this.props} />
      <div className="generalGrid">
        {this.props.loading
          ? <p>Loading...</p>
          : this.props.error
            ? <p>Error, try again</p>
            : this.props.results && this.props.results.map(item => {
              return <div key={item.trackId} className="cardGrid">
                <SongCard
                  img={item.artworkUrl100}
                  title={item.trackName}
                  album={item.collectionName}
                  className="cardSingle" />
              </div>
            })}
      </div>
    </div>
    )
  }
}
