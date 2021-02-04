import react from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap'

const Footer = (props) => {
  return (
  <div className="">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <h4> Footer test </h4>
          <ul className="list-styled">
          <li> test1 </li>
          <li> test1 </li>
          <li> test1 </li>
          <li> test1 </li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6">
          <h4> Footer test </h4>
          <ul className="list-styled">
          <li> test1 </li>
          <li> test1 </li>
          <li> test1 </li>
          <li> test1 </li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6">
          <h4> Footer test </h4>
          <ul className="list-styled">
          <li> test1 </li>
          <li> test1 </li>
          <li> test1 </li>
          <li> test1 </li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6">
          <h4> Footer test </h4>
          <ul className="list-styled">
          <li> test1 </li>
          <li> test1 </li>
          <li> test1 </li>
          <li> test1 </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer
