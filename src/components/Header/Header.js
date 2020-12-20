import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function AppHeader({ title }) {
  return (
    <Header>
      <h1>{title}</h1>
    </Header>
  )
}

AppHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

const Header = styled.header`
  background-color: var(--green);
  width: 400px;
  padding-bottom: 10px;
  box-shadow: 0 0 6px var(--light-grey);
  top: 0;
  text-align: center;
  position: fixed;
  z-index: -1;

  h1 {
    margin: 0;
    padding: 20px 0 16px;
    color: white;
    font-size: 1.625rem;
    font-weight: 400;
  }
`
