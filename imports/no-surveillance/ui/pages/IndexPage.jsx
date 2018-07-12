import React, { Component } from 'react';
import ReactMapboxGl, {
	ScaleControl,
	ZoomControl,
	Layer,
	Feature
} from "react-mapbox-gl";

import { mapboxAccessToken, style } from '../../common/mapbox.js';

const maxBounds = [
  [29.557358, -90.502521], // South West
  [30.475925, -89.374362], // North East
];

const mapHeight = "85vh";
const mapWidth = "100%";

export default class MapPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      center: [29.951112, -90.082100],
      zoom: [5],
      skip: 0,
      popupShowLabel: true,
    }
  }

	_onZoomClick(map, zoomDiff) {
		const zoom = map.getZoom() + zoomDiff;
		this.setState({ zoom: [zoom] });
	}

  render() {
    return (
      <div id="no-surveillance-map" className="container-fluid pl-0 mb-2">
				<div className="row">
					<div className="col-md-8 col-xs-12 pl-0">

						<ReactMapboxGl
							style={style}
							center={this.state.center}
							zoom={this.state.zoom}
							minZoom={1}
							maxZoom={15}
							maxBounds={maxBounds}
							accessToken={mapboxAccessToken}
							containerStyle={{height: mapHeight, width: mapWidth}} >

							<ZoomControl
								zoomDiff={1}
								onControlClick={this._onZoomClick.bind(this)} />

							<ScaleControl position="bottomLeft" />
						</ReactMapboxGl>
					</div>

				</div>

      </div>
    )
  }
}
