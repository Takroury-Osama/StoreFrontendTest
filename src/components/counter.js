import react, {Component} from 'react'

class Counter extends Component {

  constructor() {
    super()

    this.state = {count:0}
  }

  AddOneCounter() {
    let counter =this.state.count+1

    //*******This setState always in the end of code always always**********/

    // use callback function if you want to add after setState otherWise use it in the end
    this.setState({count:counter},
       () => console.log(this.state.count))

  }
// state update another state must be arrowfun // send arrow function prev
AddOneUsingPrev() {
  this.setState(
    (PrevState)=> {
      return {count: PrevState.count+1}
    })
  //  console.log(this.state.count);
}

  AddFive() {
      // this.AddOneCounter()
      // this.AddOneCounter()
      // this.AddOneCounter()
      // this.AddOneCounter()
      // this.AddOneCounter()

      this.AddOneUsingPrev()
      this.AddOneUsingPrev()
      this.AddOneUsingPrev()
      this.AddOneUsingPrev()
      this.AddOneUsingPrev()
  }


  render() {
    return (
      <div>
        counter {this.state.count} <br />
        <button onClick={()=>this.AddOneCounter()}> counter </button>
        <button onClick={()=>this.AddFive()}> counter </button>
      </div>
    )
  }
}

export default Counter
