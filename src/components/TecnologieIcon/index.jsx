import PropTypes from 'prop-types';
import './style.scss';

export function TecnologieIcon(props) {

  const {data} = props;

  return(

    <>
    
    <div className="tecnologieIconStructure">

      <div className="tecnologieIconStructure__ring" dangerouslySetInnerHTML={{__html: data.icon}} 
        id={data.name.replace(/\s/g, '_')}
      />

      <p className="tecnologieIconStructure__name" >
        {data.name}
      </p>

    </div>
    </>
  )
}

TecnologieIcon.propTypes = {
  data: PropTypes.object,
  icon: PropTypes.string,
  name: PropTypes.string
};