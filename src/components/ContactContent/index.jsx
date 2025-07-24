import { useTranslation } from 'react-i18next'
import { ContactForm } from '../ContactForm'
import { SocialMediaLinks } from '../SocialMediaLinks'
import './style.scss'

export function ContactContent() {

  const {t} = useTranslation();

  const placeholders = [
    {
      name:t("contactForm_nameInputPlaceholder"),
      email:t("contactForm_emailAddressInputPlaceholder"),
      message:t("contactForm_messageInputPlaceholder"),
    }
  ]

  return(
    <>
      <div className='contactContent'>

        <h2 className='contactContent__title'>
          {t("contactContent_titleText")}
        </h2>

        <ContactForm placeholders={placeholders}/>
      
        <SocialMediaLinks className="socialMediaLinksStructure"/>

      </div>
    </>
  )
}