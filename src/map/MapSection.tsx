import React, { useLayoutEffect } from 'react'
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import styled from 'styled-components';

const StyledMapSection = styled.section`
  position: absolute;
  width: 1608px;
  height: 954px;
  left: 72px;
  top: 0px;
`

// projection: api 좌표에 있는대로
// center: [경도, 위도] => 
// 북위(=) 33 ~ 43, 동경(||) 124 ~ 132
// 일반적으로 좌표계는 위도-경도로 표기하나 openlayers에서는 반대 순서로 기입
const MapSection: React.FC = () => {
  useLayoutEffect(() => {
    new Map({
        target: 'map-section',
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
    
  }, [])

  return (
    <StyledMapSection id="map-section" />
  )
}

export default MapSection;