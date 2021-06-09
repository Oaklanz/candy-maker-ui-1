import React from 'react'

const Manufacturer = ({ id, name, country }) => (
  <div key={id} className="manufacturer">
    {`${name} (${country})`}
  </div>
)

export default Manufacturer