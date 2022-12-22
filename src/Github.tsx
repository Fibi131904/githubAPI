import axios from 'axios'
import React, { useEffect, useState } from 'react'
import s from './Github.module.css'

type SearcUserType = {
  login: string
  id: number
}

type SearchResultType = {
  items: SearcUserType[]
}

export const Github = () => {

  const [selectedUser, setSelectedUser] = useState<SearcUserType | null>(null)
const [users, setUsers]=useState<SearcUserType[]>([])
useEffect(() => {
  if (selectedUser) {
    document.title = selectedUser.login
  }
}, [selectedUser])

useEffect(() => {
 axios
 .get<SearchResultType>('https://api.github.com/search/users?q=it-kamasutra')
 .then(res=>{
  setUsers(res.data.items)
 })
}, [])

  return (
    <div className={s.container}>
      <div>
        <input placeholder="search" />
        <button>find</button>
      </div>
      <ul>
        {users.
        map(u => (
          <li key={u.id}
          className={ selectedUser === u? s.selected : ''} 
          onClick={()=>{
            setSelectedUser(u)         
          }}>{u.login}
          </li>
        ))}
      </ul>
      <div>
        <h2>UserName</h2>
        <div>Details</div>
      </div>
    </div>
  )
}
