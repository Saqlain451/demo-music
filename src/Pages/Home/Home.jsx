import React from 'react'
import Music from '../../Components/Music'
import { useGlobalHook } from '../../Hooks/Context'
import './home.css'
const Home = () => {
  const { songDetails } = useGlobalHook();
  const musicDtls = {
    title: songDetails.title,
    img: songDetails.img, 
    artist: songDetails.artis, 
    music: songDetails.audio,
  }
  return (
    <section className='music-player'>
      <div className="card-wrpper">

        <Music {...musicDtls} />
        
      </div>
    </section>
  )
}

export default Home;