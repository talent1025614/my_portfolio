import { Ancor } from '../Ancor';
import './style.scss';
import logo from "../../assets/logo-tkoch-sem-fundo.png";
import openMenuButton from "../../assets/openMenu-button.svg";
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher';

export function NavBarr(props) {
  const { links, openMenu } = props;

  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return(
    <>
      <div className='navBarr'>

        <img className='navBarr__logo' src={logo} alt="logo" onClick={scrollToTop}/>

        <nav className='navBarr__nav'>
          <Ancor title={t("ancorAbout")} internalLink={links.link1}/>
          <Ancor title={t("ancorKnowledge")} internalLink={links.link2}/>
          <Ancor title={t("ancorEducation")} internalLink={links.link3}/>
          <Ancor title={t("ancorProjects")} internalLink={links.link4}/>
          <Ancor title={t("ancorContact")} internalLink={links.link5}/>
          <div className='navBarr__changeLanguage'>
            <LanguageSwitcher/>
          </div>
        </nav>


        <button className='navBarr__openMenu'> 
          <img src={openMenuButton} alt="abrir menu" onClick={openMenu}/>
        </button>

      </div>
    </>
  )
}

NavBarr.propTypes = {
  links: PropTypes.object,
  link1: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  link4: PropTypes.string,
  link5: PropTypes.string,
  openMenu: PropTypes.bool,
};