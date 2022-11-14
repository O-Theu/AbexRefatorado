import { useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext';
import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css';

function NewProjects() {

    const { CreateProject } = useContext(ProjectContext);

    const submit = (project) => {
        CreateProject(project)
    }

    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie o projeto de extensão ou pesquisa</p>
            <ProjectForm 
                buttonText="Criar projeto"
                handleSubmit={submit}
            />
        </div> 
    )
}

export default NewProjects;