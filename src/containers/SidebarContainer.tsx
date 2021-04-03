import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from '../components/Sidebar'
import { RootState } from '../modules'

import { fetchLocationList } from '../modules/location'

const SidebarContainer = ({ selectedMenu }: { selectedMenu: string }) => {
  const dispatch = useDispatch()
  const { coords } = useSelector((props: RootState) => ({
    coords: props!.location.coords
  }))

  useEffect(() => {
    dispatch(fetchLocationList())
  }, [dispatch])

  return <Sidebar selectedMenu={selectedMenu} coords={coords} />
}

export default SidebarContainer
