// import Start from './components/start'
// import Welcome from './components/welcome'
// import Message from './components/message'
// import Counter from './components/counter'
// import EventBind from './components/eventBind'
// import ParentCom from './components/parentCom'
// import WelcomeUser from './components/welcomeUser'
// import Students from './components/students'
// import MyForm from './components/myForm'
// import LifeCycleTest from './components/lifeCycleTest'
// import Fragments from './components/fragments'
// import RefTest from './components/refTest'
import React from 'react'
import TshirtsAdmin from './components/TshirtsAdmin'
import Header from './MyComponents/Header'
import Footer from './MyComponents/Footer'
import TshirtsPage from './MyComponents/TshirtsPage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const UserContext = React.createContext()
export const AuthContext = React.createContext()


let Auth = {
  Email: "osama@gg.gg.com",
  Token: "fsdlkfsldkfsdlfkdsf",
  IsAdmin: true
}

function App() {
  return (
      <div className="container">

      <UserContext.Provider value='OsamaTak'>
      <AuthContext.Provider value={Auth} > //type Object

        <Router>
          <Header></Header>
          <br/><br/>
          <Switch> //conditional render
            <Route exact path='/'>This is home.</Route> //use last one // or use "exact" if it first
            <Route path='/tshirts'><TshirtsPage /></Route>
            <Route path='/tshirtAdmin'><TshirtsAdmin /></Route>
          </Switch>
          <Footer></Footer>
        </Router>
        </AuthContext.Provider>
        </UserContext.Provider>
      </div>
    );
}
export default App;


{/*    <div>
      <Start name="Osama" country="jordan">fsdlkldsf</Start>
      <Start name="bel" country="jordan">dsadasd</Start>
    </div>
  );*/}

{/*  <Start children="and and and" name='bel' />


  <Welcome name="Saddam" />
    Hello from osama App.js*/ }


/*  <div>
    <EventBind />
  </div>
);*/



/*  <div>
    <Start name='osama' country= 'Jordan' children="and and and"/>
    <Start children="and and and" name='bel' />


    <Welcome name="Saddam" />
      Hello from osama App.js
  </div>
);*/


//_________

/*  <div>
    <Message />
  </div>
);*/
