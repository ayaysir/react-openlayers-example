import React from "react"
import SidebarContainer from "../containers/SidebarMainContainer"
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
    </MainLayout>
)

export default MainPage