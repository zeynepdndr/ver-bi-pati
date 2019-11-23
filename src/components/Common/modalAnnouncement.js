import React, { Component }  from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import AddItemButton from '../Shared/addItemButton';
import CustomDatePicker from '../Shared/customDatePicker';
import ImageUpload from '../Shared/imageUpload';



export const ModalAnnouncement=()=>{
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <AddItemButton addActivity={handleShow}></AddItemButton> 
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Ilan Ekle</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
            <div class="form-group">
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"/>
                <label class="custom-control-label" for="customRadioInline1">Kedi</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"/>
                <label class="custom-control-label" for="customRadioInline2">Kopek</label>
              </div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Bilgi</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="form-group">
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline3" name="customRadioInline3" class="custom-control-input"/>
                <label class="custom-control-label" for="customRadioInline3">Kayip</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline4" name="customRadioInline4" class="custom-control-input"/>
                <label class="custom-control-label" for="customRadioInline4">Sahiplendirme</label>
              </div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Tarih</label><br/>
              <CustomDatePicker></CustomDatePicker>
            </div>            
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Fotograf Yukle</label><br/>
              <ImageUpload></ImageUpload>
            </div>         
            <div class="form-group">
              <label for="exampleFormControlSelect1">Bildirim Gonder</label>
              <select class="form-control" id="exampleFormControlSelect1">
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
