import React, { useState } from "react"
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { useTranslation } from "react-i18next"

import brLogo from "../images/br.png"
import enLogo from "../images/en.png"

function LanguageMenu() {
  const { i18n } = useTranslation()
  
  const [values, setValues] = useState({
    language: 'en'
  });

   const handleChange = (event) => {
    i18n.changeLanguage(event.target.value)

    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return(
    <Select
      value={values.language}
      onChange={(e) => handleChange(e)}
      disableUnderline
      inputProps={{
        name: 'language'
      }}
    >
      <MenuItem value={'en'}><img src={enLogo} alt="EN" /></MenuItem>
      <MenuItem value={'br'}><img src={brLogo} alt="PT-BR" /></MenuItem>
    </Select>
  )
}

export { LanguageMenu };