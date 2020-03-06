import React, {Component} from 'react';

class Gif extends Component {

  render(){
    return (
      <div>
        <img className="gif" src={this.props.gif.images.downsized.url} alt={this.props.gif.title} />
      </div>
    )
  }

};

export default Gif;
