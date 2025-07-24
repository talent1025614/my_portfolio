import './style.scss'
import { EducationData } from '../../utils/educationData';
import { SectionsTitle } from '../SectionsTitle';
import { useTranslation } from 'react-i18next';

export function EducationContent() {
  
  const {t} = useTranslation();
  const informations = EducationData();

  return (
    <>
    <div className='educationContent'>
      <SectionsTitle text={t("educationContent_titleText")}/>

      <div className='educationContent__main'>
        {informations.map(information => (
          <div className='educationContent__informationBlock' key={String(information.index)}>
            <h2 className='educationContent__course'>
              {information.course}
            </h2>
            <p className='educationContent__level'>
              {information.level}
            </p>
            <p className='educationContent__institution'>
              {information.institution}
            </p>
            <p className='educationContent__period'>
              {information.period}
            </p>
            <p className='educationContent__about'>
              {information.about}
            </p>
          </div>
        ))}
      </div>
    </div>
    
    </>
  )
}