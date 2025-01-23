"use client"

import { motion } from "framer-motion"

const educations = [
  {
    degree: "Master of Science in Computer Science",
    school: "University A",
    period: "2014 - 2016",
    details: "Specialized in Machine Learning and Artificial Intelligence",
  },
  {
    degree: "Bachelor of Science in Computer Engineering",
    school: "University B",
    period: "2010 - 2014",
    details: "Minor in Mathematics",
  },
]

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Education
        </motion.h2>
        <div className="space-y-8">
          {educations.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
              <h4 className="text-xl mb-2">{edu.school}</h4>
              <p className="text-gray-400 mb-2">{edu.period}</p>
              <p>{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

