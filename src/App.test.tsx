import App from './App'
import { shallow } from 'enzyme'
import React from 'react'
import * as Styles from './Styles'
import { SearchBox } from './searchbox'

describe('App unit test', () => {
  it('should render correct elements', () => {
      
      const  wrapper = shallow(<App />)
      
      expect(wrapper.find(Styles.Wrapper).length).toEqual(1)
      expect(wrapper.find(Styles.Header).length).toEqual(1)
      expect(wrapper.find(SearchBox).length).toEqual(1)
  })
})