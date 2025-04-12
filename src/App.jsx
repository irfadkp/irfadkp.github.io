import React from "react";

function App() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Irfad K P</h1>
        <p className="text-lg text-gray-300 mb-6">
          Software Developer at IBM ISL | Kochi, Kerala, India
        </p>

        <div className="flex justify-center gap-4 mb-12">
          <a href="https://github.com/irfadkp" className="text-blue-400 underline">GitHub</a>
          <a href="https://linkedin.com/in/irfadkp" className="text-blue-400 underline">LinkedIn</a>
          <a href="mailto:irfadkodapparambil@gmail.com" className="text-blue-400 underline">Email</a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-bold text-center mb-4">Contact</h2>
        <p>📍 Kodapparambil House, Valiyaparamba PO, Pulikkal, Malappuram, Kerala, India</p>
        <p>📞 6238280328</p>
        <p>Email: <a href="mailto:irfadkodapparambil@gmail.com" className="text-blue-400">irfadkodapparambil@gmail.com</a></p>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-4">Top Skills</h2>
        <ul className="list-disc pl-6 text-center">
          <li>OpenShift</li>
          <li>Docker</li>
          <li>Kubernetes</li>
        </ul>
      </section>

      {/* Certifications Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-4">Certifications</h2>
        <ul className="list-disc pl-6 text-center">
          <li>IBM Cloud Technical Advocate Concepts</li>
          <li>IBM Cloud Technical Advocate Foundations</li>
          <li>Convolutional Neural Networks in TensorFlow</li>
          <li>Problem Solving (Basic)</li>
          <li>Certificate of Participation</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-4">Experience</h2>
        <div>
          <h3 className="text-xl font-bold">IBM</h3>
          <p>Software Developer | July 2022 - Present (2 years 10 months)</p>
          <p>Kochi, Kerala, India</p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold">Placement Cell RIT Kottayam</h3>
          <p>Technical Lead | July 2021 - July 2022 (1 year 1 month)</p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold">Aion Creative Wings</h3>
          <p>Product Engineering Intern | Sept 2020 - July 2022 (1 year 11 months)</p>
          <p>Kozhikode, Kerala, India</p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold">Tomercon Pvt Ltd</h3>
          <p>Flutter Developer | Jan 2020 (1 month)</p>
          <p>Kozhikode, Kerala, India</p>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-4">Education</h2>
        <div>
          <h3 className="text-xl font-bold">Rajiv Gandhi Institute of Technology, Kottayam</h3>
          <p>Bachelor of Technology - BTech, Computer Science (2018 - 2022)</p>
        </div>
      </section>
    </main>
  );
}

export default App;
