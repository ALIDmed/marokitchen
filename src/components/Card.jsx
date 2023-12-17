import React from 'react'

export const Card = ({cardImg,title,description}) => {
  return (
    <div className='card'>
        <div className='fav-icon'>
            //favoriteIcon
        </div>
        <div>
            <img src ={cardImg} className=''/>
        </div>
        <h3 className=''>{title}</h3>
        <p className=''>{description}</p>
    </div>
  )
}
