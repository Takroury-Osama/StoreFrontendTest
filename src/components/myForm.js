import react , {Component} from 'react'

class MyForm extends Component {
  constructor() {
      super()
      this.state = {Name: '', Nationality:''}
  }

  changeName = (event) => {
    this.setState({Name: event.target.value})
  }

  ChangeNationality = (event) => {
    this.setState({Nationality: event.target.value});
  }

  submitForm = (event) => {
    alert(this.state.Name)
    alert(this.state.Nationality)

    event.preventDefault() // sumbit do "clear" >> this make it not clear data

  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <label>Whats Your name </label> <br />
        <input type="text" value={this.state.name} onChange={this.changeName} /> <br />

      <label>Nationality</label> <br />
        <select value={this.state.value} onChange={this.ChangeNationality}>
          <option value="">Select One</option>
          <option value="JO">Jordan</option>
          <option value="SA">SA</option>
          <option value="UK">UK</option>
          <option value="USA">USA</option>
        </select> <hr />

        <button type="submit"> Submit Form </button>
      </form>
    )
  }
}

export default MyForm
