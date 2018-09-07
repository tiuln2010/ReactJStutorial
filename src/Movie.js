import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render () {
        return (
            <div>
                <MoviePoster />
                <h1>hello this is a movie</h1>
            </div>
        );
    }

}

class MoviePoster extends Component {
    render() {
        return(
            <img src="https://upload.wikimedia.org/wikipedia/en/3/39/The_Hunger_Games_cover.jpg" />
        )
    }
}

export default Movie
