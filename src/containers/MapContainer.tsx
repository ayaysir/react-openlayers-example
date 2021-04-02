
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import MapSection from '../components/MapSection';

import Feature from 'ol/Feature';
import { Point } from 'ol/geom';
import styled from 'styled-components';
import { Coord } from '../props';


const pointFeature = new Feature({
    geometry: new Point([126.9779451, 37.5662952]),
});


const StyledDrawPoint = styled.div`
  display: none;
  width: 0px;
  height: 0px;
`


const MapContainer = () => {

    const { coordsLatLon } = useSelector((props: any) => ({
        coordsLatLon: props.location.coords
    }))



    return (
        <MapSection locationsLatLon={coordsLatLon} />
    )
}

export default MapContainer