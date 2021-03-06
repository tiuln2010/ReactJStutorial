import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'




class App extends Component {
// Render : componentWillMount() -> render() -> componentDidMount()
// update componentWillMount() -> shouldcomponentUpdate() -> rnder() -> componentDidUpdate()

  state = {
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
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
      })
    }, 2000)
  }

  _renderMovies = () => { // 자체 기능은 _로 시작하게 한다. 
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key= {index} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies(): 'Loading'}
      </div>
    );
  }
}

export default App;
