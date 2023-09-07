import React from 'react'
import { GoSearch } from 'react-icons/go'
import { AiOutlineUser } from 'react-icons/ai'
import { BsCart } from 'react-icons/bs'
import Search from '../Search/Search'
const Header = () => {
  return (
    // <div className='xl:container xl:mx-auto xl:w-[1500px]'>
    //   <div className='grid xl:grid-cols-12 xl:items-center'>
    //     <div className='xl:col-span-2 xl:flex xl:justify-center'>
    //       <h1>LOGO</h1>
    //     </div>
    //     <div className='col-span-8'>
    //       <div className='col-span-4'>
    //         <input type="text" placeholder='Tìm kiếm' className='' />
    //       </div>
    //       <div className='col-span-4'>
    //         <button>TÌM KIẾM</button>
    //       </div>

    //     </div>
    //     <div className='col-span-2 flex justify-center'>3</div>
    //   </div>
    // </div>
    <div className='border-b-[1px] border-[#E5E5E5]'>
      <div className='grid grid-cols-3 items-center gap-7 h-[55px]  px-[15px] max-w-[1500px]
        sm:h-[56px] sm:grid-cols-4
        md:h-[56px] 
        lg:h-[86px] lg:grid-cols-6
        xl:grid-cols-7 xl:mx-auto xl:px-[50px]
         2xl:grid-cols-8
        '>
        <div className='col-span-1 flex justify-center'>
          <img src="https://classyshop-codezeel.myshopify.com/cdn/shop/files/logo.png?v=1690278633&width=225" alt="" />
        </div>
        <div className='col-span-1
        sm:col-span-2
        lg:col-span-4
        xl:col-span-5
        2xl:col-span-6
        '>
          <Search />
        </div>
        <div className='col-span-1
        '>
          <div className='flex justify-between cursor-pointer'>
            <GoSearch className='header-icon lg:hidden hover:text-primary delay-150' />
            <div className='hover:text-primary delay-150
            sm:flex sm:gap-[2px] 
            '>
              <AiOutlineUser className='header-icon' />
              <p className='hidden md:block cursor-pointer md:font-semibold '>Đăng nhập</p>
            </div>
            <BsCart className='header-icon hover:text-primary delay-150' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header