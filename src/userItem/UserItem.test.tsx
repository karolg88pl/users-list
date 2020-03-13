import { shallow } from 'enzyme'
import React from 'react'
import * as Styles from './Styles'
import { UserItem } from './UserItem'

const user = {
    id: 1,
    name: 'Karol',
    username: 'testUserName'
}

const wrapper = shallow(<UserItem id={user.id} name={user.name} username={user.username} />)

describe('UserItem unit test', () => {
    it('should render correct elements', () => {
        expect(wrapper.find(Styles.Wrapper).length).toEqual(1)
        expect(wrapper.find(Styles.PrimaryText).length).toEqual(1)
        expect(wrapper.find(Styles.SecondaryText).length).toEqual(2)
    })
})