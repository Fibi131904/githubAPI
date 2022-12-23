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
  const [tempSearch, setTempSearch]= useState('it-kamasutra')
  const [searchTerm, setSearchTerm]= useState('it-kamasutra')

 
useEffect(() => {
  if (selectedUser) {
    document.title = selectedUser.login
  }
}, [selectedUser])

useEffect(() => {
axios
 .get<SearchResultType>(`https://api.github.com/search/users?q=${searchTerm}`)
 .then(res=>{
  setUsers(res.data.items)
 })
}, [searchTerm])

  return (
    <div className={s.container}>
      <div>
        <input placeholder="search" 
        value={tempSearch}
        onChange={(e)=>{setTempSearch(e.currentTarget.value)}}/>
        <button onClick={() => {
          setSearchTerm(tempSearch)
        }}>find</button>
      </div>
      <ul>
        {users.map(u => (
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
