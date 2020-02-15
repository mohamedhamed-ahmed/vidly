import React from 'react';

const MovieDetails = ({ match, history }) => {
  const clickHandler = () => {
    history.push('/');
  };
  return (
    <div>
      <h1>Movie Form {match.params.id}</h1>
      <button onClick={() => clickHandler()} className='btn btn-primary'>
        Save
      </button>
    </div>
  );
};

export default MovieDetails;
