import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'

import Multiplytix from 'multiplytix'

class Provider extends PureComponent {
  static childContextTypes = {
    multiplytixEvent: PropTypes.func,
    multiplytixView: PropTypes.func
  }

  getChildContext = () => ({
    multiplytixEvent: this.multiplytixEvent,
    multiplytixView: this.multiplytixView,
  })

  multiplytixEvent = (event, properties) => {
    this.multiplytix.event(event, properties)
  }

  multiplytixView = (pathname) => {
    this.multiplytix.view(pathname)
  }

  componentWillMount() {
    const { config } = this.props
  
    this.multiplytix = new Multiplytix(config)
  }

  render() {
    const { children } = this.props

    return (
      <Fragment>
        { children }
      </Fragment>
    )
  }
}

export default Provider
