import React from 'react'

const BookNowButton = ({ type }) => {
  return (
    <button className={`${type === 2 ? 'bg-blue-300' : 'bg-zinc-200'
      } text-zinc-800 py-3 px-5 rounded-full cursor-pointer hover:bg-transparent border border-transparent hover:border-zinc-100 transition-all duration-200 ease-out hover:text-zinc-200 clash-display`}>
      Book Now
    </button>
  )
}

export default BookNowButton
