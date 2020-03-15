import React from 'react'
import { UserItem } from './UserItem'
import { render } from '@testing-library/react'

const user = {
    id: 1,
    name: 'Karol',
    username: 'testUserName'
}

const { getByText } = render(<UserItem id={user.id} name={user.name} username={user.username} />)

describe('UserItem unit test', () => {
    it('should render correct elements', () => {
        expect(getByText(`${user.id.toString()}.`)).toBeInTheDocument()
        expect(getByText(user.name)).toBeInTheDocument()
        expect(getByText(`@${user.username}`)).toBeInTheDocument()
    })
})