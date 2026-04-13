import { MoveRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import { featuredServices } from '../assets/assets'

const ServiceSection = () => {
  return (
    <section className='section-padding bg-black'>
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <div>
            <h2 className='heading-2 clash-display grad1 from-zinc-50'>
              Our Premium Fleet & <br className='' /> Services
            </h2>
            <p className='text-zinc-400 max-w-lg'>
              Discover the perfect vehicle for your needs, backed by unparalleled service and support.
            </p>
          </div>

          <Link to={'/fleet'} className='mt-4 sm:mt-0 flex items-center text-sky-500 hover:text-sky-400 transform-colors'>
            View All Cars <MoveRight className='ml-1 h-4 w-4' />
          </Link>

        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-16">
          {/* Card */}
          {
            featuredServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default ServiceSection
