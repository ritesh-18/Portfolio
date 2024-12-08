"use client";
import React , {useState , useEffect} from "react";
import 'font-awesome/css/font-awesome.min.css';


function MainComponent() {
  const stackText = "Full Stack Developer";
  const [typingText, setTypingText] = useState("");
  const typingFullText =
    "Crafting seamless digital solutions, one innovative line of code at a time.";

  useEffect(() => {
    const typingTimer = setInterval(() => {
      setTypingText((prev) => {
        if (prev.length === typingFullText.length) return "";
        return typingFullText.slice(0, prev.length + 1);
      });
    }, 150);

    return () => {
      clearInterval(typingTimer);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formStatus, setFormStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState("");
  const [showContactForm, setShowContactForm] = useState(false);
  const projects = [
    {
      image:"https://e1a4c9d0d2f9f737c5e1.ucr.io/https://ritesh-18.created.app/api/ai-img?prompt=GPT%25201.0%2520project%2520showcase",
      title: "GPT 1.0",
      description: "AI-powered chat application using React.js and Gemini API",
      alt: "GPT 1.0 project showcase",
      link: "https://gpt-10-fawn.vercel.app/",
    },
    {
      image: "https://e1a4c9d0d2f9f737c5e1.ucr.io/https://ritesh-18.created.app/api/ai-img?prompt=Voice%2520Recognition%2520project%2520showcase",
      title: "Voice Recognition Webapp",
      description: "Speech recognition web application for text transcription",
      alt: "Voice Recognition project showcase",
      link: "https://voice-recognization-webapp-using-api-yd68.vercel.app/",
    },
    {
      image: "https://e1a4c9d0d2f9f737c5e1.ucr.io/https://ritesh-18.created.app/api/ai-img?prompt=Currency%2520Converter%2520project%2520showcase",
      title: "Currency Converter",
      description: "Real-time currency conversion with integrated APIs",
      alt: "Currency Converter project showcase",
      link: "https://letsexchangemoney.vercel.app/",
    },
    {
      image: "https://e1a4c9d0d2f9f737c5e1.ucr.io/https://ritesh-18.created.app/api/ai-img?prompt=Fitness%2520Tracking%2520App%2520project%2520showcase",
      title: "Fitness Tracking App",
      description:
        "Developed a fitness tracking app with Node.js and Express, focusing on backend functionalities",
      alt: "Fitness Tracking App project showcase",
      link: "https://github.com/ritesh-18/Fitness_Tracking_Api",
    },
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection("slide-left");
    setCurrentIndex((prev) => (prev + 3 >= projects.length ? 0 : prev + 1));
    setTimeout(() => {
      setIsAnimating(false);
      setSlideDirection("");
    }, 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection("slide-right");
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, projects.length - 3) : prev - 1
    );
    setTimeout(() => {
      setIsAnimating(false);
      setSlideDirection("");
    }, 500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormStatus("");

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      subject: "New Contact Form Submission",
    };

    try {
      const mailtoLink = `mailto:rc18.official@gmail.com?from=${encodeURIComponent(
        data.email
      )}&subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`
      )}`;
      window.location.href = mailtoLink;
      setFormStatus("Email client opened successfully!");
      e.target.reset();
    } catch (error) {
      setFormStatus("Failed to open email client. Please try again.");
    }

    setLoading(false);
  };

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white font-inter flex flex-col items-center">
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800 flex justify-center">
        <div className="max-w-7xl w-full px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
            Ritesh Chauhan
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#work" className="hover:text-gray-300 transition-colors">
              Work
            </a>
            <a
              href="#experience"
              className="hover:text-gray-300 transition-colors"
            >
              Experience
            </a>
            <a
              href="#freelance"
              className="hover:text-gray-300 transition-colors"
            >
              Freelance
            </a>
            <a href="#about" className="hover:text-gray-300 transition-colors">
              About
            </a>
            <button
              onClick={handleContactClick}
              className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Contact



            </button>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"}`} ></i>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-black/95 py-4 border-b border-zinc-800">
            <div className="flex flex-col items-center space-y-4">
              <a href="#work" className="hover:text-gray-300 transition-colors">
                Work
              </a>
              <a
                href="#experience"
                className="hover:text-gray-300 transition-colors"
              >
                Experience
              </a>
              <a
                href="#freelance"
                className="hover:text-gray-300 transition-colors"
              >
                Freelance
              </a>
              <a
                href="#about"
                className="hover:text-gray-300 transition-colors"
              >
                About
              </a>
              <button
                onClick={handleContactClick}
                className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
      <section className="w-full h-screen flex items-center justify-center relative">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">Hi , I`m Ritesh Chauhan</h1>
          <div className="text-2xl mb-4">
            <span>I am </span>
            <span className="animate-brightness text-[#00ff00]">
              {stackText}
            </span>
          </div>
          <div className="text-lg text-gray-300 mb-8">{typingText}</div>
          <button
            onClick={handleContactClick}
            className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
          >
            Get in Touch
          </button>
        </div>
      </section>
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 p-6 rounded-lg w-full max-w-md relative">
            <button
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <i className="fa fa-times"></i>
            </button>
            <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 bg-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 bg-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black py-2 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              {formStatus && (
                <p className="text-center text-sm">{formStatus}</p>
              )}
            </form>
          </div>
        </div>
      )}

      <section
        id="about"
        className="w-full py-20 bg-zinc-900 flex justify-center"
      >
        <div className="max-w-7xl w-full px-4">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-300 mb-6">
            I am a Full Stack Web Developer with a strong foundation in both
            frontend and backend technologies. Proficient in developing dynamic
            and responsive web applications using React.js, CSS, HTML,
            JavaScript, and TypeScript. Skilled in backend development with
            Node.js, Express.js, and Prisma. I have expertise in database
            management with SQL, MongoDB, and PostgreSQL, and experience with
            Cloudflare for scalable solutions.
          </p>
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
            <a
              href="https://drive.google.com/file/d/1dVD4QYkmPyfBt0gfaTcAjpejz1GIbsRE/view"
              download
              className="bg-white text-black py-3 px-8 rounded-lg font-bold hover:bg-gray-200 inline-flex items-center justify-center"
            >
              <i className="fa fa-download mr-2"></i>
              Download Resume
            </a>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/ritesh-18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-300"
            >
              <i className="fa fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/riteshchauhan2024"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-300"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              href="https://x.com/tooMuchCoding?t=znyQ1HseHbNsM0UeJZO9vA&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-300"
            >
              <i className="fa fa-twitter"></i>
            </a>
          </div>
        </div>
      </section>

      <section id="work" className="w-full py-20 flex justify-center">
        <div className="max-w-7xl w-full px-4">
          <h2 className="text-3xl font-bold mb-12">My Work</h2>
          <div className="relative carousel-container">
            <div className="flex gap-8 overflow-hidden">
              {projects
                .slice(currentIndex, currentIndex + 3)
                .map((project, index) => (
                  <div
                    key={index}
                    className="w-full md:w-1/3 flex-shrink-0 carousel-item"
                  >
                    <div className="border border-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                      <div className="relative group">
                        <img
                          src={project.image}
                          alt={project.alt}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black px-4 py-2 rounded-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                          >
                            View Project
                          </a>
                        </div>
                      </div>
                      <div className="p-4 bg-zinc-900/50 backdrop-blur-sm">
                        <h3 className="text-xl font-bold mb-2 text-white">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 mb-4 ">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 p-3 rounded-full hover:bg-black/90 transition-colors transform hover:scale-110 duration-200"
              disabled={currentIndex === 0}
            >
             <i className="fa fa-chevron-left text-white"></i>

            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 p-3 rounded-full hover:bg-black/90 transition-colors transform hover:scale-110 duration-200"
              disabled={currentIndex + 3 >= projects.length}
            >
              <i className="fa fa-chevron-right text-white"></i>
            </button>
          </div>
        </div>
      </section>

      <section id="experience" className="w-full py-20 flex justify-center">
        <div className="max-w-7xl w-full px-4">
          <h2 className="text-3xl font-bold mb-12">Experience</h2>
          <div className="space-y-8">
            <div className="border border-zinc-800 p-6 rounded-lg hover:border-white transition-colors">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-bold">React Developer</h3>
                <span className="text-gray-400">Oct ,2024 - Present</span>
              </div>
              <h4 className="text-lg text-gray-300 mb-4">Strange Web</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Developed and maintained a school consulting website</li>
                <li>
                  Built interactive features and data visualization components
                </li>
                <li>Implemented API integrations for dynamic data retrieval</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        id="freelance"
        className="w-full py-20 bg-zinc-900 flex justify-center"
      >
        <div className="max-w-7xl w-full px-4">
          <h2 className="text-3xl font-bold mb-12">Freelance Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-zinc-800 p-6 rounded-lg hover:border-white transition-colors">
              <h3 className="text-xl font-bold mb-2">MERN Stack Development</h3>
              <p className="text-gray-300 mb-4">
                Full-stack web applications using MongoDB, Express.js, React.js,
                and Node.js
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Custom web applications</li>
                <li>RESTful API development</li>
                <li>Database design and integration</li>
              </ul>
            </div>
            <div className="border border-zinc-800 p-6 rounded-lg hover:border-white transition-colors">
              <h3 className="text-xl font-bold mb-2">Django Development</h3>
              <p className="text-gray-300 mb-4">
                Robust backend solutions with Python's Django framework
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Content Management Systems</li>
                <li>E-commerce platforms</li>
                <li>Admin dashboards</li>
              </ul>
            </div>
            <div className="border border-zinc-800 p-6 rounded-lg hover:border-white transition-colors">
              <h3 className="text-xl font-bold mb-2">
                Frontend UI Development
              </h3>
              <p className="text-gray-300 mb-4">
                Modern and responsive user interfaces with latest technologies
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>React.js applications</li>
                <li>Responsive designs</li>
                <li>UI/UX implementation</li>
              </ul>
            </div>
            <div className="border border-zinc-800 p-6 rounded-lg hover:border-white transition-colors">
              <h3 className="text-xl font-bold mb-2">API Development</h3>
              <p className="text-gray-300 mb-4">
                Custom API solutions for your business needs
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>RESTful APIs</li>
                <li>Third-party integrations</li>
                <li>API documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full py-12 bg-black text-gray-400">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">About Me</h3>
              <p className="text-sm">
                Full Stack Developer specializing in modern web technologies and
                innovative solutions.
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#work"
                    className="hover:text-white transition-colors"
                  >
                    Work
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="hover:text-white transition-colors"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#freelance"
                    className="hover:text-white transition-colors"
                  >
                    Freelance
                  </a>
                </li>
                <li>
                  <button
                    onClick={handleContactClick}
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">
                Contact Info
              </h3>
              <ul className="space-y-2">
                <li>
                  <i className="fa fa-envelope mr-2"></i>
                  rc18.official@gmail.com
                </li>
                <li>
                  <i className="fa fa-phone mr-2"></i>+91 9369559936
                </li>
                <li>
                  <i className="fa fa-map-marker-alt mr-2"></i>Bangalore, India
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/ritesh-18"
                  className="hover:text-white transition-colors"
                >
                  <i className="fa fa-github text-xl"></i>
                </a>
                <a
                  href="https://linkedin.com/in/riteshchauhan2024"
                  className="hover:text-white transition-colors"
                >
                  <i className="fa fa-linkedin text-xl"></i>
                </a>
                <a
                  href="https://x.com/tooMuchCoding"
                  className="hover:text-white transition-colors"
                >
                  <i className="fa fa-twitter text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-8 pt-8 text-center">
            <p>© 2024 Ritesh Chauhan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

<style jsx global>{`
  @keyframes brightness {
    0%, 100% { filter: brightness(0.8); }
    50% { filter: brightness(1.2); }
  }

  @keyframes colorChange {
    0% { color: #00ff00; }
    50% { color: #008000; }
    100% { color: #00ff00; }
  }

  .animate-brightness {
    animation: brightness 2s infinite, colorChange 3s infinite;
  }

  @keyframes slideLeft {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }

  @keyframes slideRight {
    from { transform: translateX(-100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }

  .slide-left {
    animation: slideLeft 0.5s ease-out forwards;
  }

  .slide-right {
    animation: slideRight 0.5s ease-out forwards;
  }

  .carousel-container {
    overflow: hidden;
    position: relative;
  }

  .carousel-item {
    transition: transform 0.5s ease, opacity 0.5s ease;
  }

  .carousel-item:hover {
    transform: scale(1.02);
  }
`}</style>;

export default MainComponent;