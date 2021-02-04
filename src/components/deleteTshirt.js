import react , {Component} from 'react'
import axios from 'axios'
import {Button, Modal,Form, Alert} from 'react-bootstrap'

class TshirtModal extends Component {


  constructor(props) {
    super(props)

    this.state = { tshirtId:''}
  }

componentDidMount() {
  axios.get('http://localhost:4000/Categories')
    .then(res => this.setState({Categories: res.data}))
    .catch(err => console.log(err))
}


validateForm = () => {
  return true
}

 deleteTshirt = (event) => {
  if(validateForm) {
    axios.delete('http://localhost:4000/Tshirt/delete/:4')
    .then((res) => {
      console.log(res)
    })
    .catch((err) => console.log(err))
  }
}


ModalBox() {

    const handleClose = () => this.setState({showModal:false})
    const handleShow = () => this.setState({showModal:true})

    return (
      <>
        <Button className="m-3 ml-5" variant="primary" onClick={handleShow}>
          {this.props.ButtonName}
        </Button>

        <Modal show={this.state.showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Tshirt Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit="submitTshirt">
            <Form.Group>
              <Form.Label>Tshirt Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Tshirt name" name="TshirtName" onChange={this.formHandler}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Tshirt Description</Form.Label>
              <Form.Control type="text" placeholder="Enter Tshirt description" name="TshirtDescription" onChange={this.formHandler}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>price</Form.Label>
              <Form.Control type="number" min={1} placeholder="Enter Tshirt price" name="TshirtPrice" onChange={this.formHandler}/>
            </Form.Group>
            <Form.Group>
            <Form.Label>Tshirt Category</Form.Label>
            <Form.Control as="select" name="TshirtCategory" onChange={this.formHandler}>
              <option>select one</option>
              {
                this.state.Categories.length?
                this.state.Categories.map(category =>
                <option value={category._id}>{category.name}</option>): null
              }
            </Form.Control>
          </Form.Group>

          <Form.Group>
          <Form.Label>Tshirt Image</Form.Label>
          <Form.File
            id="custom-file"
              label="Custom file input"
              onChange={this.FileCheck}
                custom/>
                <Alert key='FileValidation' variant={this.state.fileValidationClass}>
                    {this.state.fileValidationErr}
                  </Alert>
              </Form.Group>
          </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.submitTshirt}>
              Send
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  render() {
    return(this.ModalBox())
  }
}

export default TshirtModal
