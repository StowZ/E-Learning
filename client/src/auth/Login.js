import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "./style.css";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { loginUser } from "../actions/authActions";
import NavBar from '../components/NavBar';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
      role: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(newUser);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.state.role = nextProps.auth.users.role;
      if (nextProps.auth.users.role == 'admin') {
        this.props.history.push("/dashboard");
      }
      else {
        this.props.history.push("/home");
      }
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { errors } = this.state;

    const GoogleSuccess = (response) => {
      const email = response.profileObj.email;
      const token = response.tokenId;
      console.log('Failed to login with google error : ' + email , token);
    }

    const GoogleFailure = (response) => {
      console.log('Failed to login with google error : ' + response);
    }

    const responseFacebook = (response) => {
      console.log(response);
    }

    const errorFacebook = (response) => {
      console.log('Failed to login with google error : ' + response);
    }

    return (
      <div>
        <NavBar />
        <div className="auth-wrapper">
          <div className="auth-content container">
            <div className="card">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="card-body">
                    <div className="logoHead">
                      <img
                        src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male4-512.png"
                        alt=""
                        height="60px"
                        width="60px"
                        className="sticky-logo img-fluid"
                      />
                      <h3>&nbsp;Welcome</h3>
                    </div>
                    <h4 className="mb-3 f-w-400">Login into your account</h4>

                    <form noValidate onSubmit={this.onSubmit}>
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="feather icon-mail" />
                          </span>
                        </div>
                        <input
                          name="email"
                          type="email"
                          className={classnames("form-control", {
                            "is-invalid": errors.email
                          })}
                          placeholder="Email address"
                          value={this.state.email}
                          onChange={this.onChange}
                        />
                        {errors.email && (
                          <div className="invalid-feedback">{errors.email}</div>
                        )}
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="feather icon-lock" />
                          </span>
                        </div>
                        <input
                          name="password"
                          type="password"
                          className={classnames("form-control", {
                            "is-invalid": errors.password
                          })}
                          placeholder="Password"
                          value={this.state.password}
                          onChange={this.onChange}
                        />
                        {errors.password && (
                          <div className="invalid-feedback">
                            {errors.password}
                          </div>
                        )}
                      </div>

                      <div className="saprator">
                        <span>OR</span>
                      </div>


                      <FacebookLogin
                        appId="3080894288827797"
                        autoLoad={false}
                        callback={responseFacebook}
                        onFailure={errorFacebook}
                        render={renderProps => (
                          <button onClick={renderProps.onClick} className="btn btn-facebook mb-2 mr-2"><i className="fab fa-facebook-f" />
                            facebook</button>
                        )}
                      />

                      <GoogleLogin
                        clientId="841274798809-99te9q7h76uesj6ptot3inqek0japu4i.apps.googleusercontent.com"
                        buttonText="Google"
                        onSuccess={GoogleSuccess}
                        onFailure={GoogleFailure}
                        cookiePolicy={'single_host_origin'}
                        render={renderProps => (
                          <button onClick={renderProps.onClick} className="btn btn-googleplus mb-2 mr-2">
                            <i className="fab fa-google" />
                            Google
                          </button>
                        )}
                      />


                      {/* <button className="btn btn-facebook mb-2 mr-2">
                        <i className="fab fa-facebook-f" />
                        facebook
                      </button>


                      <button className="btn btn-googleplus mb-2 mr-2">
                        <i className="fab fa-google" />
                        Google
                        </button> */}
                      <div className="form-group text-left mt-2">
                        <div className="checkbox checkbox-fill d-inline">
                          <input
                            type="checkbox"
                            name="checkbox-fill-1"
                            id="checkbox-fill-a1"
                            checked=""
                          />

                          <input
                            type="checkbox"
                            name="checkbox-fill-2"
                            id="checkbox-fill-2"
                          />
                          <label htmlFor="checkbox-fill-2" className="cr">
                            Save Credentials.
                          </label>
                        </div>
                      </div>
                      <button className="btn btn-primary shadow-2 mb-4">
                        Login
                      </button>
                    </form>
                    <p className="mb-2 text-muted">
                      Forgot password?{" "}
                      <a
                        href={`${process.env.PUBLIC_URL}/forgot-password`}
                        className="f-w-400"
                      >
                        Reset
                      </a>
                    </p>
                    <p className="mb-0 text-muted">
                      Don’t have an account?{" "}
                      <a
                        href={`${process.env.PUBLIC_URL}/register/` + this.props.match.params.role}
                        className="f-w-400"
                      >
                        Signup
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6 d-none d-md-block">
                  <img
                    src="../assets/img/login_banner.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

//map properties to proptypes
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
