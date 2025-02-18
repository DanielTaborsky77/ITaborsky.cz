import './Demand.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { Schema } from "../FormSchema/Schema";

const Demand = ({ title, onClose, onSuccess }) => {
  const [selectedService, setSelectedService] = useState(title);
  const [inputBgColor, setInputBgColor] = useState('');
  const [isLoading, setIsLoading] = useState(false);



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

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: {
      name: "",
      email: "",
      tel: "",
      ico: "",
      description: "",
    },
    validationSchema: Schema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const response = await fetch('https://send-email-4illabtotq-uc.a.run.app', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: values.email,
            service: `${selectedService}`,
            name: values.name,
            tel: values.tel,
            ico: values.ico || '',
            description: values.description,
          }),
        });

        if (response.ok) {
          console.log('Email sent successfully');
          resetForm();
          setTimeout(onClose, 50);
          setIsLoading(false);
          onSuccess(true);
        } else {
          console.error('Failed to send email');
        }
      } catch (error) {
        console.error('Error:', error);
        setTimeout(onClose, 50);
        setIsLoading(false);
        onSuccess(false);
      }
    },
  });

  return (
    <AnimatePresence>
      <motion.div
        className={`Demand-Overlay ${isLoading ? 'blurred' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        {isLoading ? (
          <div className="loading-spinner"></div>
        ) : (
          <motion.div
            className="Demand-Content"
            initial={{ opacity: 0, transform: 'translate(0%, 0%) scale(0.5)' }}
            animate={{ opacity: 1, transform: 'translate(0%, 0%) scale(1)' }}
            exit={{ opacity: 0, transform: 'translate(0%, 0%) scale(0.5)' }}
          >
            <button className="Demand-Close-Button" onClick={onClose}>
              &times;
            </button>
            <p className='Demand-Title'>Nezávazná žádost</p>
            <form onSubmit={handleSubmit} className='Demand-Form'>
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
                  <input
                    className='Demand-Input'
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ borderColor: inputBgColor }}
                  />
                  {errors.name && touched.name && <p className="error">{errors.name}</p>}
                </div>
              </div>
              <div className='Demand-Group'>
                <label className='Demand-Label'>E-mail *</label>
                <input
                  className='Demand-Input'
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{ borderColor: inputBgColor }}
                />
                {errors.email && touched.email && <p className="error">{errors.email}</p>}
              </div>
              <div className='Demand-Duo'>
                <div className='Demand-Group'>
                  <label className='Demand-Label'>Telefonní číslo *</label>
                  <input
                    className='Demand-Input'
                    name="tel"
                    value={values.tel}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ borderColor: inputBgColor }}
                  />
                  {errors.tel && touched.tel && <p className="error">{errors.tel}</p>}
                </div>
                <div className='Demand-Group'>
                  <label className='Demand-Label'>IČO (Nepovinné)</label>
                  <input
                    className='Demand-Input'
                    name="ico"
                    value={values.ico}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ borderColor: inputBgColor }}
                  />
                  {errors.ico && touched.ico && <p className="error">{errors.ico}</p>}
                </div>
              </div>
              <div className='Demand-Group'>
                <label className='Demand-Label'>Název a stručný popis projektu *</label>
                <textarea
                  className='Demand-Textarea'
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{ borderColor: inputBgColor }}
                ></textarea>
                {errors.description && touched.description && <p className="error">{errors.description}</p>}
              </div>
              <div className='Demand-Submit'>
                <input className='Demand-Submit-Button' type="submit" value='Nezávazně zažádat' />
              </div>
            </form>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Demand;
