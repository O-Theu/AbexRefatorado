import { useEffect, useState } from "react";
import {  ProjectProvider } from "../context/ProjectContext";
import { Carrossel } from "../project/ProjectCarrosel";
import ProjectFilter from "../project/ProjectFilter";

import styles from './Projects.module.css';

function Projects() {
    // GET dos projetos na api
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/projects", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProjects(data)
        })
        .catch(err => console.log(err))
    }, [])



    return(
        <ProjectProvider>
            <section className={styles.project_container}>
                <ProjectFilter />
                <Carrossel 
                    projects={projects}
                />
            </section>
        </ProjectProvider>
    )
}

export default Projects;