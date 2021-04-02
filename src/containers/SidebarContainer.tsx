import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Sidebar from "../components/Sidebar"

import { fetchLocationList } from "../modules/location"

const SidebarContainer = ({ selectedMenu }: { selectedMenu: string }) => {
    const dispatch = useDispatch()
    const { coords } = useSelector((props: any) => ({
        coords: props.location.coords
    }))

    useEffect(() => {
        dispatch(fetchLocationList())
    }, [dispatch])

    return <Sidebar selectedMenu={selectedMenu} coords={coords} />
}

export default SidebarContainer