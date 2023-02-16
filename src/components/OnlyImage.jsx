import React from 'react'
import imgLamps from '../assets/img/imgLamps.png'
import style from './OnlyImage.module.scss'

const OnlyImage = () => {
  return (
    <div className={style.container}>
      <img src={imgLamps} alt='imgLamps' />
    </div>
  )
}

export default OnlyImage