import React, { useState } from 'react';
import './Services.css';
import './ServicesDetails.css';
import ServicesCard from './ServicesCard';
import FullStack from './Fullstack';
import Demand from './Demand';
import ServicesDetails from './ServicesDetails';
import Logo from '../Assets/logo.png'
import Tick from '../Assets/tick.png'
import Redcross from '../Assets/redcross.png'

import BFullStack from '../Assets/bfullstack.png'
import Bdesign from '../Assets/bdesign.png';
import BCodeService from '../Assets/bcodeservice.png';
import BManagement from '../Assets/blackmanagement.png';

import WhiteCode from '../Assets/whitecode.png';
import Wdesign from '../Assets/wdesign.png';
import BlackManagement from '../Assets/blackmanagement.png';
import BlueCode from '../Assets/bluecode.png';
import WhiteGear from '../Assets/whitegear.png';
import BlueGear from '../Assets/bluegear.png';

import DesignPDF from '../Assets/Documents/ITaborsky_UI_UX-Design.pdf';
import CodeServicePDF from '../Assets/Documents/ITaborsky_Weby-a-aplikace.pdf';
import ManagementPDF from '../Assets/Documents/ITaborsky_Webova-Sprava.pdf';


const Services = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);

    const handleButtonClick = (title) => {
        setSelectedTitle(title);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSuccess = (success) => {
        if (success) {
            setShowSuccessModal(true);
            setTimeout(() => setShowSuccessModal(false), 10000); // Zavření po 7 sekundách
        }
        else {
            setShowErrorModal(true);
            setTimeout(() => setShowErrorModal(false), 10000); // Zavření po 7 sekundách
        }
    };

    return(
        <div className='Services' id='Services'>
            <p className='Services-Title'>Služby</p>
            <ServicesCard
                Image={BFullStack}
                Color={'#0B8BC9'}
                Title={'FULL-STACK'}
                Subtitle={'Design, Tvorba webu a Webová správa v jednom'}
                ButtontextColor={'#FFFFFF'}
                handleButtonClick={handleButtonClick}
                Link={'#FULL-STACK'}
            />
            <div className='Services-cards'>
                <ServicesCard
                    Image={Bdesign}
                    Color={'#064D80'}
                    Title={'UI/UX Design'}
                    Subtitle={'Grafický návrh webové stránky/aplikace'}
                    ButtontextColor={'#FFFFFF'}
                    handleButtonClick={handleButtonClick}
                    Link={'#UI/UX'}
                />
                {isModalOpen && <Demand title={selectedTitle} onClose={closeModal} onSuccess={handleSuccess}/>}
                 <ServicesCard 
                    Image={BCodeService}
                    Color={'#031F39'}
                    Title={'Weby a aplikace'}
                    Subtitle={'Weby a webové aplikace na míru vašemu podnikání'}
                    ButtontextColor={'#FFFFFF'}
                    handleButtonClick={handleButtonClick}
                    Link={'#Web&Apps'}
                />
                {isModalOpen && <Demand title={selectedTitle} onClose={closeModal} onSuccess={handleSuccess}/>}
                <ServicesCard 
                    Image={BManagement}
                    Color={'#07031A'}
                    Title={'Webová správa'}
                    Subtitle={'Udržování webů a aplikací v nejlepší kondici'}
                    ButtontextColor={'#FFFFFF'}
                    handleButtonClick={handleButtonClick}
                    Link={'#Web-management'}
                />
                {isModalOpen && <Demand title={selectedTitle} onClose={closeModal} onSuccess={handleSuccess}/>}
            </div>
            {showSuccessModal && (
                <div className="Modal">
                    <img className='Modal-Logo' src={Logo} alt="Logo" loading="lazy"/>
                    <p>Vaše žádost byla úspěšně odeslána</p>
                    <img className='Success-Modal-Tick' src={Tick} alt="Úspěch" loading="lazy"/>
                </div>
            )}
            {showErrorModal && (
                <div className="Modal">
                    <img className='Modal-Logo' src={Logo} alt="Logo" loading="lazy"/>
                    <p>Nastala chyba v odesílání</p>
                    <img className='Error-Modal-Cross' src={Redcross} alt="Error" loading="lazy"/>
                </div>
            )}
            <FullStack 
                handleButtonClick={handleButtonClick}
                Title={'FULL-STACK'}
            />
            <ServicesDetails 
                ServicesDetailsId='UI/UX'
                Orientation={'Left'}
                LeftTitleImg={Bdesign}
                LeftTitle={'UI/UX Design'}
                LeftParagraphs={[
                    "Vizuálně poutavý a zároveň uživatelsky přívětivý web je jednou z nejdůležitějších součástí Vašeho marketingu a prezentace Vaší značky.",
                    'Nepodceňte ji...'
                ]}
                handleButtonClick={handleButtonClick}
                ButtonColor={'#064D80'}
                ButtonImg={Wdesign}
                ButtonText={'Zažádat o UI/IX Design'}
                RightColor={'#064D80ee'}
                RightTitleImg={Bdesign}
                RightTitle={'Jak to probíhá?'}
                RightParagraphTitleImg={Bdesign}
                RightParagraphsTitles={[
                    'Úvodní konzultace',
                    'Návrh struktury projektu',
                    'Tvorba detailních návrhů',
                    'Kompletní předání'
                ]}
                RightParagraphs={[

                ]}
                PDFFile={DesignPDF}
            />
            <ServicesDetails 
                ServicesDetailsId='Web&Apps'
                Orientation={'Left'}
                LeftTitleImg={BCodeService}
                LeftTitle={'Weby a aplikace'}
                LeftParagraphs={[
                    'Bez webové stránky nebo aplikace se v dnešní digitální době jen zřídka obejdete a pro podnikatele může být jejich tvorba náročná, obzvláště pokud má obsahovat náročnější funkce a vypadat podle jejich představ.',
                    'V připadě potřeby webového vývoje se můžete obrátit na mne...'
                ]}
                handleButtonClick={handleButtonClick}
                ButtonColor={'#031F39'}
                ButtonImg={WhiteCode}
                ButtonText={'Zažádat o Weby a aplikace'}
                RightColor={'#031F39'}
                RightTitleImg={BCodeService}
                RightTitle={'Jak to probíhá?'}
                RightParagraphTitleImg={BlueCode}
                RightParagraphsTitles={[
                    'Analýza návrhu',
                    'Uživatelské rozhraní (Front-end)',
                    'Integrace funkcí (Back-end)',
                    'Testování a ladění',
                    'Předání a spuštění'
                ]}
                RightParagraphs={[
                
                ]}
                PDFFile={CodeServicePDF}
            />
            <ServicesDetails
                ServicesDetailsId='Web-management'
                Orientation={'Left'}
                LeftTitleImg={BlackManagement}
                LeftTitle={'Webová správa'}
                LeftParagraphs={[
                    'Máte už nádherně vypadající a uživatelsky přívětivé webové stránky, ale za nějakou dobu budou ztrácet na popularitě, návštěvnosti, bezpečnosti. Budete potřebovat přidat nějaký obsah a udržet tím stránky aktuální.',
                    'Pokud chcete své webové stránky udržet živé a nestárnoucí, rád Vám s tím pomohu.'
                ]}
                handleButtonClick={handleButtonClick}
                ButtonColor={'#07031A'}
                ButtonImg={WhiteGear}
                ButtonText={'Zažádat o Webovou správu'}
                RightColor={'#07031A'}
                RightTitleImg={BManagement}
                RightTitle={'Jak to probíhá?'}
                RightParagraphTitleImg={BlueGear}
                RightParagraphsTitles={[
                    'Průzkum stránky/aplikace',
                    'Pravidelná měsíční údržba',
                    'Zaslání reportu zákazníkovi',
                    'Urgentní řešení problému',
                ]}
                RightParagraphs={[]}
                RightSubtitlesTitle={'Měsíční správa'}
                RightSubtitles={[
                    '1) Kontrola bezpečnostních hrozeb',
                    '2) Optimalizace pro vyhledávače',
                    '3) Sledování výkonu, návštěvnosti a chování uživatelů',
                    '4) Oprava chyb',
                    '5) Aktualizace obsahu',
                    '6) Implementace nových prvků a funkcí',
                    '7) Obeznámení zákazníka o průběhu kontroly a provedených změnách'
                ]}
                PDFFile={ManagementPDF}
            />
        </div>
    )
}

export default Services;