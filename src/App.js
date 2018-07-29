import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts';
import PostForm from './components/Postform';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Dashboard from './views/Dashboard';

class App extends Component {
    render() {
      return (
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path = '/' component = { Home } />
              <Route exact path = '/login' component = { Login } />
              <Route exact path = '/register' component = { Register } />
              <Route exact path = '/dashboard' component = { Dashboard } />
            </Switch>
          </Router>
        </Provider>
      );
    }
  }

export default App;
