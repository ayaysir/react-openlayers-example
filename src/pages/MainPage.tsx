import React from "react"
import SidebarContainer from "../containers/SidebarContainer"
import MainLayout from "../layout/MainLayout"

const MainPage: React.FC = ({ match }: any) => (
    <MainLayout>
        {(match.params.menu === "measurement") && 
            <SidebarContainer 
                sidebarContent="measurement" 
                selectedMenu="measurement" 
            />
        }
        {(match.params.menu === "layer") && 
            <SidebarContainer 
                sidebarContent="layer" 
                selectedMenu="layer" 
            />
        }
        {(!match.params.menu || match.params.menu === "locations") && 
            <SidebarContainer 
                sidebarContent="locations" 
                selectedMenu="locations" 
            />
        }
    </MainLayout>
)

export default MainPage