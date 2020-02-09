import React, { Component } from "react";
import { getMovies, deleteMovie } from "./../services/fakeMovieService";

export default class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movieId => {
    deleteMovie(movieId);
    this.setState({
      movies: getMovies()
    });
  };

  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <p className="m-2">No Movies To Display</p>;
    return (
      <React.Fragment>
        <span className="m-2">Showing {count} movies in the database</span>
        <table className="table m-2">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
