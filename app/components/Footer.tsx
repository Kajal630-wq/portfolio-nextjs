import Link from "next/link";
// import { Github, Twitter, Linkedin, Mail } from "lucide-react"; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo / Bio */}
          <div>
            <h3 className="text-xl font-bold mb-4">Your Name</h3>
            <p className="text-gray-400 text-sm">
              Building creative and performant web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#home" className="hover:text-white transition">Home</Link></li>
              <li><Link href="#about" className="hover:text-white transition">About</Link></li>
              <li><Link href="#projects" className="hover:text-white transition">Projects</Link></li>
              <li><Link href="#contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition">
                <Github size={24} />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition">
                <Twitter size={24} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition">
                <Linkedin size={24} />
              </a>
              <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-white transition">
                <Mail size={24} />
              </a>
            </div>
          </div> */}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          © {currentYear} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}