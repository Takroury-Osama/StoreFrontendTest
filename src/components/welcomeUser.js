//CONDISIONAL rendering

import react, {Component} from 'react'

class WelcomeUser extends Component {

  constructor() {
    super()

    this.state = {isLoggedIn: true}
  }

  render() {
    //Approcah 1
    // if(this.state.isLoggedIn)
    // return(<div>Welcome Issa</div>)
    // else
    // return(<div>Welcome, please logIn</div>)

    //Approach 2
    let message
    if(this.state.isLoggedIn) //add ! to change
    message = "Welcome osama"
    else message = " welcome, please log in"

    return <div> {message} </div>
  }
}

export default WelcomeUser
