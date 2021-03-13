import React from 'react';
import { BrowserRouter, Switch, Route, /*Link,*/ Redirect } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { createConfigService, createConnectionService, createAuthService } from './services';

import requireAuth from './components/AuthComponent'
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Profile from './pages/Profile';

document.body.classList.add('container-fluid', 'p-0', 'h-100');

function App() {
  const configService = createConfigService();
  const connectionService = createConnectionService(configService);
  const authService = createAuthService(configService, connectionService);
  return (
    <div className="App d-flex flex-column h-100">
      <Navbar hostUrl="." titleShort="MVTs - React" titleLong="Minimum Viable Templates - React"/>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/login' render={(props) => <Login authService={authService} {...props}/>} />
          <Route exact path='/logout' render={(props) => <Logout authService={authService} {...props}/>} />
          <Route exact path='/profile' component={requireAuth(Profile, authService)} />
          <Redirect to='/'/>
        </Switch>
      </BrowserRouter>
      <Footer version="v21.3.0"/>
    </div>
  );
}

export default App;
