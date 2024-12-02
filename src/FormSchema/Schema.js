import * as yup from "yup";
const isValidICO = (value) => {
    if (!value || value.length !== 8 || !/^\d+$/.test(value)) return false;
    const weights = [8, 7, 6, 5, 4, 3, 2];
    const sum = value
      .slice(0, 7)
      .split("")
      .reduce((acc, digit, idx) => acc + digit * weights[idx], 0);
    const mod = sum % 11;
    const checkDigit = mod === 0 ? 0 : mod === 1 ? 1 : 11 - mod;
    return parseInt(value[7], 10) === checkDigit;
  };
export const Schema = yup.object().shape({
    name: yup
      .string()
      .min(6, 'Nemůže obsahovat méně než 6 znaků')
      .max(50, 'Nesmí obsahovat více jak 50 znaků')
      .matches(/^[a-zA-ZáéíóúýčďěňřšťžůÁÉÍÓÚÝČĎĚŇŘŠŤŽŮ\s'-]+$/, 'Speciální znaky nejsou povoleny')
      .matches(/\s/, 'Musí obsahovat Jméno a příjmení oddělené mezerou')
      .matches(
        /^([A-ZÁÉÍÓÚÝČĎĚŇŘŠŤŽŮ][a-záéíóúýčďěňřšťžů'-]+(-[A-ZÁÉÍÓÚÝČĎĚŇŘŠŤŽŮ][a-záéíóúýčďěňřšťžů'-]+)?\s)+[A-ZÁÉÍÓÚÝČĎĚŇŘŠŤŽŮ][a-záéíóúýčďěňřšťžů'-]+$/,
        'Jméno a příjmení musí začínat velkým písmenem'
      )
      .required('Pole je povinné'),
      email: yup
      .string()
      .required('Pole je povinné')
      .max(254, 'E-mail nesmí být delší než 254 znaků')
      .matches(
        /^[a-zA-Z0-9._%+-@]+$/,
        'E-mail obsahuje nepovolené znaky'
      )
      .test(
        'is-valid-email',
        'E-mail musí být ve formátu např. uzivatel@domena.cz',
        (value) => {
          if (!value) return false;
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
        }
      ),
      tel: yup
      .string().
      matches(
        /^(\+\d{1,3}[- ]?)?\d{3,}$/i,
        'Neplatný formát tel. čísla'
      ).required('Povinné pole'),
      ico: yup
      .string()
      .nullable()
      .default(null) 
      .transform((value, originalValue) => (originalValue === '' ? null : value))
      .test(
        "is-valid-ico",
        "IČO není platné",
        (value) =>
          value === null || (isValidICO(value) && /^\d{8}$/.test(value))
      ),    
      description: yup
      .string()
      .required("Pole je povinné")
      .matches(
        /^[a-zA-Z0-9\s\.\,\-\!\?\'\"\:\(\)]*$/,
        "Popis nemůže obsahovat tyto speciální znaky."
      )
      .max(500, "Popis nesmí být delší než 500 znaků")
  });