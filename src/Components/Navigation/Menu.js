import React from "react";
import home from '../../Assets/home.png'
import meicon2 from '../../Assets/meicon2.png'
import Work from '../../Assets/work.png'
import Codeservice from '../../Assets/codeservice.png'
import Phone from '../../Assets/phone.png'

export function Menu({ closeMenu }) {
    return (
      <nav className="Menu">
          <a className="Menu-Link" onClick={closeMenu} href="#Homepage"><img className='Menu-Link-Img' src={home} alt="" /> Domovská stránka</a>
          <a className="Menu-Link" onClick={closeMenu} href="#Aboutme"><img className='Menu-Link-Img' src={meicon2} alt="" /> O mně</a>
          <a className="Menu-Link" onClick={closeMenu} href="#Portfolio"><img className='Menu-Link-Img' src={Work} alt="" /> Portfolio</a>
          <a className="Menu-Link" onClick={closeMenu} href="#Services"><img className='Menu-Link-Img' src={Codeservice} alt="" /> Služby</a>
          <a className="Menu-Link" onClick={closeMenu} href="#Contact"><img className='Menu-Link-Img' src={Phone} alt="" /> Kontakt</a>
      </nav>
    );
  }
  