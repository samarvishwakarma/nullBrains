import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId); // Set active section on click
    }
    setIsMenuOpen(false); // Close mobile menu
  };

  // Update active section based on scroll position
  useEffect(() => {
    const sections = ['home', 'features', 'blog', 'team', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the section is in view
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex text-2xl font-bold text-gray-800">
          nullBrains<p className="text-indigo-600">.</p>
        </div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-black hover:text-blue-800 transition px-3">
            Sign In
          </button>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign Up
          </button>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <i className="fa fa-bars"></i>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#home"
                onClick={(e) => handleScroll(e, 'home')}
                className={`block py-2 px-3 rounded-sm md:p-0 ${
                  activeSection === 'home'
                    ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500'
                    : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                }`}
                aria-current={activeSection === 'home' ? 'page' : undefined}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                onClick={(e) => handleScroll(e, 'features')}
                className={`block py-2 px-3 rounded-sm md:p-0 ${
                  activeSection === 'features'
                    ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500'
                    : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                }`}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#blog"
                onClick={(e) => handleScroll(e, 'blog')}
                className={`block py-2 px-3 rounded-sm md:p-0 ${
                  activeSection === 'blog'
                    ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500'
                    : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                }`}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, 'contact')}
                className={`block py-2 px-3 rounded-sm md:p-0 ${
                  activeSection === 'contact'
                    ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500'
                    : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                }`}
              >
                Contact
              </a>
            </li>
            <li>
              <SearchBar />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;