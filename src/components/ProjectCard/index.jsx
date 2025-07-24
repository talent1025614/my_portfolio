import './style.scss';
import { Button } from '../Button';
import PropTypes from 'prop-types';
import { TecnologieTag } from '../TecnologieTag'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';


export function ProjectCard(props) {

  const {data} = props;

  const {t} = useTranslation();

  const [isHovered, setIsHovered] = useState(false);

  const setTecnologieTagGreen = () => {
    setIsHovered(true)
  }
  const setTecnologieTagNormal = () => {
    setIsHovered(false)
  }

  return(
    <>
      <div className="projectCardStructure"
        onMouseEnter={setTecnologieTagGreen}
        onMouseLeave={setTecnologieTagNormal}
      >

        <h2 className="projectCardStructure__title">
          {data.title}
        </h2>

        <img className='projectCardStructure__image' src={data.image} alt={`layout do ${data.title}`} />

        <p className="projectCardStructure__description">
          {data.description}
        </p>

        <div className="projectCardStructure__tecnologies">
          {data.tecnologies.map(tecnologie => (
            <TecnologieTag className={isHovered ? 'tecnologieTagStructure--green' : 'tecnologieTagStructure'} key={tecnologie.index} text={tecnologie}/>
          ))}
        </div>
        
        <div className="projectCardStructure__buttons">
          <Button className="buttonStructure" title={t("projectCard_repositoryButtonText")} externalLink={data.repository}/>
          <Button className="buttonStructure--transparent" title="Deploy" externalLink={data.deploy}/>
        </div>
      </div>
    </>
  )
}

ProjectCard.propTypes = {
  data: PropTypes.object
};