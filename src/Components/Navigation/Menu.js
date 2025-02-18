import React from "react";
import Home from '../../Assets/home.png'
import Meicon2 from '../../Assets/meicon2.png'
import Work from '../../Assets/work.png'
import Codeservice from '../../Assets/codeservice.png'
import WhitePhone from '../../Assets/whitephone.png'

export function Menu({ closeMenu }) {
    return (
      <nav className="Menu">
          <a className="Menu-Link" onClick={closeMenu} href="#Homepage"><img className='Menu-Link-Img' src={Home} alt="Homepage" /> Domovská stránka</a>
          <a className="Menu-Link" onClick={closeMenu} href="#Portfolio"><img className='Menu-Link-Img' src={Work} alt="Work" /> Portfolio</a>
          <a className="Menu-Link" onClick={closeMenu} href="#Services"><img className='Menu-Link-Img' src={Codeservice} alt="Codeservice" /> Služby</a>
          <a className="Menu-Link" onClick={closeMenu} href="#Aboutme"><img className='Menu-Link-Img' src={Meicon2} alt="AboutMe" /> O mně</a>
          <a className="Menu-Link" onClick={closeMenu} href="#Contact"><img className='Menu-Link-Img' src={WhitePhone} alt="Phone" /> Kontakt</a>
      </nav>
    );
  }
  