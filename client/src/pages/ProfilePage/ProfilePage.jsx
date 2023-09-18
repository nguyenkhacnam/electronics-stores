import { Menu, Space } from 'antd'
import React from 'react'
import { GrCompliance, GrFavorite, GrLogout, GrUserExpert } from 'react-icons/gr'
import { useSelector } from 'react-redux'
import ProfileDetails from '../../components/ProfileDetails/ProfileDetails'

const ProfilePage = () => {
  const userData = useSelector(state => state?.user)
  console.log('userData', userData)
  return (
    <div className='lg:grid lg:grid-cols-4'>
      <div className='lg:col-span-1'>
        <Space>
          <Menu
            mode='inline'
            defaultOpenKeys={["accout"]}
            defaultSelectedKeys={["1"]}
            items={[
              { label: "Chi Tiết Tài Khoản", key: "accout",icon:<GrUserExpert className='header-icon'/> ,children: [
                { label: "Hồ Sơ", key: "1"}, 
                { label: "Địa Chỉ", key: "2"}, 
                { label: "Đổi Mật Khẩu", key: "3"}, 
                { label: "Cài Đặt Thông Báo", key: "4"}, 
              ], disabled: true},
              { label: "Lịch Sử Mua Hàng", key: "purchase", icon: <GrCompliance className='header-icon'/>},
              { label: "Danh Sách Yêu Thích", key: "favorites", icon: <GrFavorite className='header-icon' />},
              { label: "Đăng Xuất", key: "logout", danger: true, icon: <GrLogout className='header-icon'/>},
            ]}
          >
          </Menu>
        </Space>
      </div>
      <div className='lg:col-span-3'>
        <ProfileDetails />
      </div>
    </div> 
  )
}

export default ProfilePage