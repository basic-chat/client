import React from 'react';

import Home from './components/pages/Home';
import Login from './components/pages/Login/Login.controller';
import Register from './components/pages/Register/Register.controller';
import Admin from './components/pages/Admin';

import NavBar from './components/Navbar/Navbar.controller';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PrivateRoute from './common/hocs/PrivateRoute';
import UnPrivateRoute from './common/hocs/UnPrivateRoute';

import './App.scss';
import Chat from './components/pages/Chat/Chat.controller';

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        
        <Route exact path="/" component={Home} />
        <UnPrivateRoute path="/login" component={Login} />
        <UnPrivateRoute path="/Register" component={Register} />
        <PrivateRoute path="/admin" roles={["admin"]} component={Admin} />
        <PrivateRoute path="/chat" roles={["user", "admin"]} component={Chat} />

      </Router>
    </div>
  );
}

export default App;
