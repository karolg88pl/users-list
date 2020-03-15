import App from './App'
import React from 'react'
import { render, wait, fireEvent, queryByText } from '@testing-library/react'
import { User } from './types'

const mockUsers: User[] = [
  {
    id: 11,
    name: 'testName1',
    username: 'testUserName1',
    email: 'testEmail',
    address: {},
    phone: '000',
    website: 'www',
    company: {}
  },
  {
    id: 22,
    name: 'testName2',
    username: 'testUserName2',
    email: 'testEmail',
    address: {},
    phone: '000',
    website: 'www',
    company: {}
  }
]

describe('App unit test', () => {
  it('should render correct elements', async () => {
      
    jest.spyOn(window, 'fetch').mockImplementationOnce((): Promise<any> => {
      return Promise.resolve({
        json: () => Promise.resolve(mockUsers),
      })
    })

    const { getByText, getByTestId, getByPlaceholderText, container } = render(<App />)

    expect(getByText('Users list')).toBeTruthy()
    expect(getByPlaceholderText('Search by user name...')).toBeTruthy()
    expect(getByTestId('loading')).toBeTruthy()

    await wait(() => expect(getByTestId('listWrapper')).toBeTruthy())

    expect(getByTestId('listWrapper').children).toHaveLength(2)
    expect(getByText(mockUsers[0].name)).toBeInTheDocument()
    expect(getByText(mockUsers[1].name)).toBeInTheDocument()
    
    fireEvent.change(getByPlaceholderText('Search by user name...'), {target: {value: 'testName1'}})

    expect(getByTestId('listWrapper').children).toHaveLength(1)
    expect(getByText(mockUsers[0].name)).toBeInTheDocument()
    expect(queryByText(container, mockUsers[1].name)).toBeNull()

    fireEvent.change(getByPlaceholderText('Search by user name...'), {target: {value: ''}})

    expect(getByTestId('listWrapper').children).toHaveLength(2)
    expect(getByText(mockUsers[0].name)).toBeInTheDocument()
    expect(getByText(mockUsers[1].name)).toBeInTheDocument()
  })
})