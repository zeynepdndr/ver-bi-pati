import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { signUp, signIn } from "../Actions/authAction";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

import "./signup.css";

class SignUp extends Component {
  state = {
    name: "",
    surname: "",
    email: "",
    department: "",
    phone: "",
    view: 0,
    emailError: false,
    passwordError: false
  };

  writenum = () => {
    console.log("sdfsfaa");
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== `` && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.minLength && isValid;
    }
    if (rules.isEMail) {
      // const pattern = /[a-z0-p!]..
      //isValid = pattern.test(value) && isValid;
    }
    if (rules.isNumeric) {
      // const pattern = /[a-z0-p!]..
      //isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSignUp = e => {
    const { firebase } = this.props;
    e.preventDefault();
    console.log("Submitted form value: ", this.state);
    firebase.doAddDoc("/users/", this.state);
  };

  getAuthStatus = response => {
    if (!response.loginStatus) {
      if (response.message === "user-not-found") {
        this.setState({ emailError: true });
      } else if (response.message === "wrong-password") {
        this.setState({ passwordError: true });
      }
    } else if (response.loginStatus) {
    }
  };

  handleUserLogin = e => {
    e.preventDefault();
    const { firebase } = this.props;
    const { email } = this.state;
    firebase.doSignInAsUser(email, this.getAuthStatus);
  };

  handleAdminLogin = e => {
    e.preventDefault();
    const { firebase } = this.props;
    const { email, password } = this.state;
    firebase.doSignInAsAdmin(email, password, this.getAuthStatus);
  };

  render() {
    const { view, emailError, passwordError } = this.state;
    // if(auth.uid) return <Redirect to="/"></Redirect>
    return (
      <div>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fa fa-fw fa-user fa-lg"></i>
          </a>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            {view === 0 && (
              <form onSubmit={this.handleSignUp} style={{ width: "300px" }}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  <div className="form-group" style={{ width: "200px" }}>
                    <strong className="text-info">Ver Bi'Pati’ye Üye Ol</strong>
                    <input
                      className="form-control"
                      name="name"
                      id="name"
                      type="text"
                      placeholder="İsim"
                      onChange={this.handleChange}
                      style={{ margin: "20px 0px" }}
                    />
                    <input
                      className="form-control"
                      name="surname"
                      id="surname"
                      type="text"
                      placeholder="Soyisim"
                      onChange={this.handleChange}
                      style={{ margin: "20px 0px" }}
                    />
                    <input
                      className="form-control"
                      name="phone"
                      id="phone"
                      type="text"
                      placeholder="Cep no"
                      onChange={this.handleChange}
                      style={{ margin: "20px 0px" }}
                    />
                    <input
                      className="form-control"
                      name="department"
                      id="department"
                      type="text"
                      placeholder="Bölüm"
                      onChange={this.handleChange}
                      style={{ margin: "20px 0px" }}
                    />

                    <input
                      className="form-control"
                      name="university_year"
                      id="university_year"
                      type="text"
                      placeholder="Sınıf"
                      onChange={this.handleChange}
                      style={{ margin: "20px 0px" }}
                    />
                    <input
                      className="form-control"
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Email"
                      onChange={this.handleChange}
                      style={{ margin: "20px 0px" }}
                    />
                  </div>
                </div>
                <br></br>
                <li className="footer bg-light text-center">
                  <Button variant="primary" type="submit">
                    Kayıt Ol
                  </Button>
                </li>
                <Button
                  type="button"
                  variant="Link"
                  onClick={() => {
                    this.setState({ view: 1 });
                  }}
                >
                  <small className="text-warning">Zaten Üye misin</small>
                </Button>
              </form>
            )}
            {view === 1 && (
              <form onSubmit={this.handleUserLogin} style={{ width: "300px" }}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  <div className="form-group" style={{ width: "200px" }}>
                    <strong className="text-info">
                      Ver Bi'Pati’ye Giriş Yap
                    </strong>

                    <input
                      className="form-control"
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Email"
                      onChange={this.handleChange}
                      style={{ margin: "20px 0px" }}
                    />
                    {emailError && (
                      <div>
                        Üzgünüz, kayıtlı bir email adresiniz bulunmamaktadır.
                      </div>
                    )}
                  </div>
                </div>
                <br></br>
                <li className="footer bg-light text-center">
                  <Button variant="primary" type="submit">
                    Giriş Yap
                  </Button>
                </li>
                <Button
                  type="button"
                  variant="Link"
                  onClick={() => {
                    this.setState({ view: 2 });
                  }}
                >
                  <small className="text-warning">Yönetici Girişi Yap</small>
                </Button>
                <br></br>
                <Button
                  type="button"
                  variant="Link"
                  onClick={() => {
                    this.setState({ view: 0 });
                  }}
                >
                  <small className="text-warning">Kayıt Ol</small>
                </Button>
              </form>
            )}
            {view === 2 && (
              <form onSubmit={this.handleAdminLogin} style={{ width: "300px" }}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  <div className="form-group" style={{ width: "200px" }}>
                    <strong className="text-info">
                      Ver Bi'Pati’ye Giriş Yap
                    </strong>
                    <input
                      className="form-control"
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Email"
                      onChange={this.handleChange}
                      style={{ margin: "20px 0px" }}
                    />
                    {emailError && (
                      <div>
                        Üzgünüz, kayıtlı bir email adresiniz bulunmamaktadır.
                      </div>
                    )}
                    <input
                      className="form-control"
                      name="password"
                      id="password"
                      type="password"
                      placeholder="Şifreniz"
                      onChange={this.handleChange}
                      style={{ margin: "20px 0px" }}
                    />
                    {passwordError && (
                      <div>Üzgünüz girdiğiniz şifre yanlıştır.</div>
                    )}
                  </div>
                </div>
                <br></br>
                <li className="footer bg-light text-center">
                  <Button variant="primary" type="submit">
                    Giriş Yap
                  </Button>
                </li>
                <Button
                  type="button"
                  variant="Link"
                  onClick={() => {
                    this.setState({ view: 1 });
                  }}
                >
                  <small className="text-warning">Giriş yap</small>
                </Button>
                <br></br>
                <Button
                  type="button"
                  variant="Link"
                  onClick={() => {
                    this.setState({ view: 0 });
                  }}
                >
                  <small className="text-warning">Kayıt Ol</small>
                </Button>
              </form>
            )}
          </div>
        </li>
      </div>
    );
  }
}

export default SignUp;
