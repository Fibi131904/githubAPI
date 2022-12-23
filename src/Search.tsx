import React, { useEffect, useState } from 'react'

type SearchType = {
  value: string
  onSubmit: (fixedValue: string) => void
}
export const Search = (props: SearchType) => {
  const [tempSearch, setTempSearch] = useState('')
  useEffect(() => {
    setTempSearch(props.value)
  }, [props.value])

  return (
    <div>
      <input
        placeholder="search"
        value={tempSearch}
        onChange={(e) => {
          setTempSearch(e.currentTarget.value)
        }}
      />
      <button
        onClick={() => {
          props.onSubmit(tempSearch)
        }}>
        find
      </button>
    </div>
  )
}
