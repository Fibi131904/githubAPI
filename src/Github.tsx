import React, { useEffect, useState } from 'react'
import { Details } from './Details'
import s from './Github.module.css'
import { Search } from './Search'
import { SearcUserType, UsersList } from './UsesrList'
import preloader from './assets/image/preloader2.gif'

export const Github = () => {
  const [searchTerm, setSearchTerm] = useState('Fibi')
  const [selectedUser, setSelectedUser] = useState<SearcUserType | null>(null)
  const [progress, setProgress] = useState(false);
 

  let initialSearchState = 'it'

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
          searchTerm={searchTerm}
          selectedUser={selectedUser}
          onUserSelect={setSelectedUser}
          setProgress={setProgress}
        />
      </div>
      <Details selectedUser={selectedUser} 
      setProgress={setProgress}/>
      {progress?<img src={preloader}/>: null}
    </div>
  )
}
