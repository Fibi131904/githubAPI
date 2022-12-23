import React, { useEffect, useState } from 'react'
import { Details } from './Details'
import s from './Github.module.css'
import { Search } from './Search'
import { SearcUserType, UsersList } from './UsesrList'

export const Github = () => {
  const [searchTerm, setSearchTerm] = useState('Fibi')
  const [selectedUser, setSelectedUser] = useState<SearcUserType | null>(null)

  let initialSearchState = 'Fibi'

  useEffect(() => {
    if (selectedUser) {
      document.title = selectedUser.login
    }
  }, [selectedUser])

  return (
    <div className={s.container}>
      <div>
        <Search
          value={searchTerm}
          onSubmit={(value: string) => {
            setSearchTerm(value)
          }}
        />
        <button
          onClick={() => {
            setSearchTerm(initialSearchState)
          }}>
          reset
        </button>
        <UsersList
          term={searchTerm}
          selectedUser={selectedUser}
          onUserSelect={setSelectedUser}
        />
      </div>
      <Details user={selectedUser} />
    </div>
  )
}
