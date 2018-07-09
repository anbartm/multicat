# Multiplytix React

[![NPM](https://img.shields.io/npm/v/multiplytix-react.svg)](https://www.npmjs.com/package/multiplytix-react)

# 🚧 WIP 🏗 UNDER CONSTRUCTION 🚧

> React context provider for [Multiplytix](https://github.com/cofablab/multiplytix), the unified analytics API.

- Mixpanel
- Google Analytics
- Google Remarketing Tag
- Facebook pixel
- Reddit pixel
- Twitter pixel
- Hotjar


## Install

```bash
npm install --save multiplytix multiplytix-react
```

or

```bash
yarn add multiplytix multiplytix-react
```

## Usage

Wrap your App in a `Provider`, and receive `multiplytixEvent` or `multiplytixView` as props with the help of `withMultiplytix` wrapper, or receive them from the context through `contextTypes`. Check the [example project](https://github.com/cofablab/multiplytix-react/tree/master/example) in this repository.

### Upcoming API changes ❓📦🤷‍♀️

We're exploring how to implement the context provider [with the new API](https://reactjs.org/docs/context.html):

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

State your preferences in the [issues section](https://github.com/cofablab/multiplytix-react/issues) please.

## License

MIT © [Cofab](https://github.com/cofablab)
