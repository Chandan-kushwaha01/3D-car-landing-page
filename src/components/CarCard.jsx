import React from 'react'
import BookNowButton from './BookNowButton'

const CarCard = ({ image, name }) => {
  return (
    <div style={
      {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    }
      className='h-[400px] lg:h-[380px] rounded cursor-pointer flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 ease-in-out'
    >


      {/* Text */}
      <div className="bg-gradient-to-b w-full from-zinc-950 to-transparent p-7">
        <h2 className='text-3xl clash-display'>
          {name}
        </h2>
      </div>


      {/* Buttons */}
      <div className="bottom-0 bg-gradient-to-t w-full from-zinc-950 to-transparent centered-row justify-between p-7">
        {/* Price per day */}
        <p className='text-lg clash-display'>रु100/day</p>
        {/* Book Btn */}
        <BookNowButton />
      </div>
    </div>
  )
}

export default CarCard
