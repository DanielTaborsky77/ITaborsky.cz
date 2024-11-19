import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PortfolioCard.css';
import WebImg from '../Assets/web.png';
import BGitHub from '../Assets/bgithub.png';

const PortfolioCard = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('PortfolioCard-Overlay')) {
            setIsOpen(false);
        }
    };
    const PortfolioCardClose = (e) => {
            setIsOpen(false);
    };

    return (
        <>
            <motion.div
                className='PortfolioCard'
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    transition: 'all 0.5s ease'
                }}
            >
                <div className='PortfolioCard-Container-Image'>
                    <img className='PortfolioCard-Image' src={props.Img} alt="" />
                </div>
                <p className='PortfolioCard-Title'>{props.Title}</p>
                <p className='PortfolioCard-Description'>{props.Description}</p>
                <a className='PortfolioCard-a-Web' href={props.Web} target="_blank" onClick={(e) => { e.stopPropagation();}}> 
                    <button className='PortfolioCard-Web'>
                        <img className='PortfolioCard-Web-Img' src={WebImg} alt="Web" />
                        Web
                    </button>
                </a>                
                <a className='PortfolioCard-a-Git' href={props.Github} target="_blank" onClick={(e) => { e.stopPropagation();}}>
                    <button className='PortfolioCard-Git'>
                        <img className='PortfolioCard-Git-Img' src={BGitHub} alt="Git" />
                        Github
                    </button>
                </a>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        className='PortfolioCard-Overlay' 
                        onClick={handleOverlayClick}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 999,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <motion.div 
                            className='PortfolioCard-Detail'
                            initial={{ opacity: 0, transform: 'translate(-50%, -50%) scale(0.5)' }}
                            animate={{ opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }}
                            exit={{ opacity: 0, transform: 'translate(-50%, -50%) scale(0.5)' }}
                        >
                                <button className="PortfolioCard-Detail-Close" onClick={PortfolioCardClose}>
                                    &times;
                                </button>
                                <div className='PortfolioCard-Detail-Top'>
                                    <div className='PortfolioCard-Container-Image'>
                                        <img className='PortfolioCard-Image' src={props.Img} alt="" />
                                    </div>
                                    <p className='PortfolioCard-Detail-Title'>{props.Title}</p>
                                </div>
                                <div className='PortfolioCard-Detail-Paragraphs'>
                                {props.Details.map((Detail, index) => (
                                    <p className='PortfolioCard-Detail-Paragraph' key={index}>{Detail}</p>
                                ))}
                                </div>
                                <div className='PortfolioCard-Detail-Butts'>
                                    <a href={props.Web} target="_blank"><button className='PortfolioCard-Web'><img className='PortfolioCard-Web-Img' src={WebImg} alt="Web" />Web</button></a>
                                    <a href={props.Github} target="_blank"><button className='PortfolioCard-Git'><img className='PortfolioCard-Git-Img' src={BGitHub} alt="Git" />Github</button></a>
                                </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default PortfolioCard;

