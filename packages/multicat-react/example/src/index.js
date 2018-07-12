import React from 'react'
import ReactDOM from 'react-dom'

import { Provider as MulticatProvider } from 'multicat-react'
import multicatConfig from './multicat.config.js'

import App from './App'

ReactDOM.render(
  <MulticatProvider config={ multicatConfig }>
    <App />
  </MulticatProvider>,
  document.getElementById('root')
)
