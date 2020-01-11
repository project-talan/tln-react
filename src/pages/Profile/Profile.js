import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div className="jumbotron bg-light border-0 rounded-0">
        <div className="container-fluid">
          <div className="row">
            <div className="offset-sm-4 col-sm-4">
              <p className="h5">Protected Profile section</p>
              <Link to={"/"}><small>home</small></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}