import react, {Component} from 'react'
import ChildFragments from './childFragments'

//delete div when browser add it
class Fragments extends Component {

  render() {
    return(
      <react.Fragment>
          <ChildFragments />
      </react.Fragment>
    )
  }
}

export default Fragments
