import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const navItems=[
  {label:'Home',path:'/'},
  {label:'About',path:'/about'},
  {label:'Skills',path:'/skills'},
  {label:'Projects',path:'/projects'},
  {label:'Experience',path:'/experience'},
  {label:'Resume',path:'/resume'},
  {label:'Contact',path:'/contact'}
];

function Navbar(){
  const [menuOpen,setMenuOpen]=useState(false);
  const [darkMode,setDarkMode]=useState(false);

  const toggleMenu=()=>{
    setMenuOpen(prev=>!prev);
  };

  const toggleTheme=()=>{
    setDarkMode(prev=>{
      const next=!prev;
      document.documentElement.dataset.theme=next?'dark':'light';
      return next;
    });
  };

  const closeMenu=()=>{
    setMenuOpen(false);
  };

  return(
    <header className="navbar">
      <div className="navbar-container">

        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <span>AR</span>
          <i>✦</i>
        </NavLink>

        <nav className={`navbar-links ${menuOpen?'is-open':''}`}>
          {navItems.map(item=>(
            <NavLink
              key={item.path}
              to={item.path}
              className={({isActive})=>isActive?'nav-link active':'nav-link'}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {darkMode?<Sun size={18}/>:<Moon size={18}/>}
          </button>

          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label={menuOpen?'Close menu':'Open menu'}
          >
            {menuOpen?<X size={22}/>:<Menu size={22}/>}
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;