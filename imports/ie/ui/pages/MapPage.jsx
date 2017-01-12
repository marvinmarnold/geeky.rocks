import React, { Component } from 'react';
import ReactMapboxGl, {
	ScaleControl,
	ZoomControl
} from "react-mapbox-gl";

import { mapboxAccessToken, style } from '../../common/mapbox.js';
import MapboxGLDraw from '../components/widgets/MapboxGLDraw.jsx';
import MapControlPanel from '../components/widgets/MapControlPanel.jsx';
import MapControlPanelUI from '../components/widgets/MapControlPanelUI.jsx';
import PolygonCreateModalContainer from '../containers/PolygonCreateModalContainer.jsx';
import PolygonsListContainer from '../containers/PolygonsListContainer.jsx';

import { DRAWING_STATES } from '../../lib/drawing-states.js';
import { MAPBOX_EVENTS, MAPBOX_MODES } from '../../lib/mapbox-events.js';

const maxBounds = [
  [-131.109225, 6.866320], // South West
  [-73.887292, 36.041600], // North East
];

const mapHeight = "85vh";
const mapWidth = "100%";

export default class MapPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      center: [-99.138173, 19.416424],
      zoom: [3],
      skip: 0,
      popupShowLabel: true,
			drawingState: DRAWING_STATES.EMPTY,
			currentPolygon: null,
			currentPolygonId: null
    }
  }

  _onZoomClick(map, zoomDiff) {
    const zoom = map.getZoom() + zoomDiff;
    this.setState({ zoom: [zoom] });
  }

	_setCurrentPolygon(currentPolygon) {
		this.setState({ currentPolygon, currentPolygonId: null });
	}

	_consumeMapboxEvent(mapboxEvent) {
		console.log('_consumeMapboxEvent');
		console.log(mapboxEvent);
		let newState = null;

		switch(mapboxEvent) {
			case MAPBOX_EVENTS.DRAW.CREATE:
				newState = DRAWING_STATES.DRAWING
				break;
			case MAPBOX_MODES.DRAW_POLYGON:
				newState = DRAWING_STATES.DRAFTING;
				break;
			case MAPBOX_EVENTS.DRAW.SAVED:
				newState = DRAWING_STATES.VIEWING
				break;
		}

		if(newState)
			this.setState({ drawingState: newState })
	}

  render() {
    return (
      <div id="ie-map" className="container-fluid pl-0">
        <div className="col-lg-9 col-md-8 col-xs-12 pl-0">

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

						<MapboxGLDraw
							setCurrentPolygon={this._setCurrentPolygon.bind(this)}
							drawingState={this.state.drawingState} />

						<ScaleControl position="bottomLeft" />
						<MapControlPanel consumeMapboxEvent={this._consumeMapboxEvent.bind(this)} />
          </ReactMapboxGl>

					<MapControlPanelUI drawingState={this.state.drawingState} />
					<PolygonCreateModalContainer
						currentPolygon={this.state.currentPolygon}
						consumeMapboxEvent={this._consumeMapboxEvent.bind(this)} />
        </div>

				<div className="col-lg-3 col-md-4">

					<PolygonsListContainer currentPolygonId={this.state.currentPolygonId} />
				</div>
      </div>
    )
  }
}
