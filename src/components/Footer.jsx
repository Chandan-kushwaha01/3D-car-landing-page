import { NavLink } from "react-router-dom";
import {
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Phone,
  MapPin,
  Gauge,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white  border-t border-sky-500/10">
      {" "}
      {/* Updated border color */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 relative">
                <Gauge className="w-8 h-8 text-sky-400" />
              </div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r clash-display from-sky-500 to-zinc-900">
                {" "}
                {/* Updated gradient */}
                DriveWell <sup className="text-xs ml-1 text-zinc-700">TM</sup>
              </h2>
            </div>
            <p className="text-gray-600 max-w-md">
              Your premier partner for seamless car rentals. Explore our diverse
              fleet and embark on unforgettable journeys with comfort and style.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-sky-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-sky-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-sky-400 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:ml-20">
            <h3 className="clash-display text-zinc-800  mb-4 pb-2 border-b border-sky-500/10">
              {" "}
              {/* Updated border color */}
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="text-gray-600 hover:text-sky-400 transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/fleet"
                  className="text-gray-600 hover:text-sky-400 transition-colors"
                >
                  Fleet
                </NavLink>
              </li>{" "}
              {/* Updated path */}
              <li>
                <NavLink
                  to="/blog"
                  className="text-gray-600 hover:text-sky-400 transition-colors"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-gray-600 hover:text-sky-400 transition-colors"
                >
                  About Us
                </NavLink>
              </li>{" "}
              {/* Updated path */}
              <li>
                <NavLink
                  to="/booking"
                  className="text-gray-600 hover:text-sky-400 transition-colors"
                >
                  Book Now
                </NavLink>
              </li>{" "}
              {/* Updated path */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="clash-display text-zinc-800  mb-4 pb-2 border-b border-sky-500/10">
              {" "}
              {/* Updated border color */}
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-600">
                <Mail size={16} className="text-sky-500" />{" "}
                {/* Updated icon color */}
                <span>info@drivewell.com</span> {/* Updated email */}
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Phone size={16} className="text-sky-500" />{" "}
                {/* Added phone icon */}
                <span>+1 (555) 123-4567</span> {/* Dummy phone number */}
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <MapPin size={16} className="text-sky-500" />{" "}
                {/* Added location icon */}
                <span>123 Dream Drive, London, UK</span> {/* Dummy address */}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sky-500/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          {" "}
          {/* Updated border color */}
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} DriveWell. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-sky-400 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-sky-400 text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
