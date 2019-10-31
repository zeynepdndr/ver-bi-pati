import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import { signUp, signIn } from '../Actions/authAction';
import { connect } from 'react-redux';

class SignUp extends Component{
  constructor(props) {
    super(props);
  }
  
    state ={
        name: "",
        surname: "",
        email: "",
        department: "",
        phone: "",
    }
    handleChange=(e)=>{
        this.setState({
          [e.target.id]:e.target.value,
        })
    }

    handleSubmit=(e)=>{
      e.preventDefault();
      this.props.signUp(this.state);
    }

    render(){
      // const {auth, authError}=this.props;
      // if(auth.uid) return <Redirect to="/"></Redirect>

      return (
        <div>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fa fa-fw fa-user"></i>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input className="form-control" name="name" id="name" type="text" placeholder="Isim" onChange={this.handleChange}/>
                  </div>
                  <div className="form-group">
                    <input className="form-control" name="surname" id="surname" type="text" placeholder="Soyisim" onChange={this.handleChange}/>
                  </div>
                  <div className="form-group">
                    <input className="form-control" name="phone" id="phone" type="text" placeholder="Cep no" onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <input className="form-control" name="department" id="department" type="text" placeholder="Bolum" onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <input className="form-control" name="university_year" id="university_year" type="text" placeholder="Sinif" onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <input className="form-control" name="email" id="email" type="email" placeholder="Email" onChange={this.handleChange} />
                  </div>
                    {/* Admin hesaplari icin: */}
                    {/* <div className="form-group">
                      <label className="">Password</label>
                      <input className="form-control" name="password" id="password" type="password"/>
                      <br className=""/>
                    </div> */}
                    <button type="submit" id="btnLogin" className="btn btn-success btn-sm">Giris</button>
                </form>
            </div>
          </li>        
        </div>
      )
    }
}
const mapStateToProps=(state)=>{
      return {
        auth:state.firebase.auth,
      }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    signUp: (newUser)=>dispatch(signUp(newUser))
  }
}

export default SignUp;

        