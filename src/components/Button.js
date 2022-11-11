import styled, { css } from 'styled-components'

export const Button = styled.button`
  color: white;
  background: ${p => (p.primary ? '#f8049c' : 'black')};
  font-weight: bold;
  cursor: pointer;
  ${p =>
    p.large
      ? css`
          padding: 10px;
          border-radius: 5px;
          font-size: 1.5em;
        `
      : css`
          padding: 8px;
          border-radius: 4px;
          font-size: 1em;
        `}
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  transition: all 0.3s;

  &:hover {
    background: ${p => (p.primary ? '#ff5ab3' : '#333')};
  }

  &:disabled {
    background: #eee;
    color: #666;
  }
`
