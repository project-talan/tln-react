import React from 'react';
import './Navbar.css';
import Nav from 'react-bootstrap/Nav';
import brand from './../../media/brand.png';
import MenuIcon from '@material-ui/icons/Menu';

export default class Navbar extends React.Component {
  render() {
    return (
      <Nav className={"navbar navbar-light bg-light p-0 pl-4 pr-4 border-bottom" + ((this.props.hide)?(" d-none"):(""))}>
        <a className="navbar-brand" href={this.props.hostUrl}>
          <img className="Navbar__logo" src={brand} alt=""></img>
          <span className="pl-3 d-sm-none">{this.props.titleShort}</span>
          <span className="pl-3 d-none d-sm-inline-block">{this.props.titleLong}</span>
        </a>
        <Nav className="nav text-black d-none">
          UA, Kyiv
        </Nav>
        <Nav className="nav">
          <MenuIcon/>
        </Nav>
      </Nav>
    );
  }
}