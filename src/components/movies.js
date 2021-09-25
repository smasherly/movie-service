import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 10,
  };

  handleDelete = (movie) => {
    // filtering the movie object from state where the id of the movie does not equal the id of the movie in which delete was selected.  this function returns a new state object with that movie missing and sets the state accordingly
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
    if (this.state.movies.liked === true) {
      this.setState({ liked: false });
    }
    if (this.state.movies.liked === false) {
      this.setState({ liked: true });
    }
  };

  handlePageChange = (page) => {
    console.log(page);
  };

  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <p>There are no movies in the database.</p>;
    return (
      <>
        <p>Showing {count} in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  {/* need to make onclick an arrow function when it takes an
                  arument */}
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
        />
      </>
    );
  }
}

export default Movies;
