"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Company A",
    period: "Jan 2021 - Present",
    responsibilities: [
      "Led development of a microservices-based application",
      "Implemented CI/CD pipelines using Jenkins and Docker",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    title: "Software Engineer",
    company: "Tech Company B",
    period: "Jun 2018 - Dec 2020",
    responsibilities: [
      "Developed and maintained RESTful APIs using Node.js and Express",
      "Worked on front-end development using React and Redux",
      "Collaborated with the design team to implement responsive UI",
    ],
  },
  {
    title: "Junior Developer",
    company: "Tech Startup C",
    period: "Sep 2016 - May 2018",
    responsibilities: [
      "Assisted in the development of a web application using Angular",
      "Worked on database design and implementation using MongoDB",
      "Participated in daily stand-ups and sprint planning meetings",
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Work Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
              <h4 className="text-xl mb-2">{exp.company}</h4>
              <p className="text-gray-400 mb-4">{exp.period}</p>
              <ul className="list-disc list-inside">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="mb-2">
                    {resp}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

