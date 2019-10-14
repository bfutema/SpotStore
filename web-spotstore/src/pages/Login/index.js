import React, { Component } from 'react';

import './styles.css';

export default class Login extends Component {
  render() {
    return (
      <>
        <div className="limiter-container">
          <div className="background-container">
            <div className="login-container">
              <form className="login-form validate-form">
                <span className="login-form-title">Login</span>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  };
};