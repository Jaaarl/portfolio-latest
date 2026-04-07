import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-xl" />,
      label: 'Email',
      value: 'jarl13.work@gmail.com',
      link: 'mailto:jarl13.work@gmail.com',
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      icon: <FaPhone className="text-xl" />,
      label: 'Phone',
      value: '+63 969 563 0833',
      link: 'tel:+639695630833',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      label: 'Location',
      value: 'Sorsogon City, Philippines',
      link: null,
      gradient: 'from-orange-500 to-red-600',
    },
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-medium tracking-wide text-sm uppercase mb-4">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Interested in AI engineering collaborations or full-stack development opportunities? 
            Let's talk.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <div key={index} className="glass-card rounded-2xl p-6 text-center group">
              <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <span className="text-white">{item.icon}</span>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{item.label}</p>
              {item.link ? (
                <a 
                  href={item.link} 
                  className="text-white font-medium hover:text-indigo-400 transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-white font-medium">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="mailto:jarl13.work@gmail.com"
            className="btn-modern inline-flex items-center gap-3 text-lg px-10 py-4"
          >
            Send Message
          </a>
          <p className="text-gray-500 text-sm mt-4">
            Or reach out directly via email for AI engineering collaborations
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 py-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Jarl. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/Jaaarl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/jarlempleo13" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
