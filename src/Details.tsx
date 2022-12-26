import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Timer } from './Timer'
import { SearcUserType } from './UsesrList'

export type UserType = {
  login: string
  id: number
  avatar_url: string
  followers: number
}
type DetailsType = {
  selectedUser: SearcUserType | null
  setProgress:(progress:boolean)=>void
  
}

export const Details = (props: DetailsType) => {
  const startTimerSeconds = 60
  const [userDetails, setUserDetails] = useState<null | UserType>(null)
  const [seconds, setSeconds] = useState(startTimerSeconds)

  useEffect(() => {
    if (!!props.selectedUser) {
      props.setProgress(true)
      axios
        .get<UserType>(
          `https://api.github.com/users/${props.selectedUser.login}`
        )
        .then((res) => {
          props.setProgress(false)
          setSeconds(startTimerSeconds)
          setUserDetails(res.data)
        })
    }
  }, [props.selectedUser])
  useEffect(() => {
    if (seconds < 1) {
      setUserDetails(null)
    }
  }, [])

  return (
    <div>
      {userDetails && (
        <div>
          <Timer seconds={seconds} onChange={setSeconds} timerKey={userDetails.id.toString()} />
          <h2>{userDetails.login}</h2>
          <img src={userDetails.avatar_url} />
          <br />
          {userDetails.login}, Follovers: {userDetails.followers}
        </div>
      )}
    </div>
  )
}
