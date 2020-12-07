import React from 'react';
import './App.css';
import {fetchSongs} from './actions/action';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.dispatch(fetchSongs())}>Show SONGS</button>
        {this.props.loading
          ? <p>Loading...</p>
          : this.props.error
            ? <p>Error, try again</p>
            : this.props.results && this.props.results.map(item => {
              return <div key={item.trackId}><img alt={item.trackId} src={item.artworkUrl100} />
                <h2>{item.trackName}</h2>
                <h3>{item.collectionName}</h3>
              </div>
            })}
      </div>
    )
  }
}
