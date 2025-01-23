"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/jayparmar/project1",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2",
    technologies: ["Python", "Django", "PostgreSQL"],
    link: "https://github.com/jayparmar/project2",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3",
    technologies: ["Vue.js", "Express", "MySQL"],
    link: "https://github.com/jayparmar/project3",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Project 4",
    description: "A brief description of Project 4",
    technologies: ["React Native", "Firebase"],
    link: "https://github.com/jayparmar/project4",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Project 5",
    description: "A brief description of Project 5",
    technologies: ["Angular", "Spring Boot", "Oracle"],
    link: "https://github.com/jayparmar/project5",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Project 6",
    description: "A brief description of Project 6",
    technologies: ["Flutter", "GraphQL", "AWS"],
    link: "https://github.com/jayparmar/project6",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-blue-600 text-sm rounded-full px-3 py-1">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

