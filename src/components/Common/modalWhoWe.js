import React, { Component }  from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import './modalWhoWe.css';


const ModalWhoWeBase=(props)=>{
  
    return (
        <Modal  show={props.showInfo} onHide={props.closeInfo} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Etkinlik Eklhe</Modal.Title>
          </Modal.Header>
          <div className="think-in-react">
            <img src="https://daveceddia.com/images/pure-react-plant-sm.png" srcset="https://daveceddia.com/images/pure-react-plant-sm@2x.png 2x" alt="Pure React plant"/>
            <div className="think-in-react--cta">
          <Modal.Body>

            <div className="modal-body">
              <p>Biz kimiz?
              Ver Bi Pati kampüs hayvanlarının maddi ve manevi ihtiyaçlarını karşılayan, hayvan haklarıyla 
              ilgilenen, insanlar ve hayvanlar arasındaki ilişkiyi guclendirmeye yönelik çeşitli etkinlik 
              ve çalışmalar yapan bir kulüp olarak gönüllülük kulübünün altında aktif olarak çalışmalarına 
              devam eden bir kulüptür. Beslenme, arama/kurtarma, bağış, etkinlik, sosyal medya/tanıtım, 
              tasarım olmak üzere farklı amaçlarda uzmanlaşmış 6 takımdan oluşmaktadır.</p>
            </div>

          </Modal.Body>
            </div>
                <div className="notch"></div>
              </div>
          <Modal.Footer>
          <Button variant="secondary" onClick={props.closeInfo}>
              Kapat
            </Button>
          </Modal.Footer>
        </Modal>
    );
}

export default ModalWhoWeBase;