// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                className="h-8 w-auto"
                src="https://i.ibb.co/BcFgGFr/Blogimg.png"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/upload"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                }
              >
                Upload
              </NavLink>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/calendar"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                }
              >
                Calendar
              </NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                // Icon when menu is open
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              end
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/upload"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              }
            >
              Upload
            </NavLink>
            <NavLink
              to="/About"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/calendar"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              }
            >
              Calendar
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
