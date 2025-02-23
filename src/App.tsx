import { Github, Linkedin, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Irfad KP</h1>
          <p className="text-xl text-gray-300 mb-8">Full Stack Developer</p>
          
          <div className="flex gap-4 mb-8">
            <a href="mailto:irfadkodapparambil@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a href="https://www.linkedin.com/in/irfadkp" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/irfadkp" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>

          <p className="text-gray-300 max-w-2xl">
            Experienced Full Stack Developer with expertise in building scalable web applications using modern technologies.
            Passionate about creating efficient, user-friendly solutions and staying current with emerging tech trends.
          </p>
        </div>
      </header>

      {/* Experience Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          
          <div className="space-y-8">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Senior Software Engineer</h3>
              <p className="text-gray-400 mb-4">Accenture • 2021 - Present</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Led development of enterprise-scale web applications using React and Node.js</li>
                <li>Implemented microservices architecture to improve system scalability</li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Software Engineer</h3>
              <p className="text-gray-400 mb-4">Previous Company • 2018 - 2021</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Developed and maintained full-stack web applications</li>
                <li>Collaborated with cross-functional teams to deliver features</li>
                <li>Optimized application performance and user experience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Frontend</h3>
              <ul className="text-gray-300">
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Backend</h3>
              <ul className="text-gray-300">
                <li>Node.js</li>
                <li>Python</li>
                <li>SQL</li>
              </ul>
            </div>
            
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Tools</h3>
              <ul className="text-gray-300">
                <li>Git</li>
                <li>Docker</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto text-center text-gray-400">
          © 2025 Irfad KP. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;