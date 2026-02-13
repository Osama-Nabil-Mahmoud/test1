
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download, FileText } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex flex-col">
            <span className="text-lg font-bold tracking-tighter uppercase leading-none">Alex ArchiBIM</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Technical Architect</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-wide hover:text-primary transition-colors ${location.pathname === link.path ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <a href="/cv.pdf" download className="flex items-center text-xs font-semibold bg-secondary text-secondary-foreground px-4 py-2 rounded hover:bg-muted transition-colors">
                <FileText className="w-3 h-3 mr-2" /> CV
              </a>
              <a href="/portfolio.pdf" download className="flex items-center text-xs font-semibold bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                <Download className="w-3 h-3 mr-2" /> PORTFOLIO
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b absolute top-full w-full p-4 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium p-2"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col space-y-2 pt-4 border-t">
            <a href="/cv.pdf" className="flex items-center justify-center bg-secondary text-secondary-foreground py-3 rounded text-sm font-bold">
              <FileText className="w-4 h-4 mr-2" /> Download CV
            </a>
            <a href="/portfolio.pdf" className="flex items-center justify-center bg-primary text-primary-foreground py-3 rounded text-sm font-bold">
              <Download className="w-4 h-4 mr-2" /> Download Portfolio
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
