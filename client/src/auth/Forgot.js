import React, { Component } from "react";
import "./style.css";

export default class Forgot extends Component {
  render() {
    return (
      <div class="auth-wrapper">
        <div class="auth-content container">
          <div class="card">
            <div class="row align-items-center">
              <div class="col-md-6">
                <div class="card-body">
                  <div className="logoHead">
                    <img
                      src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male4-512.png"
                      alt=""
                      height="60px"
                      width="60px"
                      className="sticky-logo img-fluid"
                    />
                    <h3>&nbsp; Welcome</h3>
                  </div>
                  <h4 class="mb-3 f-w-400">Reset your password</h4>
                  <div class="input-group mb-4">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="feather icon-mail" />
                      </span>
                    </div>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email address"
                    />
                  </div>
                  <button class="btn btn-primary shadow-2 mb-4">
                    Reset password
                  </button>
                  <p class="mb-0 text-muted">
                    Don’t have an account?{" "}
                    <a
                      href={`${process.env.PUBLIC_URL}/register/student`}
                      class="f-w-400"
                    >
                      Signup
                    </a>
                  </p>
                </div>
              </div>
              <div class="col-md-6 d-none d-md-block">
                <img
                  src="../assets/img/login_banner.png"
                  alt=""
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
