import React from 'react'
import { Button, Modal, Spinner } from "react-bootstrap";
import ImageLazy from '../imageLazy/imageLazy';

function MyVerticallyCenteredModal(props) {  
  return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title? props.title : 'Modal heading'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.img? (<ImageLazy className="img-fluid" src={props.img} alt="..." />) : null}
          {props.text? (<p>props.text</p>):null}
          {props.html? (<div>props.html</div>):null}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function ModalWindow(props) {
    const [modalShow, setModalShow] = React.useState(false);
    
      return (
        <>
        {(props.children)?
          <div onClick={() =>{ 
            setModalShow(true)
          } }>
            {props.children}
          </div>
        :
          <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
          </Button>
        }
        <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            title = {props.title}
            img = {props.img}
          />
        </>
      )
  }
  
  export default ModalWindow