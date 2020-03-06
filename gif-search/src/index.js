
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GifContainer from './components/gifContainer.js';
import Search from './components/search.js';
import request from 'superagent';
import './all.css'

class App extends Component {

  constructor() {
    super();
    // load trending gifs on first page load
    this.loadTrendingGifs()

    this.state = {
        gifs: []
    }
}

loadTrendingGifs(){
  const trending = 'https://api.giphy.com/v1/gifs/trending?api_key=B67qY8xOh6aF1f6qoMlfvlmXm4kUKlf6&limit=50&rating=R';
  request.get(trending, (err, res) => {
     this.setState({
       gifs: res.body.data
     })
  })
}

  handleTermChange = (term) => {
    if (term === ""){
      // load trending gifs if search term is empty
      this.loadTrendingGifs()
    }
    else{
      const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=KnzVMdxReB873Hngy23QGKAJh6WtUnmz&limit=50`;
        request.get(url, (err, res) => {
        this.setState({
          gifs: res.body.data
         })
      })
    }
  }

    render() {
      // pass the searching function to the search bar as a prop
        return (
          <div>
            <h1 id="heading">Gif Search</h1>

            <Search handleTermChange={this.handleTermChange} />
            <GifContainer gifs={this.state.gifs} />
          </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
