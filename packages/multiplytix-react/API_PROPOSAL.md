# React Context API proposal

```jsx
import React, { Component } from 'react'

import Multiplytix, { Provider, Consumer } from 'multiplytix'

const config = {
  google: process.env.REACT_APP_GOOGLE_ID,
  mixpanel: process.env.REACT_APP_MIXPANEL_ID,
}

class App extends Component {
  render () {
    return (
      <Provider config={ config }>
        { /* Your other container & child components */ }
      </Provider>
    )
  }
}

class Somewhere extends Component {
  handleClick(e, multiplytixEvent) {
    e.preventDefault()
    multiplytixEvent(
      'ButtonClicked',
      {
        context: 'somewhere',
        metadata: 42,
      }
    )
    window.open('https://example.com')
  }
  render() {
    return (
      <Consumer> {({ multiplytixEvent }) => (
        <button onClick={ (e) => this.handleClick(e, multiplytixEvent) } />
      )} </Consumer>
    )
  }
}
```