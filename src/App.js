import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import requireAuth from './components/AuthComponent'
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Profile from './pages/Profile';

document.body.classList.add('container-fluid', 'p-0', 'h-100');

function App() {
  return (
    <div className="App d-flex flex-column h-100">
      <Navbar hostUrl="." titleShort="MVTs - React" titleLong="Minimum Viable Templates - React"/>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/profile' component={requireAuth(Profile)} />
          <Redirect to='/'/>
        </Switch>
      </BrowserRouter>
      <Footer version="v20.1.1"/>
    </div>
  );
}

export default App;
