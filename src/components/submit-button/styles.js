import styled from 'styled-components'

export const ButtonBase = styled.button`
  background-color: #8d00ff;
  border-radius: 3px;
  height: 32px;
  color: #fff;
  text-align: center;
  margin-bottom: 10px;
  &[disabled] {
    opacity: .3;
  }
  &:hover {
    opacity: .9;
  }
`
