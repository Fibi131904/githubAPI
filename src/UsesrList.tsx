import axios from 'axios'
import React, { useEffect, useState } from 'react'
import s from './Github.module.css'

export type SearcUserType = {
  login: string
  id: number
}

export type SearchResultType = {
  items: SearcUserType[]
}

type UsersListType = {
  searchTerm: string
  selectedUser: SearcUserType | null
  onUserSelect: (user: SearcUserType) => void
  setProgress:(progress:boolean)=>void
}

export const UsersList = (props: UsersListType) => {
  const [users, setUsers] = useState<SearcUserType[]>([])

  useEffect(() => {
    props.setProgress(true)
    axios
      .get<SearchResultType>(
        `https://api.github.com/search/users?q=${props.searchTerm}`
      )
      .then((res) => {
        setUsers(res.data.items)
        props.setProgress(false)
      })
  }, [props.searchTerm])

  return (
    <ul>
      {users.map((u) => (
        <li
          key={u.id}
          className={props.selectedUser === u ? s.selected : ''}
          onClick={() => {
            props.onUserSelect(u)
          }}>
          {u.login}
        </li>
      ))}
    </ul>
  )
}
