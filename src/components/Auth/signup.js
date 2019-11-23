import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import { signUp, signIn } from '../Actions/authAction';
import { connect } from 'react-redux';

import './signup.css';


class SignUp extends Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
    state ={
        name: "",
        surname: "",
        email: "",
        department: "",
        phone: "",
        // controls: {
        //   email:{
        //     elementType:'input',
        //     elementConfig: {
        //       type:'email',
        //       placeholder: 'Mail adresi'
        //     },
        //     value:'',
        //     validation:{
        //       required:true,
        //       isEMail:true
        //     },
        //     valid:false,
        //     touched:false,
        //   },
        //   epassword:{
        //     elementType:'input',
        //     elementConfig: {
        //       type:'password',
        //       placeholder: 'Parola'
        //     },
        //     value:'',
        //     validation:{
        //       required:false,
        //       minLength:6
        //     },
        //     valid:false,
        //     touched:false,
        //   },
        // }
    }
    writenum=()=>{
        console.log("sdfsfaa");
    }

    checkValidity(value, rules){
        let isValid=true;
        if(!rules){
          return true;
        }

        if(rules.required){
          isValid=value.trim() !== `` && isValid;
        }

        if(rules.minLength){
          isValid=value.length >= rules.minLength && isValid;
        }
        if(rules.maxLength){
          isValid=value.length <= rules.minLength && isValid;
        }
        if(rules.isEMail){
         // const pattern = /[a-z0-p!]..
         //isValid = pattern.test(value) && isValid;
        }   
        if(rules.isNumeric){
          // const pattern = /[a-z0-p!]..
          //isValid = pattern.test(value) && isValid;
         }

         return isValid;
    }
    handleChange=(e)=>{
        this.setState({
          [e.target.id]:e.target.value,
        })
    }

    handleSubmit=(e)=>{
      e.preventDefault();
      signUp(this.state);
    }

    render(){
      const {auth, authError}=this.props;
      // if(auth.uid) return <Redirect to="/"></Redirect>

      return (
        <div>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fa fa-fw fa-user fa-lg"></i>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <strong className="text-info">Ver Bi'Pati’ye Üye Ol</strong>
                <form onSubmit={this.handleSubmit}>              
                  <div className="form-group ">
                    <input className="form-control" name="name" id="name" type="text" placeholder="İsim" onChange={this.handleChange}/>
                  </div>
                  <div className="form-group">
                    <input className="form-control" name="surname" id="surname" type="text" placeholder="Soyisim" onChange={this.handleChange}/>
                  </div>
                  <div className="form-group">
                    <input className="form-control" name="phone" id="phone" type="text" placeholder="Cep no" onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <input className="form-control" name="department" id="department" type="text" placeholder="Sınıf" onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <input className="form-control" name="university_year" id="university_year" type="text" placeholder="Bölüm" onChange={this.handleChange} />
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
                    {/* <button onClick={this.handleSubmit} id="btnLogin" className="btn btn-success btn-sm">Giriş</button> */}
                    <br></br>
                    <li className="footer bg-dark text-center">
                      <a href="/bildirimler" className="text-light">Giriş</a>
                    </li>
                </form>
                <small className="text-warning">Zaten üyeyim</small>
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
    signUp: (newUser)=>dispatch(SignUp(newUser))
  }
}

export default (SignUp);

        