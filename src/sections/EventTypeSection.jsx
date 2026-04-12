import { ArrowRight } from "lucide-react"
import { carUsageCategories } from "../assets/assets"
import CarCard from "../components/CarCard"

const EventTypeSection = () => {
  return (
    <section className="bg-black section-padding relative overflow-hidden">
      {/* BACKGROUND IMAGE LAYER - Control opacity here */}
      <div
        className="absolute inset-0 z-0 bg-[url(/wheel3.gif)] bg-no-repeat bg-cover bg-right-top opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* CONTENT LAYER - Kept relative and z-10 to stay above the background */}
      <div className="max-w-7xl mx-auto mb-24 relative z-10">
        {/* Title */}
        <div className="mb-20 flex justify-between items-end">
          {/* Text */}
          <div>
            <h2 className="heading-2 clash-display grad1 from-zinc-50 max-w-2xl">
              Perfect Ride for Every Occasion
            </h2>
            <p className="text-zinc-400 max-w-md">
              Find the ideal car for your business need, family adventures, or
              special movements.
            </p>
          </div>
          {/* Button placeholder */}
          <div className=" "></div>
          <button className="hidden md:hidden bg-blue-300 text-zinc-800 py-3 px-5 rounded-full cursor-pointer hover:bg-transparent border border-transparent hover:border-zinc-100 transition-all duration-200 ease-out hover:text-zinc-200 clash-display h-fit lg:centered-row gap-2">
            See All <ArrowRight className="w-8 text-sm" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
          {/* Carcard */}
          {carUsageCategories.map((event, index) => (
            <CarCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventTypeSection