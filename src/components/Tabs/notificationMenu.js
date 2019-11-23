import React, {Component} from 'react';
import AddItemButton from '../Shared/addItemButton';

import './notificationMenu.css';

class NotificationMenu extends Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      showEdit: false,
      showAdd:false,
      notification: {
        messageData:"",
        sendDataTime:"",
        receivedUser:""
      }
    }
  }

  handleChange = e => {
    this.setState({ [e.target.id]:e.target.value,});
    console.log(this.state);
  };

  handleSubmit=(e)=>{
    e.preventDefault();
    this.addItem(this.state.messageData);
  }

  onClick(){
    this.setState({showAdd: true});
  }

  deleteItem=(uid)=> {
    this.props.firebase.notification(uid);
  }

  addItem=(msg)=> {
    this.setState({
      notification:{
        messageData:msg,
        sendDataTime:new Date(),
        receivedUser:this.state.receivedUser
        },
        showAdd:false
    },()=>{
      console.log("New Notification: ",this.state);
    })
  }

  render(){

    const showAdd = this.state.showAdd;
    const notification = this.state;

    return (
      <div className="nav-item dropdown">
      <a className="nav-link dropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fa fa-fw fa-bell fa-lg"></i>
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <li className="notification-box">
        {!showAdd ? (
          <div className="row" onClick={this.onClick}> 
            <i className="fa fa-plus-circle fa-lg" id="withoutButton" title="EKLE"></i>
          </div>):(null)
        }

        {showAdd ? (
            <form onSubmit={this.handleSubmit} id="notificationForm">
              <div className="form-group">
                <textarea className="form-control" name="messageData" id="messageData" value={notification.messageData} type="text" placeholder="Mesajınızı yazınız" onChange={this.handleChange}></textarea>
              </div>
                {/* Admin hesaplari icin: */}
                {/* <div className="form-group">
                  <label className="">Password</label>
                  <input className="form-control" name="password" id="password" type="password"/>
                  <br className=""/>
                </div> */}
              <div className="form-group">
              <select value={this.state.receivedUser} onChange={this.handleChange} className="form-control">
                <option defaultValue>Alıcılar</option>
                <option value="everyone">Herkes</option>
                <option value="user">Üyeler</option>
              </select>
              </div>
                <button onClick={this.handleSubmit} id="btnLogin" className="btn btn-success btn-sm bg-dark">Ekle</button>
            </form>
          ):(null)
        }
          <div className="row"> 
            <div className="col-lg- col-sm-8 col-8">
              <strong className="text-info">David John</strong>
              <div>             
                Lorem ipsum dolor sit amet, consectetur
              </div>
              <small className="text-warning">27.11.2015, 15:00</small>
            </div>    
            <div className="col-lg-4 col-sm-4 col-4" onClick={this.deleteItem}>
              <span><i className="fa fa-edit fa-lg" title="DÜZENLE"></i></span>
              <span><i className="fa fa-trash fa-lg" title="SİL"></i></span>
            </div>
          </div>
        </li>
        <li className="notification-box bg-gray">
          <div className="row"> 
            <div className="col-lg-8 col-sm-8 col-8">
              <strong className="text-info">David John</strong>
              <div>
                Lorem ipsum dolor sit amet, consectetur
              </div>
              <small className="text-warning">27.11.2015, 15:00</small>
            </div>    
          </div>
        </li>
        <li className="notification-box">
          <div className="row"> 
            <div className="col-lg-8 col-sm-8 col-8">
              <strong className="text-info">David John</strong>
              <div>
                Lorem ipsum dolor sit amet, consectetur
              </div>
              <small className="text-warning">27.11.2015, 15:00</small>
            </div>    
          </div>
        </li><br></br><br></br>
        <li className="footer bg-dark text-center">
          <a href="/bildirimler" className="text-light">Hepsini Gör</a>
        </li>
      </div>
    </div>
  
    )
  }
}
export default NotificationMenu;

        