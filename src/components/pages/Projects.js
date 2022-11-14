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

    // Filtro do campo de busca
    const [search, setSearch] = useState('');
    const searchLowerCase = search.toLowerCase();
    const allProjects = projects.filter(({name}) => name.includes(searchLowerCase));

    const ProjectsFilter = []

    // Filtro da Datas, campo select
    const data = new Date();
    var formatedDate = ((data.getFullYear() )) + "-" + ((data.getMonth() + 1)) + "-" + ((data.getDate()));
    const [searchSelection, setSearchSelection] = useState('todos')

    if(searchSelection == 'todos'){
        ProjectsFilter.push(...allProjects)
    }

    if(searchSelection == 'novo'){
        allProjects.map((project) => {
            if(project.initial_date > formatedDate) {
                ProjectsFilter.push(project)
            }
        })
    }

    if(searchSelection == 'andamento'){
        allProjects.map((project) => {
            if(project.initial_date <= formatedDate && project.final_date > formatedDate) {
                ProjectsFilter.push(project)
            }
        })
    }

    if(searchSelection == 'concluido'){
        allProjects.map((project) => {
            if(project.final_date < formatedDate) {
                ProjectsFilter.push(project)
            }
        })
    }
    
    
    return(
        <ProjectProvider>
            <section className={styles.project_container}>
                <ProjectFilter 
                    handleChange={setSearch}
                    handleChangeSelection={setSearchSelection}
                />
                <Carrossel 
                    projects={ProjectsFilter}
                />
            </section>
        </ProjectProvider>
    )
}

export default Projects;