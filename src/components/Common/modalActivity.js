import React, { Component }  from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import AddItemButton from '../Shared/addItemButton';
import CustomDatePicker from '../Shared/customDatePicker';



export const ModalActivity=()=>{
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [activityInfo, setActivitiyInfo] = React.useState(
      {
        title:"osi", description: "", capacity:"", date:"", content_type:"", 
        number_of_participants:"0", push_notification:""
      }
    );

    const handleChange = (e) =>{
      let form = {
        title:"osi", description: "", capacity:"", date:"", content_type:"", 
        number_of_participants:"0", push_notification:""
      };
      form.title = activityInfo.title;
      //console.log("form:",form,"state" ,activityInfo)
      form[e.target.id] = e.target.value
      console.log(form);
      setActivitiyInfo(form);
    };

    const addActivity = () =>{
      setTimeout(() => console.log('Hello'), 1000)
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
          <form >
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
              <CustomDatePicker></CustomDatePicker>
            </div>            
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Kimler Katılabilir?</label>
              <select className="form-control"  id="content_type">
                <option value="everyone">Herkes</option>
                <option value="user">Üyeler</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Bildirim Gönder</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>Gönderme</option>
                <option>Herkes</option>
                <option>Üyeler</option>
              </select>
            </div>
            <p>{activityInfo.title}</p>
          </form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Kapat
            </Button>
            <Button variant="primary" onClick={handleClick}>
              Kaydet
            </Button>
          </Modal.Footer>
        </Modal>
        </>
    );
}
