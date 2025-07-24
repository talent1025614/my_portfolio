import PropTypes from 'prop-types';
import './style.scss';

export function SectionsTitle(props) {

  const {text} = props;
  return(
    <>
      <div className='sectionsTitleStructure'>
        {text}
      </div>
    </>
  )
}

SectionsTitle.propTypes = {
  text: PropTypes.string
};

