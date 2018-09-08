import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

const movies = [
  {
    title: "HungerGame",
    poster: "https://upload.wikimedia.org/wikipedia/en/3/39/The_Hunger_Games_cover.jpg",
  },

  {
    title: "Oldboy",
    poster: "https://upload.wikimedia.org/wikipedia/en/3/39/The_Hunger_Games_cover.jpg",
  },

  {
    title: "Star wars",
    poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/220px-Star_Wars_Logo.svg.png"
  }

]



class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
