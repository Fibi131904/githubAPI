import React, { useState } from 'react'
import s from './Github.module.css'

export const Github = () => {
  const[selectedUser, setSelectedUser]=useState<string | null>(null)

  return (
    <div className={s.container}>
      <div>
        <input placeholder="search" />
        <button>find</button>
      </div>
      <ul>
        {['Dima', 'Kseniya'].map((u) => (
          <li className={ selectedUser === u? s.selected : ''} 
          onClick={()=>{
            setSelectedUser(u)
            document.title= u
          }}>{u}</li>
        ))}
      </ul>
      <div>
        <h2>UserName</h2>
        <div>Details</div>
      </div>
    </div>
  )
}
