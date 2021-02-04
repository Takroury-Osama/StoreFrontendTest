import react , {useState} from 'react'
import axios from 'axios'
import TshirtModal from './TshirtModal';

import {Card , Button, Col, Modal, Alert} from 'react-bootstrap'


//ID in server side

 function DeleteModal(props) {
   const [show, setShow] = useState(false)

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Tshirt</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => deleteTshirt(props)}>
            Delete Tshirt
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function deleteTshirt(props) {
  console.log(props.ID);
   axios.delete('http://localhost:4000/Tshirt/delete/'+props.ID)
       .then((res) => {
         props.getAllTshirts()
         console.log(res);
       })
       .catch((err) => {
         console.log(err);
       })
}


  const Tshirt = (props) => {
    return(
    <Col xs={12} md={6} lg={3}>
      <Card style={{ width: '18rem' }} className="mt-2">
        <Card.Img variant="top" src={props.Pic} />
        <Card.Body>
          <Card.Title>{props.Name}</Card.Title>
          <Card.Text>
            {props.Description}
            <br /> <br />
            <b>Price</b> {props.Price}
            <br /> <br />
          </Card.Text>
          {DeleteModal(props)} &nbsp;
          <TshirtModal ButtonName="Modify Tshirt" getAllTshirts={props.getAllTshirts} ID= {props.ID} Name={props.Name} Description={props.Description}
          Pic={props.Pic} Price={props.Price} Category={props.Category}/>
        </Card.Body>
      </Card>
    </Col>
    )
  }

export default Tshirt;
