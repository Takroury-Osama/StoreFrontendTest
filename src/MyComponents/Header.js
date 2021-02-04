import react, {useContext} from 'react'
import {UserContext, AuthContext} from '../App'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap'



const Header = (props) => {

  const Name = useContext(UserContext)
  const Auth = useContext(AuthContext)


  //<UserContext.Consumer>
  //{ user => {return <span} {user} </span>}
  //</UserContext.Consumer>

  return (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">{Name}{Auth.Email}</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/TshirtsPage">Tshirts</Nav.Link>
      <Nav.Link as={Link} to="/tshirts">Tshirts Admin</Nav.Link>
    </Nav>
  <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button variant="outline-info">Search</Button>
  </Form>
</Navbar>
  )
}

export default Header
