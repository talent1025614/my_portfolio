import './style.scss';
import myPhotoWelcome from '../../assets/myPhotoWelcome.svg';
import { HiOutlineArrowLongDown } from "react-icons/hi2";
import { Button } from '../Button';
import PropTypes from 'prop-types';
import { SocialMediaLinks } from '../SocialMediaLinks';
import { useTranslation } from 'react-i18next';

export function WelcomeContent(props) {
  
  const { t, i18n } = useTranslation();
  const {link} = props

  return(
    <>
      <div className='welcomeContent'>

        <div className='welcomeContent__main'>

          <img  className='welcomeContent__myPhoto' src={myPhotoWelcome} 
          alt={t("welcomeContent_altOfPhoto")}/>

          <div className='welcomeContent__textsContainer'>

            <h1 className='welcomeContent__introduction'>
              {t("welcomeContent_introductionHelloI'm")} <span>Thiago,</span>
            </h1>

            <h1 className='welcomeContent__professionalTitle' 
            style={{color: i18n.language === "ptBR" ? "#fff" : "#0CBAB4"}}>
              {t("welcomeContent_professionalTitle")}
              <span style={{color: i18n.language === "en" ? "#fff" : ""}}>
                {t("welcomeContent_professionalTitleSpan")}
              </span>
            </h1>

            <p className='welcomeContent__salute'>
              <span>{t("welcomeContent_saluteSpan")}</span>{t("welcomeContent_salute")}
            </p>
            
            <SocialMediaLinks className="socialMediaLinksStructure--toWelcome"/>

          </div>

        </div>

        <div className='welcomeContent__actionButton'>
          <Button className='buttonStructure--withArrow' title={t("welcomeContent_textButton")} icon={HiOutlineArrowLongDown} internalLink={link}/>
        </div>
      </div>
      
    </>
  )
}

WelcomeContent.propTypes = {
  link: PropTypes.string
};