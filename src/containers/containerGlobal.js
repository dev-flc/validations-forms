import React from "react"
import PropTypes from "prop-types"

const ContainerGlobal = React.memo((props) => <div> {props.children} </div>)

ContainerGlobal.propTypes = {
  children: PropTypes.any,
}

ContainerGlobal.displayName = "ContainerGlobal"

export { ContainerGlobal }
