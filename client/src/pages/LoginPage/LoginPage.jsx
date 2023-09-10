import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userLogin } from '../../services/api/userService'
import { useResourceMutation } from '../../hooks/useResourceMutation'
import Loading from '../../components/Loading/Loading'
import { error, success } from '../../components/Message/Message'

const LoginPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigate()

  const mutation = useResourceMutation((data) => userLogin(data))
  const { data, isLoading, isError, isSuccess } = mutation

  console.log('mutation', data)
  
  const handleNavigationRegister = () => {
    navigation('/register')
  }

  const handleEmailChange = (e) => {
    console.log('email', e.target.value)
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    console.log('password', e.target.value)
    setPassword(e.target.value)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    mutation.mutate({ email, password })
    console.log('submit login', email, password)
  }

  useEffect(() => {
    if ( data?.status === 'ERR') {
      error()
    }else if (isError) {
      error()
    } else if (isSuccess) {
      success()
      navigation('/')
      console.log('data', data)
      localStorage.setItem('accessToken', data?.accessToken)
    }
  }, [isSuccess, isError, data?.status])

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={handleEmailChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="/" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={handlePasswordChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            {data?.status === 'ERR' ? data?.message : ''}
            <Loading 
              isLoading={isLoading}
            >
              <button
                type="submit"
                onClick={handleLogin}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </Loading>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <span 
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
            onClick={handleNavigationRegister}  
          >
            Register
          </span>
        </p>
      </div>
    </div >
  )
}

export default LoginPage