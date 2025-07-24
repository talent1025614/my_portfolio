import './style.scss'
import { SectionsTitle } from '../SectionsTitle';
import { TecnologieIcon } from '../TecnologieIcon';
import {tecnologiesData} from '../../utils/tecnologies_to_knowledge_content'
import { useTranslation } from 'react-i18next';

export function KnowledgeContent() {

  const {t} = useTranslation();

  return (
    <>
      <div className='knowledgeContent'>

        <SectionsTitle text={t("KnowledgeContent_titleText")}/>

        <div className='knowledgeContent__tecnologies'>
          {tecnologiesData.map(tecnologie =>(
            <TecnologieIcon key={(String(tecnologie.index))} data={tecnologie}/>
          ))}
        </div>

      </div>

    </>
  )
}