import './Demand.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Demand = ({ title, onClose }) => {
  const [selectedService, setSelectedService] = useState(title);
  const [inputBgColor, setInputBgColor] = useState('');

  // Funkce pro nastavení barvy pozadí na základě zvolené služby
  const setBackgroundColor = (service) => {
    switch (service) {
      case 'FULL-STACK':
        setInputBgColor('#0B8BC9');
        break;
      case 'UI/UX Design':
        setInputBgColor('#064D80');
        break;
      case 'Weby a aplikace':
        setInputBgColor('#031F39');
        break;
      case 'Webová správa':
        setInputBgColor('#07031A');
        break;
    }
  };

  useEffect(() => {
    setBackgroundColor(title);
  }, [title]);


  return (
    <AnimatePresence>
      <motion.div className="Demand-Overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        <motion.div className="Demand-Content"
          initial={{ opacity: 0, transform: 'translate(0%, 0%) scale(0.5)' }}
          animate={{ opacity: 1, transform: 'translate(0%, 0%) scale(1)' }}
          exit={{ opacity: 0, transform: 'translate(0%, 0%) scale(0.5)' }}
        >
          <button className="Demand-Close-Button" onClick={onClose}>
            &times;
          </button>
          <p className='Demand-Title'>Poptávka</p>
          <form className='Demand-Form'>

            <div className='Demand-Duo'>
              <div className='Demand-Group'>
                <label className='Demand-Label'>Služba *</label>
                <select
                  className='Demand-Select'
                  value={selectedService}
                  style={{ borderColor: inputBgColor }}
                  onChange={(e) => {
                    setSelectedService(e.target.value);
                    setBackgroundColor(e.target.value);
                  }}
                >
                  <option value={title} defaultValue>{title}</option>
                  <option value="FULL-STACK">FULL-STACK</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Weby a aplikace">Weby a aplikace</option>
                  <option value="Webová správa">Webová správa</option>
                </select>
              </div>
              <div className='Demand-Group'>
                <label className='Demand-Label'>Jméno a příjmení *</label>
                <input className='Demand-Input' style={{ borderColor: inputBgColor }} />
              </div>
            </div>
            <div className='Demand-Group'>
              <label className='Demand-Label'>E-mail *</label>
              <input className='Demand-Input' style={{ borderColor: inputBgColor }} />
            </div>
            <div className='Demand-Duo'>
              <div className='Demand-Group'>
                <label className='Demand-Label'>Telefonní číslo *</label>
                <input className='Demand-Input' style={{ borderColor: inputBgColor }} />
              </div>
              <div className='Demand-Group'>
                <label className='Demand-Label'>IČO (Nepovinné)</label>
                <input className='Demand-Input' style={{ borderColor: inputBgColor }} />
              </div>
            </div>
            
            <div className='Demand-Group'>
              <label className='Demand-Label'>Název a stručný popis projektu *</label>
              <textarea className='Demand-Textarea' style={{ borderColor: inputBgColor }}></textarea>
            </div>

            <div className='Demand-Submit'>
              <input className='Demand-Submit-Button' type="submit" value='Poptat službu' />
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Demand;
