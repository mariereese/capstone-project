import styled from 'styled-components/macro'

export default function AppHeader({ title }) {
  return (
    <Header>
      <h1>{title}</h1>
    </Header>
  )
}

const Header = styled.header`
  width: 100%;
  text-align: center;

  h1 {
    margin: 0;
    padding: 24px 0;
    color: white;
    font-size: 1.625rem;
    font-weight: 400;
  }
`
