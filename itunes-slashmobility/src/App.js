import React from 'react';
import './App.css';
import IonSearchbar from './components/menuBar';
import CardGrid from './components/cardGrid'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favs: localStorage.length,
    };
  }
  updateFavs = () => {
    this.setState({ favs: localStorage.length });
  }

  render() {
    return (<div className="allPage">
      <IonSearchbar params={this.props} favs={this.state.favs} />
      <CardGrid
        params={this.props}
        open={this.state.favs}
        updateFavs={this.updateFavs}
      />
    </div>
    )
  }
}
