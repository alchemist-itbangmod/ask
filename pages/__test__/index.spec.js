/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import Index from '../index'

describe('With Snapshot Testing', () => {
  it(`[Index] shows "Hello world!"`, () => {
    const component = renderer.create(<Index />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
