import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../../images/mern-logo-1.png';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this._nullUser = {
      email: "",
      password: "",
      username: "",
      password2: "",
      errors: {},
      submitted: false
    };

    this.state = Object.assign({}, this._nullUser);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated === true) {
      this.props.history.push("/profile");
    }
    this.setState({ errors: nextProps.errors })
  }

  componentDidMount() {
    document.title = `Signup - Signsetta`;
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

  handleSubmit(evt) {
    evt.preventDefault();
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    }
    // let that = this;
    // setTimeout(() => that.props.signup(user), 1500);
    this.setState({ errors: {}, submitted: true });
    this.props.signup(user);
  }

  render() {
    return (
      <div className="ui middle aligned center aligned grid" >
        <div className="column five wide">
          <div className="image">


              <i className="loading american sign language interpreting teal icon huge" ></i>
          

          </div>
          <div className="ui divider"></div>
          <h1 className="ui teal header">Sign Up</h1>
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
                  <i className="icon user"></i>
                  <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    placeholder="Username"
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
              <div className="field">
                <div className="input"></div>
                <input type="password"
                  value={this.state.password2}
                  onChange={this.update('password2')}
                  placeholder="Confirm Password"
                />
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
            Already have an account?
            <Link to="/login"> Log In </Link>
          </div>
        </div>
      </div >
    )
  }
}

export default withRouter(SignupForm);
// export default SignupForm;