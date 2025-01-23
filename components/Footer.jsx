import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Jay Parmar. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-blue-400" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-blue-400" />
            </a>
            <a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer">
              <SiLeetcode className="text-2xl hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

