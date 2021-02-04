
import react, {Component} from 'react'

class Message extends Component {

  constructor() {
    super() //because extends

    this.state = {message: 'Welcome to My website'} //, ButtonText: "I will leave"
  }

  ChangeMessage() {
    this.setState({message:"See you Soon"}) //, ButtonText: "I left"
    console.log(this.state.message);
  }

  ExitMessage() {
    this.setState({message:"GoodBye..."})
    console.log(this.state.message);
  }

  render() {
    return (
      <div>
      {this.state.message}  <br/>
      <button onClick={()=>this.ChangeMessage()}> I will leave </button> &nbsp;&nbsp;  {/*{this.state.ButtonText}*/}
        <button onClick={()=>this.ExitMessage()}> I am Exit </button>


     </div>
   )
  }
}

export default Message

//_______method 1
//  <button onClick={()=>this.ChangeMessage()}> I will leave </button> >>> Inside onClick "JSX"
//
