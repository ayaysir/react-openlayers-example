import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

import packageJson from './../../package.json'

import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import OSM from 'ol/source/OSM'

import Feature from 'ol/Feature'
import { Point } from 'ol/geom'

import 'ol/ol.css'

const StyledMapSection = styled.section`
  width: 100%;
  height: 954px;
`
const StyledDrawPoint = styled.div`
  display: none;
`
const DrawPoint = ({ coord, coordLatLon, featuresLayer }: any) => {
  useEffect(() => {
    const coordLonLat = coord || coordLatLon.slice(0).reverse()
    console.log('drawpoint', coordLonLat)

    const newFeature = new Feature({
      geometry: new Point(coordLonLat)
    })
    featuresLayer && featuresLayer.getSource().addFeature(newFeature)
  }, [featuresLayer, coord])

  return (
    <StyledDrawPoint />
  )
}

function MapWrapper (props: any) {
  // set intial state - used to track references to OpenLayers
  // objects for use in hooks, event handlers, etc.
  const [map, setMap] = useState()
  const [featuresLayer, setFeaturesLayer] = useState<VectorLayer>()
  const [clickedCoord, setClickedCoord] = useState<VectorLayer>()

  // create state ref that can be accessed in OpenLayers onclick callback function
  //  https://stackoverflow.com/a/60643670
  const mapRef: any = useRef()
  mapRef.current = map

  // map click handler
  const handleMapClick = (event: any) => {
    // get clicked coordinate using mapRef to access current React state inside OpenLayers callback
    //  https://stackoverflow.com/a/60643670
    mapRef.current.getCoordinateFromPixel(event.pixel)

    // transform coord to EPSG 4326 standard Lat Long
    //  const transormedCoord: any = transform(clickedCoord, 'EPSG:3857', 'EPSG:4326')

    console.log(clickedCoord)
    // set React state
    setClickedCoord(clickedCoord)
  }

  // get ref to div element - OpenLayers will render into this div
  // https://stackoverflow.com/questions/58017215/
  const mapElement = useRef<HTMLDivElement | null>(null)

  // initialize map on first render - logic formerly put into componentDidMount
  useEffect(() => {
    // create and add vector source layer
    const initialFeaturesLayer: VectorLayer = new VectorLayer({
      source: new VectorSource()
    })

    // create map
    const initMap = new Map({
      target: mapElement.current,
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        initialFeaturesLayer
      ],
      view: new View(packageJson.olViewSetting)
    })

    // save map and vector layer references to state
    setMap(initMap)
    setFeaturesLayer(initialFeaturesLayer)

    console.log('map', initMap, props.children)
    initMap.on('click', handleMapClick)
  }, [])

  // update map if features prop changes - logic formerly put into componentDidUpdate
  useEffect(() => {
    if (featuresLayer && props.features && props.features.length) { // may be null on first render
      // set features to map
      featuresLayer!.setSource(
        new VectorSource({
          features: props.features // make sure features is an array
        })
      )
    }
  }, [featuresLayer, props.features])

  return (
    <StyledMapSection ref={mapElement} className="map-container">
      {props.locationsLatLon && props.locationsLatLon.map((coordLatLon: Array<number>, index: number) => {
        return (
            <DrawPoint key={index} coordLatLon={coordLatLon} featuresLayer={featuresLayer} />
        )
      })}
    </StyledMapSection>
  )
}

export default MapWrapper
