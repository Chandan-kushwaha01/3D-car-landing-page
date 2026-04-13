import audi from "./images/audi.jpg";
import car1 from "./images/car1.png";
import car2 from "./images/car2.png";
import car3 from "./images/car3.png";
import car4 from "./images/car4.png";
import car5 from "./images/car5.png";
import car6 from "./images/car6.png";
import car7 from "./images/car7.png";
import car8 from "./images/car8.png";
import car9 from "./images/car9.png";
import car10 from "./images/car10.png";
import car11 from "./images/car11.png";
import carin from "./images/carin.png";

// Feature Icons
import { FaBluetooth, FaChargingStation } from "react-icons/fa";
import { BiChild, BiSpeaker } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { AirVent } from "lucide-react";

import {
  Car,
  Fuel,
  LifeBuoy,
  MapPin,
  BatteryCharging,
  ShieldCheck,
  BatteryChargingIcon,
  Clock10,
  Newspaper,
  Sparkles,
} from "lucide-react";

const images = {
  car1,
  audi,
  car2,
  car3,
  car4,
  car5,
  car6,
  car7,
  car8,
  car9,
  car10,
  car11,
  carin,
};

const featuredServices = [
  {
    title: "Luxury Sedans",
    description:
      "Experience elegance and comfort with our top-tier luxury sedans, perfect for business or leisure.",
    icon: <Car size={24} />,
    imageSrc: images.car2, // Placeholder for specific car image
    link: "/fleet#luxury",
  },
  {
    title: "SUVs & Crossovers",
    description:
      "Spacious and versatile vehicles for family trips, group adventures, or demanding terrain.",
    icon: <Fuel size={24} />, // Represents fuel/journey
    imageSrc: images.car8,
    link: "/fleet#suv",
  },
  {
    title: "Electric Vehicles",
    description:
      "Drive green with our selection of modern electric cars, combining sustainability with performance.",
    icon: <BatteryCharging size={24} />,
    imageSrc: images.car3,
    link: "/fleet#ev",
  },
  {
    title: "24/7 Roadside Support",
    description:
      "Peace of mind with around-the-clock assistance for any unexpected situations on your journey.",
    icon: <LifeBuoy size={24} />, // Represents support/safety
    imageSrc: images.car11, // Placeholder for support image
    link: "/services#support",
  },
  {
    title: "Flexible Pickup & Dropoff",
    description:
      "Choose your convenient location for vehicle pickup and return, tailored to your schedule.",
    icon: <MapPin size={24} />,
    imageSrc: images.car7,
    link: "/services#pickup",
  },
  {
    title: "Premium Insurance",
    description:
      "Comprehensive coverage options for a worry-free rental experience.",
    icon: <ShieldCheck size={24} />, // Represents insurance/protection
    imageSrc: images.carin,
    link: "/services#insurance",
  },
];

const carUsageCategories = [
  {
    name: "Business Trips",
    image: images.car2,
  },
  { name: "Family Vacations", image: images.car8 },
  { name: "Weekend Getaways", image: images.car1 },
  {
    name: "Special Events",

    image: images.car11,
  },
];

const FEATURE_ICONS = [
  {
    name: "Bluetooth",
    icon: FaBluetooth,
    label: "Bluetooth",
    colorClass: "text-sky-500/90", // Example of a specific color class if needed
  },
  {
    name: "AC",
    icon: AirVent,
    label: "A/C",
    colorClass: "text-zinc-400",
  },
  {
    name: "GPS",
    icon: FaLocationDot,
    label: "GPS Tracker",
    colorClass: "text-zinc-400",
  },
  {
    name: "Fast Charging",
    icon: FaChargingStation,
    label: "Fast Charging",
    colorClass: "text-zinc-400",
  },
  {
    name: "Premium Audio",
    icon: BiSpeaker,
    label: "Premium Audio",
    colorClass: "text-zinc-400",
  },
  {
    name: "Child Seats",
    icon: BiChild,
    label: "Child Seats",
    colorClass: "text-zinc-400",
  },
  // Add more features here as needed
  // { name: "Sunroof", icon: RiSunroofLine, label: "Sunroof" },
];

const dummyCarImages = [
  images.car2,
  images.car6,
  images.car1,
  images.car3,
  images.car11,
  images.car5,
  images.car10,
  images.car9,
];

const mockCarsData = [
  {
    id: "CAR001",
    name: "Luxury Sedan A",
    type: "Sedan",
    capacity: 4,
    pricePerHour: 35.0,
    color: "Black",
    transmission: "Automatic",
    fuelType: "Gasoline",
    features: ["GPS", "Bluetooth", "AC"],
    image: dummyCarImages[0],
  },
  {
    id: "CAR002",
    name: "Family SUV X",
    type: "SUV",
    capacity: 7,
    pricePerHour: 45.0,
    color: "White",
    transmission: "Automatic",
    fuelType: "Gasoline",
    features: ["GPS", "AC", "Child Seats"],
    image: dummyCarImages[1],
  },
  {
    id: "CAR003",
    name: "Sporty Coupe Z",
    type: "Sports",
    capacity: 2,
    pricePerHour: 60.0,
    color: "Red",
    transmission: "Manual",
    fuelType: "Gasoline",
    features: ["GPS", "Bluetooth", "Premium Audio"],
    image: dummyCarImages[2],
  },
  {
    id: "CAR004",
    name: "Eco Electric 500",
    type: "EV",
    capacity: 5,
    pricePerHour: 40.0,
    color: "Blue",
    transmission: "Automatic",
    fuelType: "Electric",
    features: ["GPS", "Bluetooth", "Fast Charging"],
    image: dummyCarImages[3],
  },
  {
    id: "CAR005",
    name: "Premium Sedan B",
    type: "Sedan",
    capacity: 4,
    pricePerHour: 38.0,
    color: "White",
    transmission: "Automatic",
    fuelType: "Gasoline",
    features: ["GPS", "Bluetooth", "Sunroof"],
    image: dummyCarImages[4],
  },
  {
    id: "CAR006",
    name: "Compact Hatch 20",
    type: "Compact",
    capacity: 4,
    pricePerHour: 25.0,
    color: "Gray",
    transmission: "Manual",
    fuelType: "Gasoline",
    features: ["AC", "Premium Audio"],
    image: dummyCarImages[5],
  },
  {
    id: "CAR007",
    name: "Luxury SUV Y",
    type: "SUV",
    capacity: 7,
    pricePerHour: 55.0,
    color: "Black",
    transmission: "Automatic",
    fuelType: "Diesel",
    features: ["GPS", "AC", "Leather Seats"],
    image: dummyCarImages[6],
  },
  {
    id: "CAR008",
    name: "Electric Sportster",
    type: "EV",
    capacity: 2,
    pricePerHour: 65.0,
    color: "Silver",
    transmission: "Automatic",
    fuelType: "Electric",
    features: ["GPS", "Premium Audio", "Heated Seats"],
    image: dummyCarImages[7],
  },
];

const togglerBtns = [
  {
    id: "001",
    icon: <Newspaper className="w-10 h-10" />,
    name: "Seamless booking",
    action: null,
    isPlaying: true,
  },
  {
    id: "002",
    icon: <Sparkles className="w-14 h-14" />,
    name: "Premium privileges for regular customers",
    action: null,
    isPlaying: false,
  },
  {
    id: "003",
    icon: <Clock10 className="w-25 h-25" />,
    name: "Change or cancel your booking upto 72 hours before pickup time",
    action: null,
    isPlaying: false,
  },
  {
    id: "004",
    icon: <BatteryChargingIcon className="w-10 h-15" />,
    name: "Free Charging",
    action: null,
    isPlaying: false,
  },
];

const goodColors = [
  // Classic & Common Solids
  "#4682B4", // Steel Blue Metallic (Strong, deep blue with metallic
  "#000000", // Black (Classic, timeless)
  "#36454F", // Charcoal Gray (Dark, sophisticated)
  "#E6E6FA", // Lavender White (Soft, slightly off-white)
  "#800000", // Maroon (Deep, rich red)
  "#000080", // Navy Blue (Dark, elegant blue)
  "#808080", // Gray (Neutral, versatile)
  "#FFD700", // Gold (Bright, luxurious yellow)
  "#C0C0C0", // Silver (Bright, reflective gray)
  "#228B22", // Forest Green (Deep, earthy green)

  // Modern Metallics & Pearls (approximated with hex codes)
  "#A9A9A9", // Dark Gray Metallic (Common, sleek)
  "#C0C0C0", // Silver Metallic (Timeless, reflects light well)
  "#F5F5DC", // Pearl White (Soft, creamy white with subtle shimmer)
  "#4682B4", // Steel Blue Metallic (Strong, deep blue with metallic sheen)
  "#8B0000", // Dark Red Metallic (Deep, lustrous red)
  "#5F9EA0", // Cadet Blue Metallic (Unique, muted blue-green)
  "#6B8E23", // Olive Drab (Subtle, rugged green)
  "#DAA520", // Goldenrod (Warm, understated gold/bronze)
  "#708090", // Slate Gray Metallic (Slightly bluish-gray, sophisticated)
  "#BDB76B", // Dark Khaki (Earth tone, military-inspired)
];

export {
  images,
  featuredServices,
  carUsageCategories,
  FEATURE_ICONS,
  dummyCarImages,
  mockCarsData,
  togglerBtns,
  goodColors,
};
