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

      sections.forEach(section => {
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
    handleScroll(); // Call initially to set the active tab on page load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTabClick = (tabId) => {
    document.getElementById(tabId).scrollIntoView({ behavior: 'smooth' });
    setActiveTab(tabId);
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
  
  const handleLinkClick = (sectionId) => {
    setSidebarOpen(false);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navbarStyle = {
    backgroundColor: scrolled ? 'transparent' : 'transparent',
    transition: 'background-color 0.3s ease',
    position: 'fixed',
    top: 0,
    width: '100%'
  };

  return (
    <nav>
     
      
      
      <ul className='navbar' style={navbarStyle}>
       
        <div className="seprow">
        <ul>
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
             SERVICE
            </a>
          </li>
          <li>
            <a
              href="#design"
              className={activeTab === 'design' ? 'active' : ''}
              onClick={() => handleTabClick('design')}
            >
             DESIGN
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
            PRICING
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeTab === 'contact' ? 'active' : ''}
              onClick={() => handleTabClick('contact')}
            >
             CONTACT
            </a>
          </li>
         
          
        </ul>
        </div>
        
        
        
      </ul>
    </nav>
  );
}

export default Navbar;
