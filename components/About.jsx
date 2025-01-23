"use client"

import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl max-w-3xl mx-auto"
        >
          I'm Jay Parmar, a passionate software engineer with a strong foundation in computer science and a love for
          creating efficient, scalable solutions. With experience in full-stack development, I enjoy tackling complex
          problems and turning ideas into reality through code.
        </motion.p>
      </div>
    </section>
  )
}

export default About

