import React, { useRef, useState } from 'react'
import styled from 'styled-components'

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const ferror = useRef();
  const lerror = useRef();
  const eerror = useRef();
  const perror = useRef();
  const cperror = useRef();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  function validationForm() {
    if (formData.firstName.trim() === "") {
      ferror.current.textContent = "First Name cannot be empty"
    } else {
      ferror.current.textContent = ""
    }

    if (formData.lastName.trim() === "") {
      lerror.current.textContent = "Last Name cannot be empty"
    } else {
      lerror.current.textContent = ""
    }

    if (formData.email.trim() === "") {
      eerror.current.textContent = "Email cannot be empty"
    } else if (!emailPattern.test(formData.email)) {
      eerror.current.textContent = "Email is not in a valid format"
    } else {
      eerror.current.textContent = ""
    }

    if (formData.password === "") {
      perror.current.textContent = "Password cannot be empty"
    } else if (formData.password.length < 8) {
      perror.current.textContent = "Password should have at least 8 characters"
    } else {
      perror.current.textContent = ""
    }

    if (formData.confirmPassword !== formData.password) {
      cperror.current.textContent = "Passwords do not match"
    } else {
      cperror.current.textContent = ""
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    validationForm()
    console.log('Form submitted successfully')
    // You can clear the form here if needed:
    // setFormData({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          data-testid="first-name-id"
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <p data-testid="first-name-error-id" className="error" ref={ferror}></p>

        <input
          data-testid="last-name-id"
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <p data-testid="last-name-error-id" className="error" ref={lerror}></p>

        <input
          data-testid="email-id"
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleInputChange}
        />
        <p data-testid="email-error-id" className="error" ref={eerror}></p>

        <input
          data-testid="password-id"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <p data-testid="password-error-id" className="error" ref={perror}></p>

        <input
          data-testid="confirm-password-id"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        <p
          data-testid="confirm-password-error-id"
          className="error"
          ref={cperror}
        ></p>

        <button type="submit">Sign Up</button>
      </form>
    </Wrapper>
  )
}

export default SignUpForm

const Wrapper = styled.div`
  margin-top: 24px;
  font-family: sans-serif;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    padding: 8px 12px;
    font-size: 18px;
    margin-bottom: 6px;
    width: clamp(200px, 40%, 400px);
  }

  button {
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    background-color: #333;
    color: #fff;
    cursor: pointer;
    margin-top: 24px;

    &:hover {
      opacity: 0.8;
    }
  }

  .error {
    margin: 0 0 24px 0;
    color: red;
  }
`
