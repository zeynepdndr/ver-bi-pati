import React, { Component }  from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


const ModalConfirm=(props)=>{

  const myValueFromProp = props;

  const [confirmation, setConfirmation] = React.useState(myValueFromProp.open);
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  React.useEffect(() => {
     setShow(props.open);
  }, [props])

  React.useEffect(() => {
  sendData();
    }, [confirmation]); // Only re-run the effect if open changes

  const handleGiveup = () => {
    setConfirmation(false);
    setShow(false);
  }
  const handleDelete = () => {
    setConfirmation(true);
    setShow(false);
  }

  const sendData = () =>
  {
    if(confirmation===true )
    {
      setConfirmation(false);
      props.callbackconfirm()     
    }
  }
    return (
        <Modal id="modalSure" show={show} onHide={handleGiveup} animation={false}>
          <Modal.Header closeButton>
          </Modal.Header>
          <div className="think-in-react">
          <Modal.Body>

            <div className="modal-body">
              <p> Seçilen etkinlik silinecektir. Onaylıyor musunuz?
              </p>
            </div>

          </Modal.Body>
            </div>
              <div className="notch"></div>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleGiveup} >
              Vazgeç
          </Button>
          <Button variant="primary" onClick={handleDelete}>
              Sil
          </Button>
          </Modal.Footer>
        </Modal>
    );
}

export default ModalConfirm;