
import React from 'react'
import { useSelector } from 'react-redux'

import MapSection from '../components/MapSection'
import { RootState } from '../modules'

const MapContainer = () => {
  const { coordsLatLon } = useSelector((props: RootState) => ({
    coordsLatLon: props!.location.coords
  }))

  return (
    <MapSection locationsLatLon={coordsLatLon} />
  )
}

export default MapContainer
