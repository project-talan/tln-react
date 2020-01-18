import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import CircularProgress from '@material-ui/core/CircularProgress';



export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: 'admin@admin.io',
      password: '',
      loading: false,
      error: null
    };
    this.timer = React.createRef();    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    if (this.timer.current) {
      clearTimeout(this.timer.current);
      this.timer.current = null;
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]: value});
  }
  
  handleSubmit(event) {
    if (!this.state.loading) {
      this.setState({ loading: true, error: null});
      const { login, password } = this.state
      this.props.authService.login(login, password)
      .then(res => {
        this.setState({ loading: false});
        const parsed = queryString.parse(this.props.location.search);
        this.props.history.push(parsed.redirect?parsed.redirect:"/");
      })
      .catch( error => {
        this.setState({ loading: false, error: error});
      });
      this.timer.current = setTimeout(() => {
        this.setState({ loading: false, success: false});
        this.timer.current = null;
      }, 2000);
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className="jumbotron bg-light border-0 rounded-0">
        <div className="container-fluid">
          <div className="row text-left">
            <div className="offset-sm-4 col-sm-4">
              {this.state.error && <div className="alert alert-danger text-center" role="alert">{this.state.error}</div>}
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="inputLogin">Login</label>
                  <input type="email" className="form-control" name="login" id="inputLogin" aria-describedby="loginHelp" value={this.state.login} onChange={this.handleInputChange}/>
                  <small id="loginHelp" className="form-text text-muted">Use <span className="font-weight-bold">admin@admin.io</span> as email address</small>
                </div>
                <div className="form-group">
                  <label htmlFor="inputPassword">Password</label>
                  <input type="password" className="form-control" name="password" id="inputPassword" value={this.state.password} onChange={this.handleInputChange}/>
                  <small id="passwordHelp" className="form-text text-muted">use <span className="font-weight-bold">admin</span> as password</small>
                </div>
                <br/>
                <div style={{position: 'relative'}}>
                <button type="submit" className="btn btn-primary btn-block" disabled={this.state.loading}>Login</button>
                {this.state.loading && <CircularProgress style={{position: 'absolute', top: '50%', left: '50%', marginTop: -12, marginLeft: -12}} size={24} />}
                </div>
              </form>
              <div className="text-center pt-4"><Link to={"/"}><small>home</small></Link></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}