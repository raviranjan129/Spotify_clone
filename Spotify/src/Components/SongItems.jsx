import React from 'react'

const SongItems = ({name,image,desc,id}) => {
  return (
    <div className='min-w-[180px] rounded cursor-pointer  hover:bg-[#ffffff26]'>
      <img className='rounded' src={image} alt="" />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200'>{desc}</p>
    </div>
  )
}

export default SongItems
