import styled from 'styled-components'
import { Header } from './Header'

const Content = styled.main`
  max-width: 800px;
  margin: 80px auto 0;
  padding: 0 16px;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Kaushan Script', sans-serif;
  }
`

export const PageLayout = ({ children }) => (
  <>
    <Header />
    <Content>{children}</Content>
  </>
)
