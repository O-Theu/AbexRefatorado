import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css';

function NewProjects() {
    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie o projeto de extensão ou pesquisa</p>
            <ProjectForm />
        </div>
        
    )
}

export default NewProjects;