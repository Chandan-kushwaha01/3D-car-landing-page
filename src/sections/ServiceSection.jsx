import { MoveRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion' // Added Framer Motion
import ServiceCard from '../components/ServiceCard'
import { featuredServices } from '../assets/assets'

const ServiceSection = () => {
  // Animation variants for the container to stagger the children cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each card's animation
      },
    },
  };

  // Animation variants for each individual card
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section className='section-padding bg-black'>
      <div className="mx-auto max-w-7xl">

        {/* Animated Heading Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12"
        >
          <div>
            <h2 className='heading-2 clash-display grad1 from-zinc-50'>
              Our Premium Fleet & <br className='' /> Services
            </h2>
            <p className='text-zinc-400 max-w-lg'>
              Discover the perfect vehicle for your needs, backed by unparalleled service and support.
            </p>
          </div>

          <motion.div
            whileHover={{ x: 5 }} // Subtle interactive hover for the link
            className='mt-4 sm:mt-0'
          >
            <Link to={'/fleet'} className='flex items-center text-sky-500 hover:text-sky-400 transform-colors font-medium'>
              View All Cars <MoveRight className='ml-1 h-4 w-4' />
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-16"
        >
          {
            featuredServices.map((service, index) => (
              <motion.div key={index} variants={cardVariants}>
                <ServiceCard {...service} />
              </motion.div>
            ))
          }
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceSection