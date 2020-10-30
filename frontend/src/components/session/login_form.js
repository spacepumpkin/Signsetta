import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../../images/mern-logo-1.png';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this._nullUser = {
      email: "",
      password: "",
      errors: {},
      submitted: false
    };

    this.state = Object.assign({}, this._nullUser);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated === true) {
      this.props.history.push('/profile');
    }
    this.setState({ errors: nextProps.errors })
  }

  componentDidMount() {
    document.title = `Login - Signsetta`;
  }

  update(field) {
    return evt => this.setState({ [field]: evt.currentTarget.value });
  }

  renderErrors() {
    if (this.state.submitted === true) {
      this.setState({ submitted: false })
    }
    return (
      <div className="list">
        {Object.keys(this.state.errors).map((error, i) => (
          <div key={`error-${i}`}>
            {this.state.errors[error]}
          </div>
        ))}
      </div>
    );
  }

  demoLogin() {
    return (evt) => {
      this.props.login({
        email: "test@test.com",
        password: "password"
      })
    };
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password
    }
    this.setState({ errors: {}, submitted: true });
    this.props.login(user);
  }

  render() {
    return (
      <div className="ui middle aligned center aligned grid" >
        <div className="column five wide">
          <div className="image">
            <img src={logo} className="image" alt="logo" />
          </div>
          <div className="ui divider"></div>
          <h1 className="ui teal header">Log In</h1>
          <form className="ui large form" onSubmit={this.handleSubmit}>
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="icon envelope"></i>
                  <input type="email"
                    value={this.state.email}
                    onChange={this.update('email')}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="icon lock"></i>
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    placeholder="Password"
                  />
                </div>
              </div>
              <button
                className={`ui button teal ${this.state.submitted && 'loading'}`}
                disabled={this.state.submitted}
                type="submit">
                Submit
                </button>
            </div>
          </form>
          {
            (Object.keys(this.state.errors).length >= 1)
            &&
            (
              <div className="ui error message">
                { this.renderErrors()}
              </div>
            )
          }
          <div className="ui message ">
            <div>
              New user?
            <Link to="/signup"> Sign Up </Link>
            or log in with a &nbsp;
            <button
                className="ui button small pink"
                disabled={this.state.submitted}
                onClick={this.demoLogin()}
                type="button">
                DEMO
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(LoginForm);
// export default LoginForm;

