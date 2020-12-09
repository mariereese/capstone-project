import styled from 'styled-components/macro'
import Header from '../../components/Header/Header'
import PageWrapper from '../../components/PageWrapper'
import Card from '../../components/Card'

export default function Profile() {
  return (
    <>
      <Header title="Profil" />
      <PageWrapper>
        <ContentGrid>
          <Card>
            <h2>Jahresziel:</h2>

            <p>
              2000 kg CO<sub>2</sub>
            </p>
          </Card>
          <Card>
            <h2>letze Einkäufe</h2>
            <ul>
              <li></li>
            </ul>
          </Card>
        </ContentGrid>
      </PageWrapper>
    </>
  )
}

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 20px;
  row-gap: 12px;

  p {
    margin: 0 0 13px;
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
    color: var(--dark-grey);
  }
`
