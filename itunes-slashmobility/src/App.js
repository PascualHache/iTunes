import React, { useState } from 'react';
import './App.css';
// import { fetchSongs } from './actions/action';
import SongCard from './components/card';
import IonSearchbar from './components/menuBar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fav: false
    };
  }
  render() {
    // const saveState = (state) => {
    //   // localStorage.setItem("props", JSON.stringify(state));
    //   return function () {
    //     console.log("Clickado y añadido", state)
    //   }
    // };

    // const [fav, setFav] = useState(false);

    // const getState = () => {
    //   try{
    //     const s = localStorage.getItem("state");
    //     if (s  === null) return undefined;
    //     return JSON.parse(s);
    //   }catch(e){
    //     return undefined;
    //   }
    // };
    return (<div>
      <IonSearchbar params={this.props} />
      <button onClick={() => localStorage.clear()}>Clean Local Storage</button>

      <div className="generalGrid">
        {this.props.loading
          ? <p>Loading...</p>
          : this.props.error
            ? <p>Error, try again</p>
            : this.props.results && this.props.results.map(item => {
              return <div key={item.trackId} className="cardGrid">
                <SongCard
                  id={item.trackId}
                  img={item.artworkUrl100}
                  title={item.trackName}
                  album={item.collectionName}
                  fav={(localStorage.getItem(item.trackId) === null) ? false : true}
                  className="cardSingle"
                  // onClick={() => this.setState({ fav: !this.state.fav })}
                // onClick={saveState({'id':item.trackId})}
                />
              </div>
            })}
      </div>
    </div>
    )
  }
}
