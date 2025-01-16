import React, { useEffect, useState, useRef } from 'react';
import './Navbar.css';

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      let currentTab = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentTab = section.getAttribute('id');
        }
      });

      setActiveTab(currentTab);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTabClick = (tabId) => {
    document.getElementById(tabId).scrollIntoView({ behavior: 'smooth' });
    setActiveTab(tabId);
    setSidebarOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !event.target.closest('.menu-btn')) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navbarStyle = {
    backgroundColor: 'transparent',
    transition: 'background-color 0.3s ease',
    position: 'fixed',
    top: 0,
    width: '100%',
  };

  return (
    <nav>
      <div className="navbar" style={navbarStyle}>
        <button
          className="menu-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle menu"
        >
          {sidebarOpen ? '✖' : '☰'}
        </button>
        <ul className="seprow">
          <li>
            <a
              href="#home"
              className={activeTab === 'home' ? 'active' : ''}
              onClick={() => handleTabClick('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeTab === 'about' ? 'active' : ''}
              onClick={() => handleTabClick('about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#service"
              className={activeTab === 'service' ? 'active' : ''}
              onClick={() => handleTabClick('service')}
            >
              Service
            </a>
          </li>
          <li>
            <a
              href="#design"
              className={activeTab === 'design' ? 'active' : ''}
              onClick={() => handleTabClick('design')}
            >
              Design
            </a>
          </li>
          <li>
            <a
              href="#workflow"
              className={activeTab === 'workflow' ? 'active' : ''}
              onClick={() => handleTabClick('workflow')}
            >
              Workflow
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className={activeTab === 'pricing' ? 'active' : ''}
              onClick={() => handleTabClick('pricing')}
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeTab === 'contact' ? 'active' : ''}
              onClick={() => handleTabClick('contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div
        ref={sidebarRef}
        className={`sidebar ${sidebarOpen ? 'open' : ''}`}
      >
        <ul>
          <li onClick={() => handleTabClick('home')}>Home</li>
          <li onClick={() => handleTabClick('about')}>About</li>
          <li onClick={() => handleTabClick('service')}>Service</li>
          <li onClick={() => handleTabClick('design')}>Design</li>
          <li onClick={() => handleTabClick('workflow')}>Workflow</li>
          <li onClick={() => handleTabClick('pricing')}>Pricing</li>
          <li onClick={() => handleTabClick('contact')}>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
