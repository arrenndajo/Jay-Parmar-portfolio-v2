"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"
import Image from "next/image"

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-800">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Jay Parmar"
            width={200}
            height={200}
            className="rounded-full mx-auto"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-4"
        >
          Jay Parmar
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl mb-6"
        >
          Software Engineer
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-4"
        >
          <a href="https://github.com/jayparmar" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl hover:text-blue-400" />
          </a>
          <a href="https://linkedin.com/in/jayparmar" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl hover:text-blue-400" />
          </a>
          <a href="https://leetcode.com/jayparmar" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="text-3xl hover:text-blue-400" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

