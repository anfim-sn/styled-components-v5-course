import styled from 'styled-components'
import { Link as ReactRouterDomLink, useLocation } from 'react-router-dom'
import { useState } from 'react'

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0;
  position: fixed;
  top: 0;
  background-image: linear-gradient(to right, #f8049c, #fdd54f);
`

const Menu = styled.nav`
  display: ${p => (p.open ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  top: 60px;
  padding: 8px;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  border-bottom: 3px solid #fdd54f;
  background: white;

  @media (min-width: 768px) {
    display: flex;
    background: none;
    left: initial;
    top: initial;
    margin: auto 0 auto auto;
    width: initial;
    border-bottom: none;
    position: relative;
  }
`

const Link = ({ isActive, children, ...props }) => (
  <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>
)

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  color: black;
  text-decoration: none;
  font-weight: ${p => (p.isActive ? 'bold' : 'normal')};
`

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  height: 25px;
  padding: 17px;
  cursor: pointer;

  > div {
    height: 3px;
    background: black;
    margin: 5px 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

export const Header = () => {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <HeaderWrapper>
      <MobileMenuIcon onClick={() => setMenuOpen(s => !s)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Menu open={menuOpen}>
        <StyledLink to="/" isActive={pathname === '/'}>
          Home
        </StyledLink>
        <StyledLink to="/login" isActive={pathname === '/login'}>
          Login
        </StyledLink>
      </Menu>
    </HeaderWrapper>
  )
}
