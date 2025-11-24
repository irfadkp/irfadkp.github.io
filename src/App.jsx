import "./App.css";

import React, { useEffect, useState } from "react";

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative overflow-hidden">

      {/* Hero Section with parallax */}
      <section className="hero min-h-screen flex items-center justify-center text-center p-6 relative z-50">
        <div className="relative z-50">
          <div className="w-40 h-40 rounded-full mx-auto mb-6 profile-pic relative z-20"
               style={{
                 backgroundImage: "url('https://avatars.githubusercontent.com/u/54243898?v=4')",
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
               }}>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            Irfad K P
          </h1>
          <p className="text-xl text-gray-400 mb-6 animate-section italic">
            Tech Lead at IBM ISL
          </p>
          <div className="flex justify-center gap-6 mb-8 flex-wrap relative z-30">
            <a href="https://github.com/irfadkp" className="text-gray-300 hover:text-blue-400 transition-all link-hover cursor-pointer relative z-30">GitHub</a>
            <a href="https://linkedin.com/in/irfadkp" className="text-gray-300 hover:text-blue-400 transition-all link-hover cursor-pointer relative z-30">LinkedIn</a>
            <a href="mailto:irfadkodapparambil@gmail.com" className="text-gray-300 hover:text-blue-400 transition-all link-hover cursor-pointer relative z-30">Email</a>
            <a href="https://medium.com/@irfad.k.p" className="text-gray-300 hover:text-blue-400 transition-all link-hover cursor-pointer relative z-30">Medium</a>
            <a href="/irfad_portfolio.pdf" target="_blank" className="text-gray-300 hover:text-blue-400 transition-all link-hover cursor-pointer relative z-30">Resume</a>
          </div>
        </div>
      </section>

      {/* Main Content with scroll-based reveal */}
      <main
        className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
        style={{
          transform: `translateY(${Math.max(0, (scrollY - 400) * -0.05)}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* Contact Section with parallax */}
        <section
          id="contact"
          className="glass-card p-6 rounded-lg shadow-lg animate-left stagger-1"
          style={{
            transform: `translateX(${Math.max(-50, Math.min(0, (scrollY - 600) * 0.05))}px)`,
            opacity: Math.min(1, Math.max(0, (scrollY - 400) / 200)),
            transition: 'transform 0.2s ease-out, opacity 0.3s ease-out'
          }}
        >
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p>📍 Kodapparambil House, Valiyaparamba PO, Pulikkal, Malappuram, Kerala, India</p>
          <p className="mt-2">📞 6238280328</p>
          <p className="mt-2">
            Email:{" "}
            <a href="mailto:irfadkodapparambil@gmail.com" className="text-gray-300 hover:text-blue-400 transition-all link-hover cursor-pointer">
              irfadkodapparambil@gmail.com
            </a>
          </p>
        </section>

        {/* Skills Section with parallax */}
        <section
          id="skills"
          className="glass-card p-6 rounded-lg shadow-lg animate-right stagger-2"
          style={{
            transform: `translateX(${Math.min(50, Math.max(0, -(scrollY - 600) * 0.05))}px)`,
            opacity: Math.min(1, Math.max(0, (scrollY - 400) / 200)),
            transition: 'transform 0.2s ease-out, opacity 0.3s ease-out'
          }}
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">Top Skills</h2>
          <div className="flex flex-wrap gap-3">
            {["Helm (Software)", "Software Observability", "OpenTelemetry", "Java", "React", "Docker", "Jenkins", "Kubernetes", "Git", "Dart & Flutter", "Python", "HTML & CSS", "CI/CD", "Figma", "SQL"].map((skill, index) => (
              <span
                key={skill}
                className="skill-tag px-3 py-1 rounded-full relative z-10 cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Certifications Section with parallax */}
        <section
          id="certifications"
          className="glass-card p-6 rounded-lg shadow-lg animate-left stagger-3"
          style={{
            transform: `translateX(${Math.max(-50, Math.min(0, (scrollY - 900) * 0.05))}px)`,
            opacity: Math.min(1, Math.max(0, (scrollY - 700) / 200)),
            transition: 'transform 0.2s ease-out, opacity 0.3s ease-out'
          }}
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">Certifications</h2>
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

        {/* Experience Section with parallax */}
        <section
          id="experience"
          className="glass-card p-6 rounded-lg shadow-lg animate-right stagger-4"
          style={{
            transform: `translateX(${Math.min(50, Math.max(0, -(scrollY - 900) * 0.05))}px)`,
            opacity: Math.min(1, Math.max(0, (scrollY - 700) / 200)),
            transition: 'transform 0.2s ease-out, opacity 0.3s ease-out'
          }}
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">IBM</h3>
              <p className="text-gray-400 text-sm mb-2">3 years 5 months</p>
              
              <div className="ml-4 mb-4">
                <h4 className="text-lg font-semibold text-blue-400">Technical Lead</h4>
                <p className="text-gray-300 text-sm">May 2025 - Present (7 months)</p>
                <p className="text-gray-400 text-sm mb-2">Kochi, Kerala, India</p>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                  <li>Lead the technical execution and strategy for Product-Led Growth (PLG) initiatives on the Instana platform.</li>
                  <li>Mentor and guide a development team, overseeing the full lifecycle of new features designed to enhance the user journey, from free trial to conversion.</li>
                  <li>Collaborate with product and UX teams to define the technical roadmap and ensure engineering efforts directly support business goals.</li>
                </ul>
              </div>

              <div className="ml-4">
                <h4 className="text-lg font-semibold text-blue-400">Software Developer</h4>
                <p className="text-gray-300 text-sm">July 2022 - May 2025 (2 years 11 months)</p>
                <p className="text-gray-400 text-sm mb-2">Kochi, Kerala, India</p>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                  <li>Engineered key features for the Product-Led Growth (PLG) strategy, focusing on improving the free trial experience and product homepage to boost user conversion.</li>
                  <li>Led the integration of Segment analytics to capture user journey data, providing actionable insights that guided product and UX decisions.</li>
                  <li>Developed and maintained the "robot-shop" demo application, a vital tool used by the global technical sales team to demonstrate product value.</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold">PLACEMENT CELL RIT KOTTAYAM</h3>
              <p className="text-gray-300 text-sm">Technical Lead</p>
              <p className="text-gray-400 text-sm">July 2021 - July 2022 (1 year 1 month)</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Aion Creative Wings</h3>
              <p className="text-gray-300 text-sm">Product Engineering Intern</p>
              <p className="text-gray-400 text-sm">September 2020 - July 2022 (1 year 11 months)</p>
              <p className="text-gray-400 text-sm">Kozhikode, Kerala, India</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Tomercon Pvt Ltd</h3>
              <p className="text-gray-300 text-sm">Flutter Developer</p>
              <p className="text-gray-400 text-sm">January 2020 - January 2020 (1 month)</p>
              <p className="text-gray-400 text-sm">Kozhikode, Kerala, India</p>
            </div>
          </div>
        </section>

        {/* Education Section with parallax */}
        <section
          id="education"
          className="glass-card p-6 rounded-lg shadow-lg animate-left stagger-5"
          style={{
            transform: `translateY(${Math.max(-30, Math.min(0, (scrollY - 1400) * 0.03))}px)`,
            opacity: Math.min(1, Math.max(0, (scrollY - 1200) / 200)),
            transition: 'transform 0.2s ease-out, opacity 0.3s ease-out'
          }}
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">Education</h2>
          <div>
            <h3 className="text-xl font-bold">Rajiv Gandhi Institute of Technology, Kottayam</h3>
            <p className="text-gray-300">Bachelor of Technology - Computer Science and Engineering (2018 - 2022)</p>
          </div>
        </section>

        {/* Projects Section with parallax */}
        <section
          id="projects"
          className="glass-card p-6 rounded-lg shadow-lg md:col-span-2 animate-section stagger-6"
          style={{
            transform: `scale(${Math.min(1, Math.max(0.95, 0.95 + (scrollY - 1400) * 0.00005))})`,
            opacity: Math.min(1, Math.max(0, (scrollY - 1300) / 200)),
            transition: 'transform 0.2s ease-out, opacity 0.3s ease-out'
          }}
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="project-card bg-gray-700/50 p-4 rounded-lg cursor-pointer">
              <h3 className="text-xl font-bold text-blue-400 mb-2">Instana PLG Acceleration</h3>
              <p className="text-gray-300 text-sm">As part of the Product-Led Growth (PLG) initiatives for IBM Instana, an advanced observability tool, I contributed to enhancing user experience and adoption. This involved implementing a seamless self-service onboarding process, enabling users to effortlessly integrate and utilize the platform's capabilities.</p>
            </div>
            <div className="project-card bg-gray-700/50 p-4 rounded-lg cursor-pointer">
              <h3 className="text-xl font-bold text-blue-300 mb-2">RobotShop</h3>
              <p className="text-gray-300 text-sm">I managed and deployed a microservices-based demonstration application across Google Cloud Platform (GCP) and Amazon Web Services (AWS). This project showcased Instana's monitoring and observability features, providing guided tours to highlight the value delivered by IBM Instana to stakeholders and users.</p>
            </div>
            <div className="project-card bg-gray-700/50 p-4 rounded-lg cursor-pointer">
              <h3 className="text-xl font-bold text-blue-300 mb-2">SAFER - SOS App</h3>
              <p className="text-gray-300 text-sm">An IoT-integrated SOS mobile application designed for women's safety, alerting the emergency system via a physical trigger from the user.</p>
            </div>
            <div className="project-card bg-gray-700/50 p-4 rounded-lg cursor-pointer">
              <h3 className="text-xl font-bold text-blue-300 mb-2">CCTV Enhancement</h3>
              <p className="text-gray-300 text-sm">Improved the resolution of CCTV footage by modifying the SRCAN neural network architecture.</p>
            </div>
          </div>
        </section>

        {/* Blogs and Publications Section with parallax */}
        <section
          id="blogs"
          className="glass-card p-6 rounded-lg shadow-lg md:col-span-2 animate-section"
          style={{
            transform: `translateY(${Math.max(-30, Math.min(0, (scrollY - 1800) * 0.03))}px)`,
            opacity: Math.min(1, Math.max(0, (scrollY - 1600) / 200)),
            transition: 'transform 0.2s ease-out, opacity 0.3s ease-out'
          }}
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">Blogs and Publications</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
              <a href="https://medium.com/ibm-cloud/observe-a-sample-microservices-application-running-on-kubernetes-using-instana-0d6534dab462" className="text-gray-300 hover:text-blue-400 transition-all link-hover cursor-pointer">
                Observe a Sample Microservices Application Running on Kubernetes Using Instana
              </a>
            </li>
            <li>
              <a href="https://www.ibm.com/think/topics/kubernetes-monitoring-metrics" className="text-gray-300 hover:text-blue-400 transition-all link-hover cursor-pointer">
                4 Key Metrics to Know When Monitoring Microservices Applications Running on Kubernetes
              </a>
            </li>
          </ul>
        </section>

        {/* Achievements Section with parallax */}
        <section
          id="achievements"
          className="glass-card p-6 rounded-lg shadow-lg md:col-span-2 animate-section"
          style={{
            transform: `translateY(${Math.max(-30, Math.min(0, (scrollY - 2000) * 0.03))}px)`,
            opacity: Math.min(1, Math.max(0, (scrollY - 1800) / 200)),
            transition: 'transform 0.2s ease-out, opacity 0.3s ease-out'
          }}
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">Achievements</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Finalist, Reboot Kerala Hackathon 2020</li>
            <li>IBM !DEATHON 2024 Runner Up</li>
            <li>IBM APAC Agentic AI Hackathon 2025 Applause-Worthy Contribution</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-md p-4 text-center relative z-20 border-t border-blue-500/20">
        <p className="text-gray-400">© 2025 Irfad K P. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="https://github.com/irfadkp" className="text-gray-300 hover:text-blue-400 transition-all link-hover cursor-pointer">GitHub</a>
          <a href="https://linkedin.com/in/irfadkp" className="text-gray-300 hover:text-blue-400 transition-all link-hover cursor-pointer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;