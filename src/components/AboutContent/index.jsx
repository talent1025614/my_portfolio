import './style.scss';
import { AboutData } from '../../utils/aboutData';
import { SectionsTitle } from '../SectionsTitle';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';

export function AboutContent() {

  const {t} = useTranslation();

  const subjects = AboutData();

  const insertColorAndTargetBlankOnAncor = {
    a: ({...props }) => {
      return <a {...props} target="_blank" rel="noopener noreferrer" style={{color: "#168684"}} />;
    },
  };

  return (
    <>
      <div className='aboutContent'>

        <SectionsTitle text={t("aboutContent_titleText")}/>

        <div className='aboutContent__main'>
          {subjects.map(subject => (
            <div className='aboutContent__subjectBlock' key={subject.title}>
              <h2 className='aboutContent__subjectTitle'>
                {subject.title}
              </h2>
              <p className='aboutContent__subjectText'>
                <ReactMarkdown components={insertColorAndTargetBlankOnAncor}>
                  {subject.text}
                </ReactMarkdown>
              </p>
            </div>
          ))}
        </div>
        
      </div>
    
    </>
  )
}