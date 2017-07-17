/* eslint-env jest */

import React from 'react'
import { mount } from 'enzyme'

import Pin from '../Pin'

describe('PIN Page', () => {
  it('should render <Pin /> components', () => {
    const wrapper = mount(<Pin />)
    expect(wrapper.find('h3').text()).toEqual('Enter room PIN')
  })
})
