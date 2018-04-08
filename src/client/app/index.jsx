import React from 'react'
import { render } from 'react-dom'

import Awesome from './Awesome.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello World, This is React with Webpack and Babel</p>
        <Awesome />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
