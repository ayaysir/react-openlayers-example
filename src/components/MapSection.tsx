// import React, { useLayoutEffect } from 'react'

// import styled from 'styled-components';


// import { Map, View } from 'ol';
// import TileLayer from 'ol/layer/Tile';
// import OSM from 'ol/source/OSM';

// import { Circle } from 'ol/geom.js';
// import Feature  from 'ol/Feature.js';
// import { Style,Stroke,Fill, Text } from 'ol/style.js';
// import Vector  from 'ol/source/Vector.js';
// import VectorLayer  from 'ol/layer/Vector.js';
// import Point from 'ol/geom/Point';


// const StyledMapSection = styled.section`
//   width: 100%;
//   height: 954px;
// `

// const initMap = () => {
//   return new Map({
//     target: 'map-section',
//     layers: [
//       new TileLayer({
//         source: new OSM()
//       })
//     ],
//     view: new View({
//       projection: 'EPSG:4326',
//       center: [126.9779451, 37.5662952],
//       zoom: 16
//     })
//   });
// }

// // projection: api 좌표에 있는대로
// // center: [경도, 위도] => 
// // 북위(=) 33 ~ 43, 동경(||) 124 ~ 132
// // 일반적으로 좌표계는 위도-경도로 표기하나 openlayers에서는 반대 순서로 기입
// const MapSection: React.FC = () => {
//   useLayoutEffect(() => {
//     initMap()

//   }, [])

//   return (
//     <StyledMapSection id="map-section" />
//   )
// }

// export default MapSection;

import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import OSM from 'ol/source/OSM';
import XYZ from 'ol/source/XYZ'
import {transform} from 'ol/proj'
import {toStringXY} from 'ol/coordinate';

import 'ol/ol.css';

const StyledMapSection = styled.section`
  width: 100%;
  height: 954px;
`



function MapWrapper(props: any) {

  // set intial state - used to track references to OpenLayers 
  //  objects for use in hooks, event handlers, etc.
  const [map, setMap] = useState<any>()
  const [featuresLayer, setFeaturesLayer] = useState<any>()
  const [selectedCoord, setSelectedCoord] = useState()




  // get ref to div element - OpenLayers will render into this div
  // https://stackoverflow.com/questions/58017215/what-typescript-type-do-i-use-with-useref-hook-when-setting-current-manually
  const mapElement = useRef<HTMLDivElement | null>(null)

  // initialize map on first render - logic formerly put into componentDidMount
  useEffect(() => {

    // create and add vector source layer
    const initalFeaturesLayer: VectorLayer = new VectorLayer({
      source: new VectorSource()
    })

    // create map


    const initMap = new Map({
          target: mapElement.current,
          layers: [
            new TileLayer({
              source: new OSM()
            })
          ],
          view: new View({
            projection: 'EPSG:4326',
            center: [126.9779451, 37.5662952],
            zoom: 16
          })
        });

    // save map and vector layer references to state
    setMap(initMap)
    setFeaturesLayer(initalFeaturesLayer)

    console.dir(initMap)
    initMap.on('click', handleMapClick)

  }, [])

  // create state ref that can be accessed in OpenLayers onclick callback function
  //  https://stackoverflow.com/a/60643670
  const mapRef: any = useRef()
  mapRef.current = map

  // map click handler
  const handleMapClick = (event: any) => {

    // get clicked coordinate using mapRef to access current React state inside OpenLayers callback
    //  https://stackoverflow.com/a/60643670
    const clickedCoord = mapRef.current.getCoordinateFromPixel(event.pixel);

    // transform coord to EPSG 4326 standard Lat Long
    const transormedCoord: any = transform(clickedCoord, 'EPSG:3857', 'EPSG:4326')

    console.log(transormedCoord, clickedCoord)
    // set React state
    setSelectedCoord(transormedCoord)

  }


  // update map if features prop changes - logic formerly put into componentDidUpdate
  useEffect(() => {

    if (props.features && props.features.length) { // may be empty on first render

      // set features to map
      featuresLayer.setSource(
        new VectorSource({
          features: props.features // make sure features is an array
        })
      )

      // fit map to feature extent (with 100px of padding)
      map.getView().fit(featuresLayer.getSource().getExtent(), {
        padding: [100, 100, 100, 100]
      })

    }

  }, [props.features])

  return (
    <StyledMapSection ref={mapElement} className="map-container" />
  )

}

export default MapWrapper