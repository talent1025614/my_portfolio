import './style.scss';
import PropTypes from 'prop-types';

export function TecnologieTag(props) {
  
  const {text, ...rest} = props

  return(
    <>
      <div className="tecnologieTagStructure" {...rest}>
        {text}
      </div>
    </>
  )
}

TecnologieTag.propTypes = {
  text: PropTypes.string,
  rest: PropTypes.any
};