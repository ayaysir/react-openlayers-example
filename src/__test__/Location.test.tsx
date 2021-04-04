import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { Location } from 'src/components/SidebarLocations'

afterEach(cleanup)

describe('사이드바의 좌표 표시 관련 컴포넌트', () => {
  const title = 'Location x'
  const coord = [37, 126]

  it('좌표 타이틀 렌더링', () => {
    const { getByText } = render(<Location title={title} coord={coord} />)
    expect(getByText(title)).toBeInTheDocument()
    expect(getByText(title)).toHaveTextContent(title)
  })

  it('좌표 숫자 렌더링', () => {
    const { getByText, getByDisplayValue } = render(<Location title={title} coord={coord} />)
    expect(getByText('Lat')).toBeInTheDocument()
    expect(getByText('Long')).toBeInTheDocument()
    expect(getByDisplayValue(coord[0])).toBeInTheDocument()
    expect(getByDisplayValue(coord[0])).toHaveValue(String(coord[0]))
    expect(getByDisplayValue(coord[1])).toBeInTheDocument()
    expect(getByDisplayValue(coord[1])).toHaveValue(String(coord[1]))
  })
})
