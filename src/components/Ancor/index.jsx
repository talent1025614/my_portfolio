import './style.scss';
import PropTypes from 'prop-types';

export function Ancor(props) {
  const {title, internalLink, closeMenu, ...rest} = props;

  console.log(closeMenu)

  const handleClick = () => {

    if (internalLink && !closeMenu) {
      window.location.href = internalLink;
    }
    
    if (internalLink && closeMenu) {
      window.location.href = internalLink;
      closeMenu();
    }

  }

  return(
    <>
      <a className="ancorStructure" onClick={handleClick} {...rest}>
        {title}
      </a>
    </>
  )

}

Ancor.propTypes = {
  title: PropTypes.string,
  internalLink: PropTypes.string,
  closeMenu: PropTypes.func,
  // onClick: PropTypes.func,
};