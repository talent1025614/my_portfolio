import './style.scss'
import PropTypes from 'prop-types';

export function Button(props) {
  const {title, icon: Icon, internalLink, externalLink, ...rest} = props;

  const handleClick = () => {
    if (internalLink) {
      window.location.href = internalLink;
    } else if(externalLink) {
      window.open(externalLink, '_blank');
    }
  };

  return(
    <>
      <button
        className="buttonStructure" 
        onClick={handleClick}
        {...rest}
      >
        {title}
        {Icon && <Icon/>}
      </button>
    </>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  internalLink: PropTypes.string,
  externalLink: PropTypes.string,
  icon: PropTypes.any,
};