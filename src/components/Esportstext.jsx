import React from 'react'
import Esports_text from '../assets/images/Esports_text.png'
import './Esportstext.css'
import minecraft_img_green from '../assets/images/minecraft_img_green.png'
import minecraft_img_black from '../assets/images/minecraft_img_black.png'

const Esportstext = () => {
  return (
    <>
      <div>
        <img className='minecraftLogo1' src={minecraft_img_green} alt="image" />
      </div>
      <div>
        <img className='EsportstextImage' src={Esports_text} alt="ESPORTS2023" />
      </div>
      <div>
        <img className='minecraftLogo2' src={minecraft_img_black} alt="image" />
      </div>
    </>
  )
}

export default Esportstext