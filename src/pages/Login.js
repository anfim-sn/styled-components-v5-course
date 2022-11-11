import { Button, Input, PageLayout, PasswordInput } from '../components'
import styled from 'styled-components'
import { useState } from 'react'

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;
`

export const Login = () => {
  const [formFields, setFormFields] = useState({ username: '', password: '' })

  const handleInputChange = e => {
    e.persist()
    setFormFields(s => ({ ...s, [e.target.name]: e.target.value }))
  }

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form>
        <Input
          value={formFields.username}
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleInputChange}
        />
        <PasswordInput
          value={formFields.password}
          name="password"
          onChange={handleInputChange}
        />
        <Button primary>Log In</Button>
      </Form>
    </PageLayout>
  )
}
