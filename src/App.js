import './App.css';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import { Route, Switch } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => <ProductList />} />
          <Route path='/details' render={() => <Details />} />
          <Route path='/cart' render={() => <Cart />} />
          <Route path='*' render={() => <Default />} />
        </Switch>
      </React.Fragment>
    )
  }
}



export default App