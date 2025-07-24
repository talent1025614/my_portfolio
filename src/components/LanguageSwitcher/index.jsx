import './style.scss'
import brFlag from "../../assets/br-flag.svg";
import usaFlag from "../../assets/usa-flag.svg";
import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {

  const languageOptions = [
    {
      name: "POR",
      value: "ptBR",
      flag: brFlag
    },
    {
      name: "EN",
      value: "en",
      flag: usaFlag
    }
  ]

  const { i18n } = useTranslation()

  return(
    <div className="languageSwitcherStructure">
      {languageOptions.map(languageOption => (

        <button className='languageSwitcherStructure__button' 
        key={languageOption.value}
        onClick={() => {
          i18n.changeLanguage(languageOption.value)
        }}
        >

          <img  className='languageSwitcherStructure__image' 
          src={languageOption.flag} alt={languageOption.name}
          style={{
            border:
            i18n.language === languageOption.value ? "2px solid #00FFFB" : "none",
            borderRadius:
            i18n.language === languageOption.value ? "50%" : "none",
            padding:
            i18n.language === languageOption.value ? ".2rem" : "none",
          }}
          />

        </button>

      ))}
    </div>
  )
}
