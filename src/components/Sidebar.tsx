import styled from "styled-components"
import SidebarContent from "./SidebarContent"
import SidebarTab from "./SidebarTab"

import flagIcon from "./../assets/img/location_marker.svg"


const StyledLocation = styled.div`
    padding: 10px 23px;
    padding-bottom: 14px;

    font-family: Noto Sans KR;
    font-style: normal;

    color: #4D4C4C;
    background: #FFFFFF;

    border-bottom: 1px solid #F4F4F4;;

    .flag-icon {
        background: url(${flagIcon});
        width: 13px;
        height: 17px;
        display: inline-flex;
    }

    .title {
        margin-left: 10px;
        line-height: 22px;
        font-weight: 500;
        font-size: 15px;
    }

    .coord {
        margin-top: 22px;
    }

    .coord-label {
        font-weight: bold;
        font-size: 13px;
        line-height: 30px;
    }

    .coord-number {
        position: absolute;
        width: 147px;
        height: 27px;

        left: 60px;

        border: 0.5px solid #C7C7C7;
        box-sizing: border-box;
        border-radius: 5px;
    }
`

const Location = () => {
    return (
        <StyledLocation>
            <div className="flag-icon" />
            <span className="title">Location 1</span>
            <div className="coord">
                <div>
                    <span className="coord-label">Lat</span>
                    <input className="coord-number" type="text" readOnly />
                </div>
                <div>
                    <span className="coord-label">Long</span>
                    <input className="coord-number" type="text" readOnly />
                </div>
            </div>
        </StyledLocation>
    )
}

const SidebarLocations = () => {
    return(
        <div>
            <Location />
            <Location />
            <Location />
        </div>
    )
}


const Sidebar = ({ selectedMenu }: any) => {
    return(
        <>
            <SidebarTab selectedMenu={selectedMenu} />
            <SidebarContent>
                {selectedMenu === "locations" && <SidebarLocations />}
            </SidebarContent>
        </>
    )
}

export default Sidebar