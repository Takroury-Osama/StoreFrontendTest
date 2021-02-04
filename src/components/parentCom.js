import react, {Component} from 'react'
import ChildCom from './childCom'



class ParentCom extends Component {

  constructor(props) {
    super(props)

    this.state= {
      parentName: 'Parent'
    }
    this.SayHiToParent = this.SayHiToParent.bind(this)
  }

  SayHiToParent() {
    alert('Hello from ' + this.state.parentName)
  }

//no need for bind if you dont use this
  SayHiToSomeone(Somename) {
    alert('Hello from ' + Somename)
  }

  render() {
    return (
      <div>
        Parent <br />
        <ChildCom name="osama" SayHiToParent={this.SayHiToParent} SayHiToSomeone={this.SayHiToSomeone} />
      </div>
    )
  }
}

export default ParentCom
