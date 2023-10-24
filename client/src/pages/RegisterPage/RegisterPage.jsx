import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useResourceMutation } from '../../hooks/useResourceMutation'
import { userRegister } from '../../services/api/userService'
import { error, success } from '../../components/Message/Message'
import { Button, Form, Image, Input, Space } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

const RegisterPage = () => {
  const navigation = useNavigate()

  const [form] = Form.useForm()

  const mutation = useResourceMutation((data) => userRegister(data))
  const { data, isLoading, isSuccess, isError } = mutation
  console.log('Đăng kí', data)

  const onFinish = async (values) => {
    try {
      const { email, password, confirmPassword } = values
      mutation.mutate({ email, password, confirmPassword })
    } catch (error) {
      console.log('err', error)
    }
  }

  useEffect(() => {
    if (data?.status === 'ERR') {
      error(data.message)
    } else if (isError) {
      error(data.message)
    } else if (isSuccess) {
      success()
      navigation('/login')
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

          <Form.Item
            name='confirmPassword'
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
              Đăng kí
            </Button>
          </Form.Item>
          <Link className='login-form-forgot flex justify-center' to=''>
            Quên mật khẩu?
          </Link>

          <Form.Item className='flex justify-center'>
            <div>
              Bạn đã có tài khoản? <Link to='/login'> Đăng nhập</Link>
            </div>
          </Form.Item>
        </Form>
      </Space>
    </div>
  )
}

export default RegisterPage
