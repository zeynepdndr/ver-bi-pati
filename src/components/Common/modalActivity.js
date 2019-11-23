import React, { Component }  from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import AddItemButton from '../Shared/addItemButton';
import CustomDatePicker from '../Shared/customDatePicker';



export const ModalActivity=()=>{
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <AddItemButton addActivity={handleShow}></AddItemButton> 
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Etkinlik Ekle</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Baslik</label>
              <input class="form-control" id="exampleFormControlInput1" />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Icerik</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Katilimci sayisi</label>
              <input class="form-control" id="exampleFormControlInput1"/>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Tarih</label><br/>
              <CustomDatePicker></CustomDatePicker>
            </div>            
            <div class="form-group">
              <label for="exampleFormControlSelect1">Kimler Katilabilir?</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Herkes</option>
                <option>Uyeler</option>
              </select>
            </div>
          </form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Kapat
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Kaydet
            </Button>
          </Modal.Footer>
        </Modal>
        </>
    );
}
