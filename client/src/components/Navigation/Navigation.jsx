import React from 'react'
import { TfiMenuAlt } from 'react-icons/tfi'

const Navigation = () => {
  return (
    <div className='
    '>
      <div className='grid grid-cols-7 max-w-1500  h-[50px] items-center px-15
      sm:
      md:
      xl:mx-xl-auto xl:px-xl-px
      '>
        <div className='col-span-2'>
          <div className='flex gap-[10px]'>
            <TfiMenuAlt className='header-icon '/>
            <h2 className='hidden
              xl:flex
            '>Mua Sắm Theo Danh Mục</h2>
          </div>
        </div>
        <div className='col-span-4'>
          <ul className='flex gap-[30px] items-center'>
            <li className='' >Trang Chủ</li>
            <li  className=''>Trang Chủ</li>
          </ul>
        </div>
        <div className='col-span-1'>
          3
        </div>
      </div>
    </div>
  )
}

export default Navigation