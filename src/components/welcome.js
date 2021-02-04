//class method
import react, {Component} from 'react'

class Welcome extends Component {
  render() {

    return <h1>Hello, {this.props.name} from welcome page, Class Component <br /> {this.props.children} </h1>;
  //  return <h2> Hello from welcomePage </h2>
  }
}

export default Welcome


//class method
// import react {Component} from 'react'
//
// class Welcome extends Component {
//   render() {
//     return <h3> hello from h2 </h3>
//   }
// }
