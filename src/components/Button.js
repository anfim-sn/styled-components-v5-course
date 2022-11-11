import styled, { css } from 'styled-components'

const largeStyles = ({ large }) => {
  if (large) {
    return css`
      padding: 10px;
      border-radius: 5px;
      font-size: 1.5em;
    `
  } else {
    return css`
      padding: 8px;
      border-radius: 4px;
      font-size: 1em;
    `
  }
}

export const Button = styled.button`
  color: white;
  background: ${p =>
    p.secondary ? p.theme.secondaryColor : p.theme.primaryColor};
  font-weight: bold;
  cursor: pointer;
  ${largeStyles};
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    background: #eee;
    color: #666;
    opacity: 1;
    cursor: default;
  }
`
