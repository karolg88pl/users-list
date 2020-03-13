import React from 'react'
import * as Styles from './Styles'

type Props = {
    searchText: string
    setSearchText: (value: string) => void
}

export const SearchBox: React.FC<Props> = ({searchText, setSearchText}) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchText(e.target.value)
    }
    return (
        <Styles.SearchBox placeholder='Search by user name...' value={searchText} onChange={onChange} />
    )
}