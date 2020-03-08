import React, { Component } from 'react'
import AddModal from './modal.js'

class MovieList extends Component {
    constructor() {
        super()
        this.state = {
            movies: [{
                name: 'Inception',
                imgUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg',
                rating: ''
            }]
        }
    }
    render() {
        return (
            <div className='movieContainer'>
                {this.state.movies.map(el => <div className='movie'>
                    <p>{el.rating}</p>
                    <img src={el.imgUrl}></img>
                    <h3>{el.name}</h3>
                </div>)}
                
                    <AddModal/>
                
            </div>
        )
    }
}
export default MovieList
