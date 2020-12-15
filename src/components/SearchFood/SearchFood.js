import styled from 'styled-components/macro'
import Card from '../Card'

export default function SearchFood({ handleChange, onSearchClick }) {
  return (
    <Card>
      <SearchBar
        type="text"
        placeholder="suchen..."
        onChange={handleChange}
        onClick={onSearchClick}
      />
    </Card>
  )
}

const SearchBar = styled.input`
  display: block;
  //box-shadow: 0 0 6px var(--light-grey);
  border: none;
  border-radius: 21px;
  width: 100%;
  height: 40px;
  padding-left: 15px;
  font-size: 1.125rem;
`
