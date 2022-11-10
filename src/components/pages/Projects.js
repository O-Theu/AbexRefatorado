import ProjectFilter from "../project/ProjectFilter";
import styles from './Projects.module.css';

function Projects() {
    return(
        <section className={styles.project_container}>
            <ProjectFilter />
        </section>
    )
}

export default Projects;