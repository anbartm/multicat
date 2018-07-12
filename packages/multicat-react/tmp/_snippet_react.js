import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Test extends PureComponent {
  static childContextTypes = {
    identifyUser: PropTypes.func,
    analyticsSuperProperties: PropTypes.func,
    analyticsEvent: PropTypes.func,
    startTimingEvent: PropTypes.func,
    pageViewEvent: PropTypes.func,
  }

  getChildContext = () => ({
    identifyUser: this.identifyUser,
    analyticsSuperProperties: this.analyticsSuperProperties,
    analyticsEvent: this.analyticsEvent,
    startTimingEvent: this.startTimingEvent,
    pageViewEvent: this.pageViewEvent,
  })
}


export const connectAnalytics = WrappedComponent => {
  return class ConnectedComponent extends PureComponent {
    static contextTypes = {
      pageViewEvent: PropTypes.func,
      analyticsEvent: PropTypes.func
    }

    static displayName = `Analytics(${WrappedComponent.name})`

    render() {
      const { children, ...rest } = this.props

      const { pageViewEvent, analyticsEvent } = this.context
      const analyticsEvents = { pageViewEvent, analyticsEvent }

      return (
        <WrappedComponent {...rest} {...analyticsEvents}>
          {children}
        </WrappedComponent>
      )
    }
  }
}
