import React, {Component} from 'react';
import SearchIcon from '../icons/search-icon.png';

class Search extends Component {
    constructor() {
        super();
        this.state = { search: '' }
    }

    onInputChange(search) {
        this.setState({search});
    }

    onSubmit(event) {
      event.preventDefault()
      let refinedSearch = this.state.search.replace(/ /gi, "+")
      this.props.handleTermChange(refinedSearch);
    }

    render() {
        return (
            <form id="searchContainer" onSubmit={event => this.onSubmit(event)}>
              <input placeholder="Search" id="search" onChange={event => this.onInputChange(event.target.value)} />
              <img src={SearchIcon} onClick={event => this.onSubmit(event)} id="search-icon" alt="search icon"/>
            </form>
        );
    }
}

export default Search;
