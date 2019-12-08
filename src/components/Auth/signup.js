import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { UserContext } from "./UserContext";
import { withFirebase } from "../Firebase";

import "./signup.css";

const SignUpBase = props => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    surname: "",
    email: "",
    department: "",
    phone: ""
  });

  const [view, setView] = useState(0);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [user, setUser] = useContext(UserContext);

  const handleChange = e => {
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
  };

  const handleSignUp = e => {
    const { firebase } = props;
    e.preventDefault();
    firebase.doAddDoc("/users/", this.state);
  };

  const getAuthStatus = response => {
    if (!response.loginStatus) {
      if (response.message === "user-not-found") {
        setEmailError(true);
      } else if (response.message === "wrong-password") {
        setPasswordError(true);
      }
    } else if (response.loginStatus) {
      setUser({ type: response.authType, data: response.userData });
    }
  };

  const handleUserLogin = e => {
    e.preventDefault();
    const { firebase } = props;
    firebase.doSignInAsUser(userInfo.email, getAuthStatus);
  };

  const handleAdminLogin = e => {
    e.preventDefault();
    const { firebase } = props;
    firebase.doSignInAsAdmin(userInfo.email, userInfo.password, getAuthStatus);
  };
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
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          {view === 0 && (
            <form onSubmit={handleSignUp} style={{ width: "300px" }}>
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
                    onChange={handleChange}
                    style={{ margin: "20px 0px" }}
                  />
                  <input
                    className="form-control"
                    name="surname"
                    id="surname"
                    type="text"
                    placeholder="Soyisim"
                    onChange={handleChange}
                    style={{ margin: "20px 0px" }}
                  />
                  <input
                    className="form-control"
                    name="phone"
                    id="phone"
                    type="text"
                    placeholder="Cep no"
                    onChange={handleChange}
                    style={{ margin: "20px 0px" }}
                  />
                  <input
                    className="form-control"
                    name="department"
                    id="department"
                    type="text"
                    placeholder="Bölüm"
                    onChange={handleChange}
                    style={{ margin: "20px 0px" }}
                  />

                  <input
                    className="form-control"
                    name="university_year"
                    id="university_year"
                    type="text"
                    placeholder="Sınıf"
                    onChange={handleChange}
                    style={{ margin: "20px 0px" }}
                  />
                  <input
                    className="form-control"
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
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
                  setView(1);
                }}
              >
                <small className="text-warning">Zaten Üye misin</small>
              </Button>
            </form>
          )}
          {view === 1 && (
            <form onSubmit={handleUserLogin} style={{ width: "300px" }}>
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
                    onChange={handleChange}
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
                  setView(2);
                }}
              >
                <small className="text-warning">Yönetici Girişi Yap</small>
              </Button>
              <br></br>
              <Button
                type="button"
                variant="Link"
                onClick={() => {
                  setView(0);
                }}
              >
                <small className="text-warning">Kayıt Ol</small>
              </Button>
            </form>
          )}
          {view === 2 && (
            <form onSubmit={handleAdminLogin} style={{ width: "300px" }}>
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                  setView(1);
                }}
              >
                <small className="text-warning">Giriş yap</small>
              </Button>
              <br></br>
              <Button
                type="button"
                variant="Link"
                onClick={() => {
                  setView(0);
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
};
const SignUp = withFirebase(SignUpBase);
export default SignUp;
