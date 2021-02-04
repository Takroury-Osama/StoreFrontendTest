import react, {Component} from 'react'

class LifeCycleTest extends Component {
  constructor(props) {
    super(props)
    this.state= {Name: 'Osama'}

    console.log("I'm in constructor now..");
  }

  static getDerivedStateFromProps(porps, state) {
    console.log("Im in getDerivedStateFromProps...");
    return null
  }

  componentDidMount() {
    console.log("im in ComponentDidMount...");
  }

  //update
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('im in getSnapshotBeforeUpdate...');
    return null;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate....');
  }
changeState = () => {
  this.setState({Name: 'osama new '})
}
  render() {

    console.log('im in render...')

    return (
      <div>
        <button onClick={this.changeState}> click me</button>
      </div>
    )
  }
}



export default LifeCycleTest
