import React from 'react';
import SongList from './songList';
import '../css/container.css';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chart: []
    };
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', () => {
      if (request.status !== 200) return;

      const jsonString = request.responseText;
      const data = JSON.parse(jsonString).feed.entry;
      this.setState({chart: data});
    });
    request.send();
  }

  render() {
    return (
      <div>
        <h1>Top 20 Crap Tunes</h1>
        <SongList chart={this.state.chart} />    
      </div>
    )
  }
}

export default Container;