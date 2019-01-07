import React from 'react'
import { Error, mapDispatchToProps } from '../Error'
import { shallow } from 'enzyme'
import { clearError } from '../../../actions'

describe('Error', () => {
  let mockClear

  beforeEach(() => {
    mockClear = jest.fn()
  })

  it('should match the snapshot', () => {
    const wrapper = shallow(<Error clearError={mockClear} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should clear error on click', () => {
    const wrapper = shallow(<Error clearError={mockClear} />)

    wrapper.find('Link').simulate('click')

    expect(mockClear).toBeCalled()
  })

  it('should dispatch clearError when the prop clearError is called', () => {
    const mockDispatch = jest.fn()
    const expected = clearError()

    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.clearError()

    expect(mockDispatch).toBeCalledWith(expected)
  })
})