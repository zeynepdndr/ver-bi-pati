import React, { Component }  from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import AddItemButton from '../Shared/addItemButton';
import CustomDatePicker from '../Shared/customDatePicker';
import ImageUpload from '../Shared/imageUpload';



export const ModalGallery=()=>{
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <AddItemButton addActivity={handleShow}></AddItemButton> 
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Fotograf Ekle</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
            <div className="form-group">
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input"/>
                <label className="custom-control-label" for="customRadioInline1">Hayvanlarimiz</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input"/>
                <label className="custom-control-label" for="customRadioInline2">Faaliyetlerimiz</label>
              </div>
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Bilgi</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Tarih</label><br/>
              <CustomDatePicker></CustomDatePicker>
            </div>            
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Fotograf Yukle</label><br/>
              <ImageUpload></ImageUpload>
            </div>         
            <div className="form-group">
              <label for="exampleFormControlSelect1">Bildirim Gonder</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>Gonderme</option>
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
