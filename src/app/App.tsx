import React, {useContext} from 'react';

import Home from './components/pages/Home';
import Login from './components/pages/Login/Login.controller';
import Register from './components/pages/Register/Register.controller';
import Admin from './components/pages/Admin';

import NavBar from './components/Navbar/Navbar.controller';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos/Todos.controller';
import PrivateRoute from './common/hocs/PrivateRoute';
import UnPrivateRoute from './common/hocs/UnPrivateRoute';

import './App.scss';
import Chat from './components/Chat/Chat';
import Join from './components/Join';

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        
        <Route exact path="/" component={Join} />
        <UnPrivateRoute path="/login" component={Login} />
        <UnPrivateRoute path="/Register" component={Register} />
        <PrivateRoute path="/admin" roles={["admin"]} component={Admin} />
        <PrivateRoute path="/todos" roles={["user", "admin"]} component={Chat} />

      </Router>
    </div>
  );
}

export default App;
