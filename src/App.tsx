import React, { useState, useEffect } from 'react'
import * as Styles from './Styles'
import { UserItem } from './userItem'
import { User } from './types'
import { SearchBox } from './searchbox'
import { checkSearchText, fetchUsers } from './utils'

const App: React.FC = () => {
  const [users, setUsers] = useState<Array<User>>([])
  const [searchText, setSearchText] = useState<string>('')

  useEffect(() => {
      fetchUsers()
          .then(res => setUsers(res))
          .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Styles.Wrapper>
          <Styles.Header>Users list</Styles.Header>
          <SearchBox searchText={searchText} setSearchText={setSearchText} />
          {users.length > 0 ?
              <Styles.ListWrapper>
                  {users.filter(user => checkSearchText(user.name, searchText)).map(user => 
                      <UserItem 
                          key={user.id} 
                          id={user.id} 
                          name={user.name} 
                          username={user.username}/>)}
              </Styles.ListWrapper> :
          <Styles.Loading>Loading...</Styles.Loading>}   
      </Styles.Wrapper>
    </div>
  );
}

export default App
