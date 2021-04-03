import React from 'react'
import styled from 'styled-components'

const StyledMainLayout = styled.div`
  display: flex;
  flex-direction: row;
`

const MainLayout = ({ children }: React.PropsWithChildren<any>) => (
    <StyledMainLayout className="App">
        {children}
    </StyledMainLayout>
)

export default MainLayout
