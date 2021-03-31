import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Sidebar from "../components/Sidebar"

import { fetchLocationList } from "../modules/location"

const SidebarContainer = ({ sidebarContent }: any) => {
    const dispatch = useDispatch()
    const coordsLength = useSelector((props: any) => props.location.coords.length)

    useEffect(() => {
        console.log("pros", coordsLength)
        if(!coordsLength) {
            dispatch(fetchLocationList())
        }
    }, [dispatch])

    return <Sidebar sidebarContent={sidebarContent} selectedMenu={sidebarContent} />
}

export default SidebarContainer