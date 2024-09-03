import React from 'react'
import { albumsData } from '../assets/assets/assets'
import AlbumItems from './AlbumItems'
import Navbar from './Navbar'
import { songsData } from '../assets/assets/assets'
import SongItems from './SongItems'

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
        {albumsData.map((item,index)=>(
<AlbumItems 
key={index}
name={item.name}
desc={item.desc}
id={item.id}
image={item.image}
/>
))}
        </div>

      </div>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Todays biggest hits</h1>
        <div className='flex overflow-auto'>
       {songsData.map((items,index)=>(
        <SongItems 
        key={index} 
        name={items.name}
         desc={items.desc} 
         image={items.image}
          id={items.id} 
          />
       ))}
        </div>

      </div>
    </>
  )
}

export default DisplayHome
