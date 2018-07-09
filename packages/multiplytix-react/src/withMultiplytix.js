import React from "react"
import PropTypes from "prop-types"
import hoistStatics from "hoist-non-react-statics"

const withMultiplytix = Component => {
  const C = (props, state, context) => {
    const { wrappedComponentRef, ...remainingProps } = props
    const { multiplytixEvent, multiplytixView } = context
    return (
      <Component
        {...remainingProps}
        ref={wrappedComponentRef}
        multiplytixEvent={ multiplytixEvent }
        multiplytixView={ multiplytixView }
      />
    )
  }

  C.displayName = `withMultiplytix(${Component.displayName || Component.name})`
  C.WrappedComponent = Component
  C.propTypes = {
    wrappedComponentRef: PropTypes.func
  }
  C.contextTypes = {
    multiplytixEvent: PropTypes.func,
    multiplytixView: PropTypes.func
  }

  return hoistStatics(C, Component)
}

export default withMultiplytix
