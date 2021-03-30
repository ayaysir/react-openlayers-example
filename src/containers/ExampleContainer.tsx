import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fetchLocationList } from "./../modules/location"

const ExampleListContainer = () => {
    const dispatch = useDispatch()

    const state = useSelector((state: any) => ({
        ...state,
    }))

    useEffect(() => {
        dispatch(fetchLocationList())
    }, [dispatch])

    return <div>get coords</div>
}

export default ExampleListContainer