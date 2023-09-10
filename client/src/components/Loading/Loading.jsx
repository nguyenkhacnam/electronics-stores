import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
import React from 'react'

const Loading = ({children, isLoading, delay = 200}) => {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );
  // console.log('isLoading', isLoading)
  return (
    <Spin indicator={antIcon} spinning={isLoading} delay={delay}>
      {children}
    </Spin>
  )
}

export default Loading