import React, { Component } from 'react';
import Like from './common/Like';
import Table from './common/Table';
import { Link } from 'react-router-dom';

class MoviesTable extends Component {
  columns = [
    {
      path: 'title',
      title: 'Title',
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    },
    { path: 'genre.name', title: 'Genre' },
    { path: 'numberInStock', title: 'Stock' },
    { path: 'dailyRentalRate', title: 'Rate' },
    {
      key: 'like',
      content: movie => (
        <Like
          value={movie.isLiked}
          toggleHeart={() => this.props.onLike(movie)}
        />
      )
    },
    {
      key: 'delete',
      content: movie => (
        <button
          onClick={() => this.props.onDelete(movie._id)}
          className='btn btn-danger btn-sm'
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
        data={movies}
      />
    );
  }
}

export default MoviesTable;
