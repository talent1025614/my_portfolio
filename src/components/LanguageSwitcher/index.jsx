import './style.scss'
import japanFlag from "../../assets/jp-flag.svg";
import usaFlag from "../../assets/usa-flag.svg";
import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {

  const languageOptions = [
    {
      name: "日本語",
      value: "ja",
      flag: japanFlag
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
