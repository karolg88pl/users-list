import React from 'react'
import * as Styles from './Styles'

type Props = {
    id: number
    name: string
    username: string
}

export const UserItem: React.FC<Props> = ({id, name, username}) => {
    return (
        <Styles.Wrapper>
            <Styles.SecondaryText>{id}.</Styles.SecondaryText>
            <Styles.PrimaryText>{name}</Styles.PrimaryText>
            <Styles.SecondaryText>@{username}</Styles.SecondaryText>
        </Styles.Wrapper>
    )
}