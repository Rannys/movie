import React, { Component } from 'react'
var FontAwesome = require('react-fontawesome')

class Search extends Component {
    constructor(props) {
        super(props)
    }
    
    
    
    render() {
        return (
            <div className='navbar'>
                <h1>Movies</h1>
                <div className='searchBar'>
                    <input onChange={(e)=>this.props.filtred(e.target.value)} placeholder='Type movie name to search' />
                   
                    </div>
          
                    </div>
        )
    }
}

export default Search
