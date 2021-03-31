import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Sidebar from "../components/sidebar/Sidebar"

import { fetchLocationList } from "../modules/location"

const SidebarContainer = () => {
    const dispatch = useDispatch()

    const state = useSelector((state: any) => ({
        ...state,
    }))

    useEffect(() => {
        dispatch(fetchLocationList())
    }, [dispatch])

    return <Sidebar />
}

export default SidebarContainer