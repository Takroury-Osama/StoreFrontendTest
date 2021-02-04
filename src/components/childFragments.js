import react, {Component} from 'react'

class ChildFragments extends Component {
  render() {
    return (
      <table>
        <tbody>
        <tr>
          <td>country1</td>
            <td>country2</td>
        </tr>
        <tr>
          <td>country3</td>
          <td>country4</td>
        </tr>
        </tbody>
      </table>
    );
  }
}

export default ChildFragments
