import styled from 'styled-components/macro'

export default function SearchFood({ handleChange }) {
  return (
    <label>
      <SearchBar type="text" placeholder="suchen..." onChange={handleChange} />
    </label>
  )
}

const SearchBar = styled.input`
  display: block;
  box-shadow: 0 0 10px var(--light-grey);
  border: none;
  border-radius: 21px;
  width: 100%;
  height: 40px;
  padding-left: 15px;
  font-size: 1.125rem;
`
