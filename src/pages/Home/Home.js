import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import sonarLogo from './../../media/sonar.png';
import jenkinsLogo from './../../media/jenkins.png';
import dockerLogo from './../../media/docker.png';
import nginxLogo from './../../media/nginx.png';

export default class Home extends React.Component {
  render() {
    return (
      <div className="jumbotron bg-light border-0 rounded-0 pb-4 mb-0">
        <div className="container-fluid">
          <div className="row">
            <div className="offset-sm-2 col-sm-8">
              <p className="pb-4">
                Ready to use react template with navbar, sticky footer and simple routing.
                Skeleton contains SonarQube configuration file, Jenkinsfile for PR/PUSH builds,
                Dockerfile for quick start with Nginx, base project structure, <Link to={"/login"}>login</Link> / <Link to={"/logout"}>logout</Link> feature and <Link to={"/profile"}>protected router</Link>
              </p>
            </div>
          </div>
          <div className="row">
            {[sonarLogo, jenkinsLogo, dockerLogo, nginxLogo].map((l, li) => 
              <div key={li.toString()} className={ ((li === 0)?"offset-sm-2":"") + " col-sm-2"}>
                <img className="Tool__logo" src={l} alt=""></img>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}