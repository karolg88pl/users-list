import { shallow } from 'enzyme'
import React from 'react'
import * as Styles from './Styles'
import { SearchBox } from './SearchBox'

const wrapper = shallow(<SearchBox searchText='searchText' setSearchText={() => {}} />)

describe('SearchBox unit test', () => {
    it('should render correct elements', () => {
        expect(wrapper.find(Styles.SearchBox).length).toEqual(1)
    })
})