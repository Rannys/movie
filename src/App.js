import "./App.css";
import React, { Component } from "react";
import AddModal from "./modal.js";
import { Modal, Button } from "react-bootstrap";
import { uuid } from "uuidv4";
import Search from "./Search.js";
import Rating from "./rating.js";

var FontAwesome = require("react-fontawesome");

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          title: "Inception",
          imgUrl:
            "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
          rating: 4,
          year: 2014,
          id: uuid()
        },
        {
          title: "Shrek",
          imgUrl:
            "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
          rating: 3,
          year: 2014,
          id: uuid()
        },
        
        {
          title: "Harry potter",
          imgUrl:
            "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
          rating: 5,
          year: 2014,
          id: uuid()
        }
      ],
      filterName: "",
      newRate: 1
    };
  }
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };

  addBtn = newMovie => {
    this.setState({
      movies: this.state.movies.concat(newMovie)
    });
  };
  filtermovies = term => {
    this.setState({
      filterName: term
    });
  };

  setRate = x => {
    this.setState({
      newRate: x
    });
  };

  render() {
    return (
      <div>
        <Search filtred={x => this.filtermovies(x)} />
        <Rating newRate={x => this.setRate(x)} rating={this.state.newRate} />
        <div className="movieContainer">
          {this.state.movies
            .filter(
              element =>
                element.title
                  .toUpperCase()
                  .includes(this.state.filterName.toUpperCase().trim()) &&
                element.rating >= this.state.newRate
            )
            .map(el => (
              <div className="movie">
                <img className='movieImg' src={el.imgUrl}></img>
                <h3>{el.title}</h3>
                <h5>{el.year} </h5>
                <Rating newRate={() => {}} rating={el.rating} />
              </div>
            ))}
          <AddModal add={y => this.addBtn(y)} />
        </div>
      </div>
    );
  }
}
export default App;
