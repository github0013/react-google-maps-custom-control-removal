import * as React from "react"
import MapControl from "./MapControl"

export interface MapContainerProps {}

export default class MapContainer extends React.Component<MapContainerProps, any> {
  state = {
    show: true
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        show: !this.state.show
      })
    }, 5000)
  }
  render() {
    return (
      <div>
        {this.state.show ? (
          <MapControl position={google.maps.ControlPosition.TOP_CENTER}>
            <div>That was easy</div>
          </MapControl>
        ) : null}
      </div>
    )
  }
}
