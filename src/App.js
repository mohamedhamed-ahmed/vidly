import React from 'react';
import './App.css';
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';
import Rentals from './components/Rentals';
import Customers from './components/Customers';
import NotFound from './components/NotFound';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/common/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className='container'>
        <Switch>
          <Route path='/movies/:id' component={MovieDetails} />
          <Route path='/movies' component={Movies} />
          <Route path='/customers' component={Customers} />
          <Route path='/rentals' component={Rentals} />
          <Route path='/not-found' component={NotFound} />
          <Redirect exact from='/' to='/movies' />
          <Redirect to='/not-found' />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
