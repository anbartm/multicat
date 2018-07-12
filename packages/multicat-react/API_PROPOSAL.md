# React Context API proposal

```jsx
import React, { Component } from 'react'

import Multicat, { Provider, Consumer } from 'multicat'

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
  handleClick(e, multicatEvent) {
    e.preventDefault()
    multicatEvent(
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
      <Consumer> {({ multicatEvent }) => (
        <button onClick={ (e) => this.handleClick(e, multicatEvent) } />
      )} </Consumer>
    )
  }
}
```