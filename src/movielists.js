import React, { Component } from 'react'
import AddModal from './modal.js'
import { Modal, Button } from "react-bootstrap"
import { uuid } from 'uuidv4';

class MovieList extends Component {
    constructor() {
        super()
        this.state = {
            movies: [{
                
                title: 'Inception',
                imgUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg',
                rating: '',
                id : uuid()
            }]
        }
    }
    handleShow = () => {
    this.setState({ show: !this.state.show });
    }
    
    addBtn=(newMovie)=>{
        this.setState({
            movies : this.state.movies.concat(newMovie)
        })
    }
    
    
    render() {
        return (
            <div className='movieContainer'>
                {this.state.movies.map(el => <div className='movie'>
                    <p>{el.rating}</p>
                    <img src={el.imgUrl}></img>
                    <h3>{el.title}</h3>
                    
                </div>)}
                <AddModal  add={(y)=>this.addBtn(y)}  />
         </div>
         
        )
    }
}
export default MovieList
