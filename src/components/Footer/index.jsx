import './style.scss'
import logo from "../../assets/logo-tkoch-sem-fundo.png";
import { SocialMediaLinks } from '../SocialMediaLinks';
import { useTranslation } from 'react-i18next';

export function Footer() {

const {t} = useTranslation();

 return(
  <>
    <div className='footer'>

      <div className='footer__content'>

        <div className='footer__copyright'>
          <p className='footer__copyright_p1'>
            © 2023 Thiago Koch Martins
          </p>
          <p className='footer__copyright_p2'>
            {t("footer_copyright_p2_text")}
          </p>
        </div>

        <img className='footer__logo' src={logo} alt="logo"/>

        <SocialMediaLinks className="socialMediaLinksStructure--toFooter"/>

      </div>

    </div>
  </>
 )
}
