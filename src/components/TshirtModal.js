import react , {Component} from 'react'
import axios from 'axios'
import {Button, Modal,Form, Alert} from 'react-bootstrap'

class TshirtModal extends Component {


  constructor(props) {
    super(props)

    this.state = {showModal:false,
                  Categories:[],
                  TshirtName: '',
                  TshirtCategory:'',
                  TshirtPrice: '',
                  TshirtDescription: '',
                  TshirtId:'',
                  selectedFile: null,
                  selecetedFileName: '',
                  fileValidationErr: '',
                  fileValidationClass: '',
                  }
  }

componentDidMount() {
  axios.get('http://localhost:4000/Categories')
    .then(res => this.setState({Categories: res.data}))
    .catch(err => console.log(err))

    if(this.props.ID) {
      this.setState({
        TshirtName: this.props.Name,
        TshirtCategory: this.props.Category,
        TshirtPrice: this.props.Price,
        TshirtDescription: this.props.Description,
        TshirtPic: this.props.Pic,
        TshirtId: this.props.ID,
        NameValidationClass:'',
        NameValidationErr:''
      })
    }
}

formHandler = (event) => {
  this.setState({[event.target.name]: event.target.value}, () => this.validateForm())
  }

FileCheck = (event) => {
  let file = event.target.files[0]

  if(this.validateSize(event)) {
    this.setState({selectedFile: file, selecetedFileName: file.name},
      () => this.uploadFile())
  }
}

validateSize = (event) => {
  let file = event.target.files[0]
  let maxSize = 300000;
  let err = '';

  if(file) {
    if(file.size > maxSize) {

      this.setState({fileValidationErr: 'File is large', fileValidationClass:'danger'})
      return false
    }
    else {
      this.setState({fileValidationErr: 'file choosen', fileValidationClass:'primary'})
      return true
    }
  }
  else {
    this.setState({fileValidationErr: 'please upload file', fileValidationClass:'danger'})
    return false
  }
}

uploadFile = () => {
  const data = new FormData() // use with file ineasted of setState
  data.append('file',this.state.selectedFile)

  axios.post("http://localhost:4000/UploadPic",data)
  .then((res) => {
                                //path from server side   // first data because backEnd //second data exact pic
    this.setState({TshirtPic:"http://localhost:4000/uploads/"+ res.data.data.name})
    console.log("http://localhost:4000/uploads/"+ res.data.data.name);
    console.log(this.state);
  })

  .catch((err) => this.setState({fileValidationErr: 'couldnt upload server error', fileValidationClass:'danger'}))
}


validateForm = () => {
  let overAllResult = true
  if(this.state.TshirtName.length < 3) {
    this.setState({NameValidationErr: 'Name is short, should be more than 3 letters', NameValidationClass:'danger'})
    overAllResult = false
  }
  else {
    this.setState({NameValidationErr: 'name is good',  NameValidationClass:'primary'})
  }
  return overAllResult
}

submitTshirt = (event) => {
  if(this.validateForm()) {

    if(this.props.ID) {
      axios.put('http://localhost:4000/Tshirt', this.state)
      .then((res) => {
        alert('updated..')
        this.props.getAllTshirts()
        this.setState({showModal:false})
      })
      .catch((err) => {
        console.log();
      })
    }
    else {
    axios.post('http://localhost:4000/Tshirt', this.state)
    .then((res) => {
      console.log(res)
      this.props.getAllTshirts()
      this.setState({showModal:false})
    })
    .catch((err) => console.log(err))
  }
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
              <Form.Control type="text" placeholder="Enter Tshirt name" name="TshirtName" onChange={this.formHandler} value={this.state.TshirtName}/>
              <Alert key='NameValidation' variant={this.state.NameValidationClass}>
                  {this.state.NameValidationErr}
                </Alert>
            </Form.Group>
            <Form.Group>
              <Form.Label>Tshirt Description</Form.Label>
              <Form.Control type="text" placeholder="Enter Tshirt description" name="TshirtDescription" onChange={this.formHandler} value={this.state.TshirtDescription}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>price</Form.Label>
              <Form.Control type="number" min={1} placeholder="Enter Tshirt price" name="TshirtPrice" onChange={this.formHandler} value={this.state.TshirtPrice}/>
            </Form.Group>
            <Form.Group>
            <Form.Label>Tshirt Category</Form.Label>
            <Form.Control as="select" name="TshirtCategory" onChange={this.formHandler} value={this.state.TshirtCategory}>
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
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  render() {
    return(this.ModalBox())
//    console.log(this.state._id);
  }
}

export default TshirtModal
