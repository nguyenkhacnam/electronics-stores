import React from 'react'

const Search = () => {
  return (
    <div className='hidden 
    md:justify-center
    lg:flex  lg:gap-[10px]
    '>
      <input type="text" 
        placeholder='Tìm Kiếm'
        className='border-[1px] outline-none flex-1 rounded-btn-radius p-[10px] pl-[20px] text-[14px] h-[40px] max-w-[590px] placeholder:font-normal placeholder:text-black'/>
      <button className='w-[90px] h-[40px] bg-primary rounded-btn-radius text-btn-text-color text-btn-font-size font-semibold hover:bg-[#222] hover:text-white delay-delay-100'>Tìm Kiếm</button>
    </div>
  )
}

export default Search