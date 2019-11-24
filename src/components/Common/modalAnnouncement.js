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
            <div className="form-group">
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input"/>
                <label className="custom-control-label" htmlFor="customRadioInline1">Kedi</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input"/>
                <label className="custom-control-label" htmlFor="customRadioInline2">Kopek</label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Bilgi</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="form-group">
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline3" name="customRadioInline3" className="custom-control-input"/>
                <label className="custom-control-label" htmlFor="customRadioInline3">Kayip</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline4" name="customRadioInline4" className="custom-control-input"/>
                <label className="custom-control-label" htmlFor="customRadioInline4">Sahiplendirme</label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Tarih</label><br/>
              <CustomDatePicker></CustomDatePicker>
            </div>            
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Fotograf Yukle</label><br/>
              <ImageUpload></ImageUpload>
            </div>         
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Bildirim Gonder</label>
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
