import React, { Component }  from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import AddItemButton from '../Shared/addItemButton';
import CustomDatePicker from '../Shared/customDatePicker';
import ImageUpload from '../Shared/imageUpload';
import {withFirebase} from '../Firebase'


const ModalAnnouncementBase=(props)=>{
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  // 

  const [announcementInfo, setAnnouncementInfo] = React.useState(
    {
      title:"", description: "", status:"", send_date_time:"", content_type:"", 
      species:"", push_notification:"",
    }
  );

  const handleChange = (e) =>{
    let form = {
      title:"", description: "", status:"", send_date_time:"", content_type:"", 
      species:"", push_notification:""
    };
    form = announcementInfo;
    form[e.target.id] = e.target.value
    setAnnouncementInfo(form);
  };

  const addAnnouncement = () =>{
    const { firebase } = props
    firebase.doAddDoc('announcements', announcementInfo)
  };

  const getDate = (date) =>{
    setAnnouncementInfo({
      ...announcementInfo,
      send_date_time:date});
  };

  const handleClick = () =>{
    handleClose();
    addAnnouncement();
  };
  // 
    return (
      <>
        <AddItemButton addActivity={handleShow}></AddItemButton> 
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>İlan Ekle</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={handleClick} id="announcementForm">
            <div className="form-group">
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="cat" name="species" className="custom-control-input" onChange={handleChange} value ="cat"/>
                <label className="custom-control-label" htmlFor="cat">Kedi</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="dog" name="species" className="custom-control-input" onChange={handleChange} value="dog"/>
                <label className="custom-control-label" htmlFor="dog">Köpek</label>
              </div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Başlık</label>
              <input className="form-control" name="title" id="title" onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">İçerik</label>
              <textarea className="form-control" name="description" id="description" rows="3" onChange={handleChange}></textarea>
            </div>
            <div className="form-group">
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="content_type" name="content_type" className="custom-control-input"/>
                <label className="custom-control-label" htmlFor="content_type">Kayıp</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="owner" name="owner" className="custom-control-input"/>
                <label className="custom-control-label" htmlFor="owner">Sahiplendirme</label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Tarih</label><br/>
              <CustomDatePicker newDate={getDate}></CustomDatePicker>
            </div>            
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Fotoğraf Yükle</label><br/>
              <ImageUpload></ImageUpload>
            </div>         
            <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="status" name="status" className="custom-control-input" onChange={handleChange}/>
                <label className="custom-control-label" htmlFor="customRadioInline1">İlan Aktif {"("} Anasayfada Göster {")"}</label>
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

const ModalAnnouncement = withFirebase(ModalAnnouncementBase);
export default ModalAnnouncement;