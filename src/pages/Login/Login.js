import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div className="jumbotron bg-light border-0 rounded-0">
        <div className="container-fluid">
          <div className="row text-left">
            <div className="offset-sm-4 col-sm-4">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  <small id="emailHelp" className="form-text text-muted">Use admin@admin.io as email address</small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1"/>
                  <small id="passwordHelp" className="form-text text-muted">use admin as password</small>
                </div>
                <br/>
                <button type="submit" className="btn btn-primary btn-block">Login</button>
              </form>
              <div className="text-center pt-4"><Link to={"/"}><small>home</small></Link></div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}