import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'

import Multicat from 'multicat'

class Provider extends PureComponent {
  static childContextTypes = {
    multicatEvent: PropTypes.func,
    multicatView: PropTypes.func
  }

  getChildContext = () => ({
    multicatEvent: this.multicatEvent,
    multicatView: this.multicatView,
  })

  multicatEvent = (event, properties) => {
    this.multicat.event(event, properties)
  }

  multicatView = (pathname) => {
    this.multicat.view(pathname)
  }

  componentWillMount() {
    const { config } = this.props
  
    this.multicat = new Multicat(config)
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
