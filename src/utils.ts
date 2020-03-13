import { User } from "./types"

export const checkSearchText = (name: string, searchText: string) : boolean =>
    name.toLowerCase().includes(searchText.toLowerCase())

export const fetchUsers = (): Promise<Array<User>> => fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())