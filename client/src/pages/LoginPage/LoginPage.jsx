import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userLogin } from '../../services/api/userService'
import { useResourceMutation } from '../../hooks/useResourceMutation'
import { error, success } from '../../components/Message/Message'
import { Button, Checkbox, Form, Image, Input, Space } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import './index.css'

const LoginPage = () => {
  const [form] = Form.useForm()

  const navigation = useNavigate()

  const mutation = useResourceMutation((data) => userLogin(data))
  const { data, isLoading, isError, isSuccess } = mutation
  console.log('Login', data)

  const onFinish = async (values) => {
    try {
      const { email, password } = values
      mutation.mutate({ email, password })
    } catch (error) {
      console.log('err', error)
    }
  }

  useEffect(() => {
    if (data?.status === 'ERR') {
      error()
    } else if (isError) {
      error()
    } else if (isSuccess) {
      success()
      localStorage.setItem('accessToken', JSON.stringify(data?.accessToken))
      navigation('/')
    }
  }, [data, isError, isSuccess, navigation])

  return (
    <div className='grid grid-cols-1 grid-rows-1 max-w-[380px] h-screen mx-auto items-center'>
      <Space
        direction='vertical'
        size={70}
        style={{
          display: 'flex'
        }}
      >
        <div className='flex justify-center'>
          <Image
            width={200}
            preview={false}
            src='https://www.electrolux.vn/globalassets/3-images/logos/electrolux_logo_sg.svg'
            alt='Logo'
          />
        </div>
        <Form
          form={form}
          name='normal_login'
          className='login-form'
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name='email'
            rules={[
              {
                required: true,
                message: 'Tài khoản bắt buộc!',
                type: 'email'
              }
            ]}
            hasFeedback
          >
            <Input
              size='large'
              prefix={<UserOutlined className='site-form-item-icon' />}
              placeholder='Email'
              className='h-9 rounded-none'
            />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[
              {
                required: true,
                message: 'Mật khẩu bắt buộc!'
              }
            ]}
            hasFeedback
          >
            <Input.Password
              size='large'
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='Mật khẩu'
              className='h-9 rounded-none'
            />
          </Form.Item>

          <Form.Item name='remember' valuePropName='checked'>
            <Checkbox className='rounded-none'>Lưu thông tin</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              loading={isLoading}
              size='large'
              type='primary'
              htmlType='submit'
              className='login-form-button flex w-full justify-center h-8 rounded-none'
              style={{
                textTransform: 'uppercase',
                background: '#011e41'
              }}
            >
              Đăng nhập
            </Button>
          </Form.Item>
          <Link className='login-form-forgot flex justify-center' to=''>
            Quên mật khẩu?
          </Link>

          <Form.Item className='flex justify-center'>
            <div>
              Bạn chưa có tài khoản ư? <Link to='/register'> Đăng ký</Link>
            </div>
          </Form.Item>
        </Form>
      </Space>
    </div>
  )
}

export default LoginPage
