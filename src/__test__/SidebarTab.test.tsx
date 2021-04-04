import { render } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import SidebarTab from 'src/components/SidebarTab'
import { APP_MENU } from 'src/props'

describe('SidebarTab 컴포넌트', () => {
  const menu = 'locations'
  const altText = `icon of ${menu}`
  const imgSrc = 'tab_icon_1_selected.svg'

  it('render icon', () => {
    // 라우터 오류 방지 : https://grr1.tistory.com/55
    const { getByAltText } = render(
      <BrowserRouter>
        <SidebarTab selectedMenu="locations" allMenu={APP_MENU} />
      </BrowserRouter>
    )
    expect(getByAltText(altText)).toBeInTheDocument()
    expect(getByAltText(altText)).toHaveAttribute('src', imgSrc)
  })
})
