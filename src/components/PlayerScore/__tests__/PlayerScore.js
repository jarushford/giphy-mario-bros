import React from 'react'
import PlayerScore from '../PlayerScore'
import { shallow } from 'enzyme'

describe('PlayerScore', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<PlayerScore player={1} score={0} active={false} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot with an active player', () => {
    const wrapper = shallow(<PlayerScore player={1} score={0} active={true} />)

    expect(wrapper).toMatchSnapshot()
  })
})