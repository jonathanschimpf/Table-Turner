import React from 'react'

export default function ErrorAlert({text}) {
  return (
    <div className="bg-light-danger p-2">{text ? text : "An error has occurred"}</div>
  )
}
