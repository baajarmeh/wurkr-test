import './login.scss'
import logo from '../../assets/wurkr.svg'
import homeScreem from '../../assets/home-screen.svg'
import googleLogo from '../../assets/google-logo.png'
import linkedInLogo from '../../assets/linkedin-logo.png'
import mail from '../../assets/mail.svg'
import lock from '../../assets/lock.svg'
import gfb from '../../assets/gray-fb.svg'
import ginsta from '../../assets/gray-insta.svg'
import gtwitter from '../../assets/gray-twitter.svg'
import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: { email: '', password: '' },
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      default:
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
  }

  render() {
    return (
      <div className="login-container">
        <div className="header">
          <Link className="login__link" to="/">
            <img src={logo} />
          </Link>
        </div>
        <div className="form-container">
          <div className="form-container-image-holder"><img src={homeScreem} /></div>
          <div className="sign_form">
            <div>
              <h2 className="welcome-message">Welcome back to Wurkr!</h2>
              <p> Sign in to access your account.<br />Not registered?</p>
              <div className="single-sign-in">
                <div className="signin-opt"><img src={googleLogo} alt="google logo" /> Sign in with Google </div>
                <div className="signin-opt"><img src={linkedInLogo} alt="linkedin logo" /> Sign in with LinkedIn </div>
              </div>
              <div className="or-container">
                <div className="or-item or-line">
                  <hr />
                </div>
                <div className="or-item or"> Or </div>
                <div className="or-item or-line">
                  <hr />
                </div>
              </div>
              <form data-hs-cf-bound="true">
                <div className="full_input_filed">
                  <span className="icon"><img src={mail} /></span>
                  <input type="email" value={this.state.email}
                    onChange={(event) => this.handleUserInput(event)}
                    name="email" placeholder="Enter your email" required />
                  <div className="error-message">
                    <span>{this.state.formErrors.email}</span>
                  </div>
                </div>
                <div className="full_input_filed">
                  <span className="icon"><img src={lock} /></span>
                  <input type="password" value={this.state.password}
                    onChange={(event) => this.handleUserInput(event)}
                    name="password" id="password" placeholder="Enter your password" required />
                  <div className="error-message">
                    <span>{this.state.formErrors.password}</span>
                  </div>
                </div>
                <div className="full_input_filed">
                  <div className="login-opts">
                    <div className="rmbr-me">
                      <input type="checkbox" id="rememberMe" name="remember-me" />
                      <span><label htmlFor="remember-me">Remember me</label></span>
                    </div>
                    <div className="forget_pass"><a>Forgot password?</a></div>
                  </div>
                </div>
                <div className="full_input_filed signin">
                  <button type="submit" disabled={!this.state.formValid} className="send">Sign In</button>
                </div>
              </form>
            </div>
            <div className="login-footer">
              <div className="social_icons"><span>SHOW US SOME LOVE</span>
                <ul>
                  <li><a target="_blank" href="https://www.facebook.com/wurkr">
                    <img src={gfb} /></a>
                  </li>
                  <li><a target="_blank" href="https://www.instagram.com/mywurkr/?hl=en">
                    <img src={ginsta} /></a>
                  </li>
                  <li><a target="_blank" href="https://twitter.com/WeAreWurkr">
                    <img src={gtwitter} /></a>
                  </li>
                </ul>
              </div>
              <div className="footer_links">
                <ul>
                  <li><a target="_blank" href="https://wurkr.io/privacy-policy/">Privacy Policy</a></li>
                  <li><a target="_blank" href="https://wurkr.io/terms-and-conditions/">Terms and Conditions</a></li>
                  <li><a target="_blank" href="https://wurkr.io/support/">Help Center</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default Login;