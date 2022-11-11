import { useState } from 'react'
import styled from 'styled-components'
import { Input } from './Input'

const PasswordInputWrapper = styled.div`
  position: relative;
`

const ShowButton = styled.div`
  width: 57px;
  position: absolute;
  right: 0;
  top: 0;
  height: 40px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 0.9em;
  display: flex;
  justify-content: center;
  padding: 10px 8px 8px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: white;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  color: black;
  transition: all 0.3s;

  &:hover {
    background: #eee;
  }
`

const PasswordInputStyled = styled(Input).attrs(p => ({
  type: `${p.show ? 'text' : 'password'}`,
  placeholder: 'Password',
}))``

export const PasswordInput = props => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <PasswordInputWrapper>
      <PasswordInputStyled {...props} show={showPassword} />
      <ShowButton onClick={() => setShowPassword(s => !s)}>
        {showPassword ? 'Hide' : 'Show'}
      </ShowButton>
    </PasswordInputWrapper>
  )
}
