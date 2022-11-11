import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ProjectContext = createContext();


export const ProjectProvider = ({ children }) => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([])

    // GET cursos da api
    useEffect(() => {
        fetch("http://localhost:5000/courses", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCourses(data)
            })
            .catch((err) => console.log(err))
    }, [])


    //Post dos projetos na api
    function CreateProject(project) {
        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then((resp) => resp.json())
            .then((data) => {
                navigate("/projetos");
            })
            .catch((err) => console.log(err))
    }

    return(
        <ProjectContext.Provider value={{ courses, CreateProject}}>
            {children}
        </ProjectContext.Provider>
    )
}