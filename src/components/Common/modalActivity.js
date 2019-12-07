import React, { Component }  from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import AddItemButton from '../Shared/addItemButton';
import CustomDatePicker from '../Shared/customDatePicker';
import {withFirebase} from '../Firebase'


const ModalActivityBase=(props)=>{
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [activityInfo, setActivitiyInfo] = React.useState(
      {
        title:"", description: "", capacity:"", date:"", content_type:"", 
        number_of_participants:"", push_notification:""
      }
    );

    const handleChange = (e) =>{
      let form = {
        title:"", description: "", capacity:"", date:"", content_type:"", 
        number_of_participants:"", push_notification:""
      };
      form = activityInfo;
      form[e.target.id] = e.target.value
      setActivitiyInfo(form);
    };

    const addActivity = () =>{
      const { firebase } = props
      firebase.doAddDoc('activity', activityInfo)
    };

    const getDate = (date) =>{
      setActivitiyInfo({
        ...activityInfo,
        date:date});
    };
    const handleClick = () =>{
      handleClose();
      addActivity()
    };
  
    return (
      <>
        <AddItemButton addActivity={handleShow}></AddItemButton> 
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Etkinlik Ekle</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={handleClick} id="activityForm">
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Başlık</label>
              <input className="form-control" name="title" id="title" onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">İçerik</label>
              <textarea className="form-control" name="description" id="description" type="text" rows="3" onChange={handleChange}></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Katılımcı sayısı</label>
              <input className="form-control" name="capacity" id="capacity" onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Tarih</label><br/>
              <CustomDatePicker newDate={getDate}></CustomDatePicker>
            </div>            
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Kimler Katılabilir?</label>
              <select className="form-control" id="content_type" onChange={handleChange}>
                <option defaultValue >Seçiniz</option>
                <option value="everyone">Herkes</option>
                <option value="user">Üyeler</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Bildirim Gönder</label>
              <select className="form-control" id="push_notification" onChange={handleChange}>
                <option defaultValue >Gönderme</option>
                <option value="everyone">Herkes</option>
                <option value="user">Üyeler</option>
              </select>
            </div>
            <Button variant="secondary" onClick={handleClose}>
              Kapat
            </Button>
            <Button variant="primary" onClick={handleClick}>
              Kaydet
            </Button>
          </form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
        </>
    );
}

const ModalActivity = withFirebase(ModalActivityBase);
export default ModalActivity;