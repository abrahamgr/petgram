import styled from 'styled-components'

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  font-weight: 500;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* width: 90%;
  margin: 0 auto; */
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 10px;
  padding: 8px 4px;
`

export const Button = styled.button`
  background-color: #8d00ff;
  border-radius: 3px;
  height: 32px;
  color: #fff;
  text-align: center;
  margin-bottom: 10px;
  &[disabled] {
    opacity: .3;
  }
`

export const Error = styled.p`
  color: red;
  margin-bottom: 10px;
`
