
import React from 'react'
import { useSelector } from 'react-redux'

import MapSection from '../components/MapSection'
import { RootState } from '../modules'

const MapContainer = () => {
  const { coordsLatLon, error } = useSelector((props: RootState) => ({
    coordsLatLon: props!.location.coords,
    error: props!.location.error
  }))

  return (
    <MapSection locationsLatLon={coordsLatLon} error={error} />
  )
}

export default MapContainer
