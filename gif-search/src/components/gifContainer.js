import React, {Component} from 'react';
import Gif from './gif.js';

class GifContainer extends Component{

  render(){
    // return an array of Gif componenets, passing each gif as prop
    const gifArray =  this.props.gifs.map((gif) => {
        return <Gif key={gif.id} gif={gif} />
      });

    return (
      <div id="gifContainer">
        {gifArray}
      </div>
    );
  }
};

export default GifContainer;
