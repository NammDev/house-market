import { useState } from 'react'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import routes from '../config/routes'
import { Link } from 'react-router-dom'

function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const { name, email, password, confirmPassword } = formData

  const handleOnChange = (e) => {
    setFormData((state) => ({
      ...state,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <>
      <div className='pageContainer'>
        <header>
          <p className='pageHeader'>Welcome to Market!</p>
        </header>
        <form>
          <input
            type='text'
            className='nameInput'
            placeholder='Username'
            id='name'
            value={name}
            onChange={handleOnChange}
          />
          <input
            type='email'
            className='emailInput'
            placeholder='Email'
            id='email'
            value={email}
            onChange={handleOnChange}
          />
          <div className='passwordInputDiv'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='passwordInput'
              placeholder='Password'
              id='password'
              value={password}
              onChange={handleOnChange}
            />
            <img
              src={visibilityIcon}
              alt='show Password'
              className='showPassword'
              onClick={() => setShowPassword((state) => !state)}
            />
          </div>
          <div className='passwordInputDiv'>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              className='passwordInput'
              placeholder='Confirm Password'
              id='confirmPassword'
              value={confirmPassword}
              onChange={handleOnChange}
            />
            <img
              src={visibilityIcon}
              alt='show Password'
              className='showPassword'
              onClick={() => setShowConfirmPassword((state) => !state)}
            />
          </div>
          <Link to={routes.forgotPassword} className='forgotPasswordLink'>
            Forgot Password
          </Link>
          <div className='signUpBar'>
            <p className='signUpText'>Sign Up</p>
            <button className='signUpButton'>
              <ArrowRightIcon fill='#fff' width='34px' height='34px' />
            </button>
          </div>
        </form>
        <Link to={routes.signIn} className='registerLink'>
          Sign In
        </Link>
      </div>
    </>
  )
}

export default SignUp
