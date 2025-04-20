import "./App.css";

import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="hero min-h-screen flex items-center justify-center text-center p-6">
        <div>
          <div className="w-40 h-40 bg-gray-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white profile-pic"
               style={{ backgroundImage: "url('https://avatars.githubusercontent.com/u/54243898?v=4')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Irfad K P
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Software Developer at IBM ISL | Kochi, Kerala, India
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://github.com/irfadkp" className="text-blue-400 hover:text-purple-500 transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/irfadkp" className="text-blue-400 hover:text-purple-500 transition-colors">LinkedIn</a>
            <a href="mailto:irfadkodapparambil@gmail.com" className="text-blue-400 hover:text-purple-500 transition-colors">Email</a>
            <a href="https://medium.com/@irfad.k.p" className="text-blue-400 hover:text-purple-500 transition-colors">Medium</a>
            <a href="/public/irfad_portfolio.pdf" className="text-blue-400 hover:text-purple-500 transition-colors">Resume</a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Section */}
        <section id="contact" className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p>📍 Kodapparambil House, Valiyaparamba PO, Pulikkal, Malappuram, Kerala, India</p>
          <p className="mt-2">📞 6238280328</p>
          <p className="mt-2">
            Email:{" "}
            <a href="mailto:irfadkodapparambil@gmail.com" className="text-blue-400 hover:text-purple-500 transition-colors">
              irfadkodapparambil@gmail.com
            </a>
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Top Skills</h2>
          <div className="flex flex-wrap gap-3">
            {["Java","React","Docker","Jenkins","Kuebernetes","Git","Dart & Flutter", "Python", "HTML & CSS", "CI/CD", "Figma", "SQL"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 hover:bg-purple-500/30 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          <ul className="list-disc list-inside space-y-2">
            {[
              "IBM Cloud Technical Advocate Concepts",
              "IBM Cloud Technical Advocate Foundations",
              "Python (Basic), HackerRank",
              "Problem Solving (Basic), HackerRank",
              "Convolutional Neural Networks in TensorFlow, Coursera",
              "Certificate of Participation, Reboot Kerala Hackathon 2020",
              "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning, Coursera",
            ].map((cert) => (
              <li key={cert} className="text-gray-200">{cert}</li>
            ))}
          </ul>
        </section>

        {/* Experience Section */}
        <section id="experience" className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold">IBM</h3>
              <p className="text-gray-300">Software Developer | July 2022 - Present (2 years 10 months)</p>
              <p className="text-gray-400">Kochi, Kerala, India</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Career Guidance and Placement Cell, RIT</h3>
              <p className="text-gray-300">Connecting Developers for Technical Platform Maintenance | 2022 (Unpaid Internship)</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Aion Creative Wings</h3>
              <p className="text-gray-300">Collaborated on E-commerce Mobile Applications (Customer App, Delivery App, Manager App, Kitchen App) using Flutter and Firebase | 2021 (Unpaid Internship)</p>
              <p className="text-gray-400">Kozhikode, Kerala, India</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Tomercon Developers</h3>
              <p className="text-gray-300">Front-End Flutter Developer | 2020 (Unpaid Internship)</p>
              <p className="text-gray-400">Kozhikode, Kerala, India</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div>
            <h3 className="text-xl font-bold">Rajiv Gandhi Institute of Technology, Kottayam</h3>
            <p className="text-gray-300">Bachelor of Technology - Computer Science and Engineering (2018 - 2022)</p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-gray-800/50 p-6 rounded-lg shadow-lg md:col-span-2">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
              <h3 className="text-xl font-bold">Instana PLG Acceleration</h3>
              <p className="text-gray-400">As part of the Product-Led Growth (PLG) initiatives for IBM Instana, an advanced observability tool, I contributed to enhancing user experience and adoption. This involved implementing a seamless self-service onboarding process, enabling users to effortlessly integrate and utilize the platform's capabilities.</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
              <h3 className="text-xl font-bold">RobotShop</h3>
              <p className="text-gray-400">I managed and deployed a microservices-based demonstration application across Google Cloud Platform (GCP) and Amazon Web Services (AWS). This project showcased Instana’s monitoring and observability features, providing guided tours to highlight the value delivered by IBM Instana to stakeholders and users.</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
              <h3 className="text-xl font-bold">SAFER - SOS App</h3>
              <p className="text-gray-400">An IoT-integrated SOS mobile application designed for women’s safety, alerting the emergency system via a physical trigger from the user.</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
              <h3 className="text-xl font-bold">CCTV Enhancement</h3>
              <p className="text-gray-400">Improved the resolution of CCTV footage by modifying the SRCAN neural network architecture.</p>
            </div>
          </div>
        </section>

        {/* Blogs and Publications Section */}
        <section id="blogs" className="bg-gray-800/50 p-6 rounded-lg shadow-lg md:col-span-2">
          <h2 className="text-3xl font-bold mb-4">Blogs and Publications</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <a href="https://medium.com/ibm-cloud/observe-a-sample-microservices-application-running-on-kubernetes-using-instana-0d6534dab462" className="text-blue-400 hover:text-purple-500 transition-colors">
                Observe a Sample Microservices Application Running on Kubernetes Using Instana
              </a>
            </li>
            <li>
              <a href="https://www.ibm.com/think/topics/kubernetes-monitoring-metrics" className="text-blue-400 hover:text-purple-500 transition-colors">
                4 Key Metrics to Know When Monitoring Microservices Applications Running on Kubernetes
              </a>
            </li>
          </ul>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="bg-gray-800/50 p-6 rounded-lg shadow-lg md:col-span-2">
          <h2 className="text-3xl font-bold mb-4">Achievements</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Finalist, Reboot Kerala Hackathon 2020</li>
            <li>IBM !DEATHON 2024 Runner Up</li>
            <li>IBM APAC Agentic AI Hackathon 2025 Applause-Worthy Contribution</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800/70 backdrop-blur-md p-4 text-center sticky bottom-0">
        <p>© 2025 Irfad K P. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="https://github.com/irfadkp" className="text-blue-400 hover:text-purple-500">GitHub</a>
          <a href="https://linkedin.com/in/irfadkp" className="text-blue-400 hover:text-purple-500">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;