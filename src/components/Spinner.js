import styled, { keyframes } from 'styled-components'

import React from 'react'

const rotation = keyframes`
  from{
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #f8049c;
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 16px auto;
  animation: ${rotation} 1s linear infinite;
`
