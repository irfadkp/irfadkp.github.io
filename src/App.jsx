import "./App.css";

import React from "react";

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <section className="glass-card mb-12 text-center">
          <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Irfad K P
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Software Developer at IBM ISL | Kochi, Kerala, India
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/irfadkp"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/irfadkp"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="mailto:irfadkodapparambil@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              Email
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section className="glass-card mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Contact</h2>
          <div className="text-center space-y-2">
            <p>📍 Kodapparambil House, Valiyaparamba PO, Pulikkal, Malappuram, Kerala, India</p>
            <p>📞 6238280328</p>
            <p>
              Email:{" "}
              <a
                href="mailto:irfadkodapparambil@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                irfadkodapparambil@gmail.com
              </a>
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="glass-card mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Top Skills</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            {["OpenShift", "Docker", "Kubernetes"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 hover:bg-blue-500/40 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="glass-card mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Certifications</h2>
          <ul className="list-none space-y-2 text-center">
            {[
              "IBM Cloud Technical Advocate Concepts",
              "IBM Cloud Technical Advocate Foundations",
              "Convolutional Neural Networks in TensorFlow",
              "Problem Solving (Basic)",
              "Certificate of Participation",
            ].map((cert) => (
              <li key={cert} className="text-gray-200">
                {cert}
              </li>
            ))}
          </ul>
        </section>

        {/* Experience Section */}
        <section className="glass-card mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold">IBM</h3>
              <p className="text-gray-300">Software Developer | July 2022 - Present (2 years 10 months)</p>
              <p className="text-gray-400">Kochi, Kerala, India</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Placement Cell RIT Kottayam</h3>
              <p className="text-gray-300">Technical Lead | July 2021 - July 2022 (1 year 1 month)</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Aion Creative Wings</h3>
              <p className="text-gray-300">Product Engineering Intern | Sept 2020 - July 2022 (1 year 11 months)</p>
              <p className="text-gray-400">Kozhikode, Kerala, India</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Tomercon Pvt Ltd</h3>
              <p className="text-gray-300">Flutter Developer | Jan 2020 (1 month)</p>
              <p className="text-gray-400">Kozhikode, Kerala, India</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="glass-card mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Education</h2>
          <div className="text-center">
            <h3 className="text-xl font-bold">Rajiv Gandhi Institute of Technology, Kottayam</h3>
            <p className="text-gray-300">Bachelor of Technology - BTech, Computer Science (2018 - 2022)</p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;