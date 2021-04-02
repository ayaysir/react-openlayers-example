import React from "react"
import SidebarContainer from "../containers/SidebarContainer"
import MapContainer from "../containers/MapContainer"
import MainLayout from "../layout/MainLayout"

const MainPage: React.FC = ({ match }: any) => (
    <MainLayout>
        {(match.params.menu === "measurement") &&
            <SidebarContainer
                selectedMenu="measurement"
            />
        }
        {(match.params.menu === "layer") &&
            <SidebarContainer
                selectedMenu="layer"
            />
        }
        {(!match.params.menu || match.params.menu === "locations") &&
            <SidebarContainer
                selectedMenu="locations"
            />
        }
        <MapContainer />
    </MainLayout>
)

export default MainPage