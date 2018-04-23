import * as React from "react"
import * as ReactDOM from "react-dom"
import { MAP } from "react-google-maps/lib/constants"
import * as PropTypes from "prop-types"

export interface ControlProps {
  position: google.maps.ControlPosition
}

export default class MapControl extends React.Component<ControlProps> {
  static contextTypes = { [MAP]: PropTypes.object }

  map = null
  controlDiv = null
  divIndex = null

  componentWillMount() {
    this.map = this.context[MAP]
    this.controlDiv = document.createElement("div")
    this.divIndex = this.map.controls[this.props.position].push(this.controlDiv) - 1
  }
  componentWillUnmount() {
    this.map.controls[this.props.position].removeAt(this.divIndex)
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.controlDiv)
  }
}

//==============================================
// non-portal version
//==============================================
// export default class MapControl extends React.Component<ControlProps> {
//   static contextTypes = { [MAP]: PropTypes.object }

//   map = null
//   divIndex = null
//   controlDiv = null

//   componentDidMount() {
//     this.map = this.context[MAP]
//     this.divIndex = this.map.controls[this.props.position].push(this.controlDiv)
//   }
//   componentWillUnmount() {
//     debugger
//     this.map.controls[this.props.position].removeAt(this.divIndex)
//   }

//   render() {
//     return <div ref={div => (this.controlDiv = div)}>{this.props.children}</div>
//   }
// }
