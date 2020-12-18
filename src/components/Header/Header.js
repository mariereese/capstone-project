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
  width: 100%;
  text-align: center;

  h1 {
    margin: 0;
    padding: 20px 0 16px;
    color: white;
    font-size: 1.625rem;
    font-weight: 400;
  }
`
