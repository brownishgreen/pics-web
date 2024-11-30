import React from 'react'

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <img src={data.urls.small} alt={data.alt_description} />
    </div>
  )
}

export default Picture
