import React, { Component } from 'react';
import { getMovies, deleteMovie } from './../services/fakeMovieService';
import { getGenres } from './../services/fakeGenreService';

import Pagination from './common/Pagination';
import ListGroup from './common/ListGroup';
import MoviesTable from './MoviesTable';
import { paginate } from './../utils/paginate';

import _ from 'lodash';

export default class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    currentFilter: 'All Genres',
    sortColumn: { path: 'title', direction: 'asc' }
  };

  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genres: [{ _id: 'All Genres', name: 'All Genres' }, ...getGenres()]
    });
  }

  handleDelete = movieId => {
    deleteMovie(movieId);
    this.setState({
      movies: getMovies()
    });
  };

  toggleHeart = movie => {
    const movies = [...this.state.movies];
    movies[movies.indexOf(movie)].isLiked = !movie.isLiked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleFilterChange = filter => {
    this.setState({ currentFilter: filter, currentPage: 1 });
  };

  handleSortChange = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      currentPage,
      pageSize,
      movies,
      currentFilter,
      sortColumn
    } = this.state;

    const filteredMovies =
      currentFilter === 'All Genres'
        ? movies
        : movies.filter(m => m.genre.name === currentFilter);

    const sorted = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.direction]
    );

    const slicedMovies = paginate(sorted, currentPage, pageSize);
    return { totalCount: filteredMovies.length, data: slicedMovies };
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      currentPage,
      pageSize,
      genres,
      currentFilter,
      sortColumn
    } = this.state;
    if (count === 0) return <p className='m-2'>No Movies To Display</p>;

    const { totalCount, data: movies } = this.getPagedData();

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-2'>
            <ListGroup
              items={genres}
              currentFilter={currentFilter}
              onFilterChange={this.handleFilterChange}
            />
          </div>
          <div className='col-sm'>
            <span className='m-2'>
              Showing {totalCount} movies in the database
            </span>

            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onLike={this.toggleHeart}
              onDelete={this.handleDelete}
              onSort={this.handleSortChange}
            />

            <Pagination
              currentPage={currentPage}
              itemsCount={totalCount}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
