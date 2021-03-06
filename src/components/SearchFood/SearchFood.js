import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Card from '../Card'
import { ReactComponent as Search } from '../../images/search-icon.svg'

export default function SearchFood({ handleChange, onSearchClick }) {
  return (
    <SearchBar>
      <SearchIcon />
      <SearchInput
        type="text"
        placeholder="suchen..."
        onChange={handleChange}
        onClick={onSearchClick}
      />
    </SearchBar>
  )
}

SearchFood.propTypes = {
  handleChange: PropTypes.func,
  onSearchClick: PropTypes.func,
}

const SearchBar = styled(Card)`
  display: flex;
  align-items: center;
`

const SearchInput = styled.input`
  display: block;
  border: none;
  border-radius: 21px;
  width: 100%;
  height: 40px;
  font-size: 1.125rem;
`

const SearchIcon = styled(Search)`
  margin: 0 2px 0 10px;
  width: 24px;
  height: 24px;
  color: var(--orange);
`
