import { ProjectProvider } from '../context/ProjectContext';
import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css';

function NewProjects() {
    return(
        <ProjectProvider>
            <div className={styles.newproject_container}>
                <h1>Criar Projeto</h1>
                <p>Crie o projeto de extensão ou pesquisa</p>
                <ProjectForm />
            </div>
        </ProjectProvider>
       
    )
}

export default NewProjects;