import React, { useLayoutEffect } from 'react'
import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import styled from 'styled-components';

const StyledMapSection = styled.section`
    width: 400px;
    height: 250px;
`

const MapSection: React.FC = () => {
  useLayoutEffect(() => {
    console.log("efef")
    const map = new Map({
        target: 'map-section',
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          center: [0, 0],
          zoom: 0
        })
      });
    
  }, [])

  return (
    <StyledMapSection id="map-section" />
  )
}

export default MapSection;