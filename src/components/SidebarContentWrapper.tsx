import React from 'react'
import styled from 'styled-components'
import { SidebarContentProps } from '../props'

const StyledSidebarContent = styled.div`
    z-index: 1;
    min-width: 306px;

    background: #FBFBFB;
`

const SidebarContentWrapper = ({ children }: SidebarContentProps) => {
  return (
    <StyledSidebarContent>
      {children}
    </StyledSidebarContent>
  )
}

export default SidebarContentWrapper
