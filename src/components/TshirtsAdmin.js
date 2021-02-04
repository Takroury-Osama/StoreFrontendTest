import react, {Component} from 'react'
import axios from 'axios';
import Tshirt from './Tshirt';
import TshirtModal from './TshirtModal';

import {Card , Button, Row, Alert} from 'react-bootstrap'


class TshirtsAdmin extends Component {

  constructor(props) {
    super(props)

    this.state = {
      Tshirts: [],
      ErrorMsg: '',
    }
  }

  render() {
    const { Tshirts, ErrorMsg } = this.state
    return(
      <div>
      <TshirtModal ButtonName='Add new Tshirt' getAllTshirts={this.getAllTshirts}/>
        <Row className="justify-content-center">
        {
            Tshirts.length? Tshirts.map(tshirt => <Tshirt key={tshirt._id} ID= {tshirt._id} Name={tshirt.name} Description={tshirt.description}
            Pic={tshirt.pic} Price={tshirt.price} Category={tshirt.categoryId} getAllTshirts={this.getAllTshirts}/>) : <span> Nothing to show </span>
        }
        </Row>
        {
          ErrorMsg? <Alert variant="danger">ErrorMsg</Alert>: <span></span>
        }
      </div>
    )
  }

  componentDidMount() {
    this.getAllTshirts()
  }

  getAllTshirts = () => {
    axios.get('http://localhost:4000/Tshirts')
    .then(res => {
      console.log(res);
      this.setState({Tshirts: res.data})
      //console.log(res.ID);

    })
    .catch(err => {
      console.log(err);
      this.setState({ErrorMsg:"couldnt get data"})
    })
  }
}

export default TshirtsAdmin;
