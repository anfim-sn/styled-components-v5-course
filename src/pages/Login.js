import {
  Button,
  Input,
  PageLayout,
  PasswordInput,
  Spinner,
} from '../components'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: ${p => p.theme.bodyFontColor};
  border-radius: 4px;
  background: ${p => p.theme.bodyBackgroundColor};

  ${Input} {
    background: ${p => p.theme.bodyBackgroundColor};
    color: ${p => p.theme.bodyFontColor};
  }

  .alter-text {
    text-align: center;
    margin: 10px 0;
  }

  > ${Button}:first-of-type {
    margin-top: 40px;
  }
`

let timeout

export const Login = () => {
  const [formFields, setFormFields] = useState({ username: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = e => {
    e.persist()
    setFormFields(s => ({ ...s, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setIsLoading(true)
    timeout = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout)
        setIsLoading(false)
      }
    }
  }, [])

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
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
          </>
        )}
        <Button large type="submit" disabled={isLoading}>
          {isLoading ? 'Loading' : 'Login'}
        </Button>
        {!isLoading && (
          <>
            <div className="alter-text">or</div>
            <Button secondary type="button">
              Register
            </Button>
          </>
        )}
      </Form>
    </PageLayout>
  )
}
