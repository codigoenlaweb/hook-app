import React, { memo } from 'react'

const Small = memo(({value}) => {
  return (
    <p>{value}</p>
  )
})

export default Small