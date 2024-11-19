import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Services.css';
import './ServicesDetails.css';
import ServicesCard from './ServicesCard';
import FullStack from './Fullstack';
import Demand from './Demand';
import ServicesDetails from './ServicesDetails';


import WFullStack from '../Assets/fullstack.png'
import Wdesign from '../Assets/wdesign.png';
import CodeService from '../Assets/codeservice.png';
import Management from '../Assets/management.png';

import Bdesign from '../Assets/bdesign.png';
import Bldesign from '../Assets/bldesign.png';

import BCodeService from '../Assets/bcodeservice.png';
import Whitecode from '../Assets/whitecode.png';

import BlackManagement from '../Assets/blackmanagement.png';
import WhiteGear from '../Assets/whitegear.png';

const Services = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState('');

    const handleButtonClick = (title) => {
        setSelectedTitle(title);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return(
        <div className='Services' id='Services'>
            <p className='Services-Title'>Služby</p>
            <ServicesCard
                Image={WFullStack}
                Color={'#0B8BC9'}
                Title={'FULL-STACK'}
                Subtitle={'Design, Tvorba webu a Webová správa v jednom.'}
                ButtonColor={'#FFFFFF'}
                ButtontextColor={'#07031A'}
                handleButtonClick={handleButtonClick}
                Link={'#FULL-STACK'}
            />
            <div className='Services-cards'>
                <ServicesCard
                    Image={Wdesign}
                    Color={'#064D80'}
                    Title={'UI/UX Design'}
                    Subtitle={'Přehlednost a atraktivnost stránky pro vaše zákazníky.'}
                    ButtonColor={'#07031A'}
                    ButtontextColor={'#FFFFFF'}
                    handleButtonClick={handleButtonClick}
                    Link={'#UI/UX'}
                />
                {isModalOpen && <Demand title={selectedTitle} onClose={closeModal} />}
                 <ServicesCard 
                    Image={CodeService}
                    Color={'#031F39'}
                    Title={'Weby a aplikace'}
                    Subtitle={'Weby a webové aplikace na míru.'}
                    ButtonColor={'#FFFFFF'}
                    ButtontextColor={'#07031A'}
                    handleButtonClick={handleButtonClick}
                    Link={'#Web&Apps'}
                />
                {isModalOpen && <Demand title={selectedTitle} onClose={closeModal} />}
                <ServicesCard 
                    Image={Management}
                    Color={'#07031A'}
                    Title={'Webová správa'}
                    Subtitle={'Udržování webů a aplikací v nejlepší kondici.'}
                    ButtonColor={'#035799'}
                    ButtontextColor={'#FFFFFF'}
                    handleButtonClick={handleButtonClick}
                    Link={'#Web-management'}
                />
                {isModalOpen && <Demand title={selectedTitle} onClose={closeModal} />}
            </div>
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
                    'UI/UX design představuje v současnosti klíčový a zcela nezbytný aspekt vývoje každé webové stránky či aplikace. ', 
                    'Dalo by se i říci že UI/UX Design je takový průvodce webovou stránkou. Ukáže a řekne zákazníkovi přesně to co chcete.',
                    'Uživatel, potenciální zákazník, by měl být schopen se orientovat ve webovém rozhraní, i když s ním přichází poprvé do kontaktu.',
                    'Současně musí design vizuálně odpovídat profesionálním standardům a esteticky reprezentovat vaši značku, ať už se jedná o společnost, podnikatele, umělce, ...',
                ]}
                handleButtonClick={handleButtonClick}
                ButtonColor={'#064D80'}
                ButtonImg={Wdesign}
                ButtonText={'Poptat UI/IX Design'}
                RightColor={'#064D80'}
                RightTitleImg={Bldesign}
                RightTitle={'Jak to probíhá?'}
                RightParagraphTitleImg={Wdesign}
                RightParagraphsTitles={[
                    'Úvodní konzultace',
                    'Návrh struktury',
                    'UI Design',
                    'Předání návrhů'
                ]}
                RightParagraphs={[
                    'Probereme Vaší představu, cíle webu, přibližnou strukturu a cílové uživatele. Zároveň se podíváme na inspirace, barevné schéma, typografii a další vizuální prvky. Na závěr se dohodneme na rozsahu projektu, časovém harmonogramu a ceně.',
                    'Navrhnu rozložení prvků na jednotlivých stránkách webu. Na základě vaší zpětné vazby provedu patřičné úpravy.',
                    'Dle Vámi schválené struktury a rozvržení udělám detailní grafický návrh jak pro počítačové tak i pro mobilní zařízení, který budu s Vámi postupně konzultovat.',
                    'Při poslední konzultaci a po doplacení Vám budou předány všechny vytvořené grafické návrhy a výstupy.'
                ]}
            />
            <ServicesDetails 
                ServicesDetailsId='Web&Apps'
                Orientation={'Right'}
                LeftTitleImg={BCodeService}
                LeftTitle={'Weby a aplikace'}
                LeftParagraphs={[
                    'Webové stránky a webové aplikace slouží k prezentaci informací, služeb nebo produktů na internetu.', 
                    'Jsou klíčovým nástrojem pro komunikaci se zákazníky, umožňují budování značky a zvyšování viditelnosti online.',
                    'Mohou fungovat jako virtuální vizitka, e-shop, blog nebo nástroj pro poskytování služeb.',
                    'Je důležité aby webové stránky a aplikace byli responzivní na všechny typy zařízení od klasického desktopu až po malý telefon ve Vaší kapse, na kterém Vás lidé častokrát vyhledávají ještě více.',
                ]}
                handleButtonClick={handleButtonClick}
                ButtonColor={'#031F39'}
                ButtonImg={Whitecode}
                ButtonText={'Poptat Weby a aplikace'}
                RightColor={'#031F39'}
                RightTitleImg={CodeService}
                RightTitle={'Jak to probíhá?'}
                RightParagraphTitleImg={Whitecode}
                RightParagraphsTitles={[
                    'Analýza návrhu',
                    'Front-end',
                    'Integrace Back-endu',
                    'Testování a ladění',
                    'Předání a spuštění'
                ]}
                RightParagraphs={[
                    'Projdeme předvytvořený návrh kousek po kousku. Řeknete mi Vaší představu o funkcích webu, Vaše technické požadavky popřípadě detaily k designu. Ná základě toho analyzuji jaká technologie je nejvhodnější pro tvorbu Vašeho projektu.',
                    'Naprogramuji Front-endovou část aplikace, dle prodiskutovaného návrhu. Na předem dohodnutých schůzkách Vám bude postupně předvedena provedená práce.',
                    'Po dokončení front-endu, začnu integrovat jednotlivé funkcionality - připojení databáze, API, CMS systém a další... ',
                    'Projekt otestuji na různých typech zařízení a webových prohližečích. Doladím nedokonalosti jak designu, tak funkcí.',
                    'Po dokončení vývoje, Vašem schválení a doplacení domluvené částky, spustím web na webhostingu a předám Vám celý projekt popřípadě i technickou dokumentaci.',
                ]}
            />
            <ServicesDetails
                ServicesDetailsId='Web-management'
                Orientation={'Left'}
                LeftTitleImg={BlackManagement}
                LeftTitle={'Webová správa'}
                LeftParagraphs={[
                    'Webová správa je proces, který zajišťuje efektivní fungování, údržbu a optimalizaci webových stránek.', 
                    'Cílem je nejen zajistit, aby stránky byly dostupné, aktuální a technicky bezchybné, ale také přinášely uživatelům hodnotný obsah a dobrou uživatelskou zkušenost.',
                    'Tato činnost zahrnuje pravidelnou kontrolu webových stránek, zajištění bezpečnosti, optimalizaci pro vyhledávače, aktualizaci obsahu a mnoho dalšího...',
                    'V dnešní digitální době je správa webu klíčová pro úspěch jakékoliv online přítomnosti – od malých osobních blogů po rozsáhlé korporátní weby.'
                ]}
                handleButtonClick={handleButtonClick}
                ButtonColor={'#07031A'}
                ButtonImg={WhiteGear}
                ButtonText={'Poptat Webovou správu'}
                RightColor={'#07031A'}
                RightTitleImg={Management}
                RightTitle={'Jak to probíhá?'}
                RightParagraphTitleImg={WhiteGear}
                RightParagraphsTitles={[
                    'Průzkum webové stránky',
                    'Měsíční správa',
                    'Urgentní řešení',
                ]}
                RightParagraphs={[
                    'Pokud webové stránky nebyli vytvářeny mnou je potřeba abych si je prostudoval a zjistil na jaké technologii jsou postaveny a jak pracují jednotlivé funkcionality. Poté mohu web začít plně spravovat.',
                    '',
                    'V případě kritického problému na webové stránce zajistím jeho nápravu s maximální možnou rychlostí a efektivitou.',
                ]}
                RightSubtitlesTitle={'Měsíční správa'}
                RightSubtitles={[
                    'Kontrola bezpečnostních hrozeb',
                    'Optimalizace pro vyhledávače',
                    'Sledování výkonu, návštěvnosti a chování uživatelů',
                    'Oprava chyb',
                    'Aktualizace obsahu',
                    'Implementace nových prvků a funkcí',
                    'Obeznámení zákazníka o průběhu kontroly a provedených změnách'
                ]}
            />
        </div>
    )
}

export default Services;