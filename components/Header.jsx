"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = (e, id) => {
    e.preventDefault()
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed w-full z-50 bg-gray-800 bg-opacity-90">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="text-2xl font-bold">
            Jay Parmar
          </Link>
        </motion.div>
        <nav className="hidden md:flex space-x-4">
          {["about", "skills", "projects", "experience", "education", "contact"].map((item) => (
            <motion.div key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a href={`#${item}`} onClick={(e) => handleScroll(e, item)} className="hover:text-blue-400">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </motion.div>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-800 py-2"
        >
          {["about", "skills", "projects", "experience", "education", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => handleScroll(e, item)}
              className="block px-4 py-2 hover:bg-gray-700"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  )
}

export default Header

