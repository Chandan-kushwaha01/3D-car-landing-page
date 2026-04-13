import { ArrowRight } from 'lucide-react'
import React, { useRef, useState } from 'react'

const ServiceCard = ({ title, description, icon, imageSrc }) => {

  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  // Handle mouse enter
  const handleMouseEnter = () => {
    if (cardRef.current) {
      cardRef.current.addEventListener('mouseenter', () => {
        setIsHovered(true);
      });
    }
  }

  // Handle mouse leave
  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.addEventListener('mouseleave', () => {
        setIsHovered(false);
      });
    }
  }

  return (
    <div ref={cardRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={
      {
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    } className='min-h-[430px] relative overflow-hidden cursor-pointer transition-all duration-500'>


      {/* Text */}
      <div className="bg-gradient-to-b from-zinc-950 py-7 px-7 to-transparent">
        <h2 className="text-5xl clash-display">{title}</h2>
      </div>


      {/* Overlay Text */}
      {
        isHovered && (
          <div className="flex-col w-full absolute min-h-full bg-gradient-to-b from-zinc-950 to-transparent flex-1 px-8 top-0 center-item">
            <div className="mb-2">
              {icon}
            </div>
            <p className='text-center'>
              {description}
            </p>
          </div>
        )
      }


      {/* Button */}
      <div className="bg-gradient-to-t absolute bottom-0 from-zinc-950 py-7 px-7 to-transparent flex min-w-full justify-end">
        <div className="h-16 w-16 bg-zinc-100 rounded-full cursor-pointer hover:bg-sky-200 transition-all duration-300 ease-out hover:-translate-y-1 center-item">
          <ArrowRight className='text-zinc-800 font-semibold -rotate-45 hover:-translate-y-1 transition' />
        </div>
      </div>


    </div>
  )
}

export default ServiceCard
