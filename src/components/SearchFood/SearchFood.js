import styled from 'styled-components/macro'
import { useState } from 'react'

export default function SearchFood() {
  const [searchInput, setSearchInput] = useState('')

  function handleChange(event) {
    setSearchInput(event.target.value)
  }

  return (
    <form>
      <SearchBar type="text" placeholder="suchen..." onChange={handleChange} />
    </form>
  )
}

const SearchBar = styled.input`
  display: block;
  margin: 10px 20px;
  box-shadow: 0 0 10px #767670;
  border: none;
  border-radius: 21px;
  width: 100%;
  height: 40px;
  padding-left: 15px;
  font-size: 1.125rem;
`
