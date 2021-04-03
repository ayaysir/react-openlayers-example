import React from 'react'
import styled from 'styled-components'

const StyledMainLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: inherit;
`

const MainLayout = ({ children }: React.PropsWithChildren<any>) => (
    <StyledMainLayout className="main-layout">
      {children}
    </StyledMainLayout>
)

export default MainLayout
