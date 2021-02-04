
import react, {Component} from 'react'

class EventBind extends Component {

  constructor() {
    super() //because extends

    this.state = {name: 'Osama'}

    this.ChangeName = this.ChangeName.bind(this) // for step Button3 JUST

  }
ChangeName() {
  this.setState({name: "new Osama"})
}

  render() {
    return (
      <div>
        {this.state.name} <br/>
        <button onClick= {this.ChangeName.bind(this)}> ChangeName1 </button>
        <button onClick= {() => this.ChangeName()}> ChangeName2 </button>
        <button onClick= {this.ChangeName}> ChangeName3 </button>
     </div>
   )
  }
}

export default EventBind

//_______method 1
//  <button onClick={()=>this.ChangeMessage()}> I will leave </button> >>> Inside onClick "JSX"
//
