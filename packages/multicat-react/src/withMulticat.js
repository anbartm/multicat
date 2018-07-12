import React from "react"
import PropTypes from "prop-types"
import hoistStatics from "hoist-non-react-statics"

const withMulticat = Component => {
  const C = (props, context) => {
    const { wrappedComponentRef, ...remainingProps } = props
    const { multicatEvent, multicatView } = context
    return (
      <Component
        {...remainingProps}
        ref={wrappedComponentRef}
        multicatEvent={ multicatEvent }
        multicatView={ multicatView }
      />
    )
  }

  C.displayName = `withMulticat(${Component.displayName || Component.name})`
  C.WrappedComponent = Component
  C.propTypes = {
    wrappedComponentRef: PropTypes.func
  }
  C.contextTypes = {
    multicatEvent: PropTypes.func,
    multicatView: PropTypes.func
  }

  return hoistStatics(C, Component)
}

export default withMulticat
