import React, { Component } from 'react'

class Search extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className='navbar'>
                <h1>Movies</h1>
                <div className='searchBar'>
                    <input placeholder='Type movie name to search' />
                    <button>Search</button>
                </div>
                <h4>Rating</h4>
            </div>
        )
    }
}

export default Search
