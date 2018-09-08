import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'




class App extends Component {
// Render : componentWillMount() -> render() -> componentDidMount()
// update componentWillMount() -> shouldcomponentUpdate() -> rnder() -> componentDidUpdate()

  state = {
    greeting: 'Hello',
    movies : [
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
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies, // bring old state movies, and then add something.
          {
            title: "transpotting",
            poster: "http://image.cine21.com/IMGDB/poster/2001/0706/large/172352_18"
          }
        ]
      })
    }, 2000)
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
