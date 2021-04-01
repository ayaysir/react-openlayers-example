import React from "react"
import SidebarContainer from "../containers/SidebarMainContainer"
import MainLayout from "../layout/MainLayout"

const MainPage: React.FC = () => (
    <MainLayout>
        <SidebarContainer 
            selectedMenu="locations" 
        />
    </MainLayout>
)

export default MainPage