import React from 'react'

const Search = ({ term, setter }) => (
  <input type="text" name="search" value={term} onChange={event => setter(event.target.value)} />
)

export default Search
