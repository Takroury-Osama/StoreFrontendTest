import react, {Component} from 'react'
class RefTest extends Component {

  constructor(props) {
    super(props)
    this.inputRef = react.createRef()
    this.dropDownRef = react.createRef()

  }

//to edit after render
//to see the value after render must use it here
//if in render it will not see it
//GET POST HERE http request <<<<here>>>
  componentDidMount() {
  //  this.inputRef.current.focus()
    console.log(this.inputRef.current);
  }

   showData = () => {
    alert(this.inputRef.current.value)
    alert(this.dropDownRef.current.value)
   }

  render() {
    return(
      <div>
        <input type='text' ref={this.inputRef}/>

        <select name="cars" ref={this.dropDownRef}>
          <option value="">Choose One</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>

        <button onClick={this.showData}>Show value</button>
      </div>
    )
  }
}

export default RefTest
