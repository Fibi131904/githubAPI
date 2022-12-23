import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SearcUserType } from './UsesrList'

export type UserType = {
  login: string
  id: number
  avatar_url: string
  followers: number
}
type DetailsType = {
  user: SearcUserType | null
}

export const Details = (props: DetailsType) => {
  const [userDetails, setUserDetails] = useState<null | UserType>(null)

  useEffect(() => {
    if (!!props.user) {
      axios
        .get<UserType>(`https://api.github.com/users/${props.user.login}`)
        .then((res) => {
          setUserDetails(res.data)
        })
    }
  }, [props.user])

  return (
    <div>      
      {userDetails && (        
        <div>
          <h2>{userDetails.login}</h2>
          <img src={userDetails.avatar_url} />
          <br />
          {userDetails.login}, Follovers: {userDetails.followers}
        </div>
      )}
    </div>
  )
}
