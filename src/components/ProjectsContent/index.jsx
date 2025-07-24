import './style.scss'
import { ProjectCard } from '../ProjectCard'
import { SectionsTitle } from '../SectionsTitle';
import { ProjectsData } from '../../utils/projects_data';
import { useTranslation } from 'react-i18next';

export function ProjectsContent() {

  const {t} = useTranslation();

  const projectsData = ProjectsData();

  return(
    <>
      <div className='projectsContent'>
        <SectionsTitle text={t("projectsContent_titleText")}/>

        <div className='projectsContent__main'>
          {projectsData.map(projectData => (
            <ProjectCard data={projectData} key={projectData.index}/>
          ))}
        </div>
      </div>
    </>
  )
}