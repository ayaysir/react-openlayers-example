import React from 'react'
import styled from 'styled-components'
import { SidebarContentProps } from '../props'

const StyledSidebarContent = styled.div`
    z-index: 1;
    min-width: 306px;
    height: 954px;

    background: #FBFBFB;
`

const SidebarContent = ({ children }: SidebarContentProps) => {
  return (
    <StyledSidebarContent>
      {children}
    </StyledSidebarContent>
  )
}

export default SidebarContent
