import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkle, Search, MapPin, Calendar, ChevronDown } from 'lucide-react';

const BACKGROUND_GIFS = [
    '/hero_car.gif',
    '/hero_car2.gif',
    '/hero_car3.gif'
];

const HeroSection = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % BACKGROUND_GIFS.length);
        }, 9000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16 bg-black">

            {/* BACKGROUND GIF LAYER */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={BACKGROUND_GIFS[index]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 4, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                >
                    <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat scale-110"
                        style={{ backgroundImage: `url(${BACKGROUND_GIFS[index]})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
                </motion.div>
            </AnimatePresence>

            {/* Main Container - Structure Preserved */}
            <div className="mx-auto container absolute px-6 bottom-10 z-10 flex flex-col gap-16">


                {/* Existing Content Row - Structure Preserved */}
                <div className="z-50 gap-4 md:centered-row lg:gap-80">
                    <div className="z-10 left">
                        <div className="max-w-3xl col mx-auto">
                            <div className="mb-4">
                                <div className="bg-zinc-300/20 backdrop-blur-md text-zinc-50 rounded-full px-4 py-1 text-sm font-medium inline-flex items-center border border-white/5 clash-display">
                                    <Sparkle className='h-3.5 w-3.5 mr-1 text-sky-400' /> Your Journey, Elevated
                                </div>
                            </div>
                            <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold lg:leading-20 mb-6 clash-display text-nowrap tracking-tight text-white'>
                                <span className='grad1 clash-display'>Premium Car</span> <br /> rental
                            </h1>
                        </div>
                    </div>
                    <div className="right">
                        <p className="text-lg z-10 text-gray-300 mb-8 max-w-md leading-relaxed border-l border-white/10 pl-6">
                            Unlock unparalleled freedom with our premium car rental service. <br className="hidden md:block" /> Experience luxury, comfort, and seamless booking.
                        </p>
                    </div>
                </div>

                {/* --- PREMIUM GLASS SEARCH BAR --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="w-full max-w-6xl mx-auto"
                >
                    <div className="bg-zinc-900/40 backdrop-blur-2xl rounded-2xl md:rounded-full p-2 flex flex-col md:flex-row items-center border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

                        {/* Pickup Point */}
                        <div className="flex-1 w-full px-8 py-3 md:border-r border-white/5 group cursor-pointer transition-all hover:bg-white/5 rounded-t-2xl md:rounded-l-full md:rounded-tr-none">
                            <div className="flex items-center gap-2 mb-1">
                                <MapPin size={12} className="text-sky-400 opacity-70" />
                                <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-[0.2em] clash-display">Pickup Point</label>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-zinc-100 italic">Enter location...</span>
                                <ChevronDown size={14} className="text-zinc-600 group-hover:text-white transition-colors" />
                            </div>
                        </div>

                        {/* Date Range - Combined for a sleeker look */}
                        <div className="flex-[1.5] w-full px-8 py-3 md:border-r border-white/5 group cursor-pointer transition-all hover:bg-white/5">
                            <div className="flex items-center gap-2 mb-1">
                                <Calendar size={12} className="text-sky-400 opacity-70" />
                                <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-[0.2em] clash-display">Rental Duration</label>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-medium text-zinc-500">Pick-up Date</span>
                                <div className="h-px w-4 bg-zinc-700" />
                                <span className="text-sm font-medium text-zinc-500">Return Date</span>
                            </div>
                        </div>

                        {/* Premium CTA Button */}
                        <div className="p-1 w-full md:w-auto">
                            <button className="w-full md:w-auto grad1 bg-sky-500 text-white px-12 py-4 rounded-xl md:rounded-full flex items-center justify-center gap-3 transition-all hover:brightness-125 active:scale-95 shadow-xl shadow-sky-500/20">
                                <Search size={18} strokeWidth={3} />
                                <span className="font-bold text-xs uppercase tracking-[0.2em] clash-display">Find My Car</span>
                            </button>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default HeroSection;