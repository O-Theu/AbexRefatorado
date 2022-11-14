import styles from './Project.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ProjectForm from './ProjectForm';
import Container from '../layout/Container';
import { ProjectProvider } from '../context/ProjectContext';

import { FiTrash } from 'react-icons/fi';
import { BsPencil } from 'react-icons/bs';
import { IoReturnUpBack } from 'react-icons/io5';

function Project() {
    const navigate = useNavigate();
    const { id }= useParams();
    const [ project, setProject ] = useState([])

    // Metodo para buscar os dados do projeto
    useEffect(() => {
            fetch((`http://localhost:5000/projects/${id}`), {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            }) 
            .then((resp) => resp.json())
            .then((data) => {
                 setProject(data)
            }).catch((err) => {
                console.log(err)
            })
    }, [id])

    const [toggleForm, setToggleForm] =  useState(false);
    const [btnText, setBtnText] = useState('Editar');

    function btnForm() {
        setToggleForm(!toggleForm)

        if(btnText === 'Editar'){
            setBtnText('Cancelar')
        } else {
            setBtnText('Editar')
        }
    }

    // Metodo para atualizar os projetos
    function updateProject(project) {
        fetch((`http://localhost:5000/projects/${id}`), {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)     
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data)
                setToggleForm(!toggleForm)
                setBtnText('Editar')
            }) 
            .catch((err) => console.log(err))
    }

    // Metodo para deletar os projetos
    function deleteProject() {
        fetch((`http://localhost:5000/projects/${id}`), {
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                navigate("/projetos");
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
           <ProjectProvider>
             <Container customClass='evenly'>
                <ul className={styles.btn_container}>
                    <li className={styles.item}>
                        <div className={styles.icon_edit}>
                            {!toggleForm && <BsPencil />}
                            {toggleForm && <IoReturnUpBack />}
                        </div>
                        <button className={styles.btn_edit} onClick={btnForm}>{btnText}</button>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.icon_delete}>
                            <FiTrash />
                        </div>
                        <button className={styles.btn_delete} onClick={deleteProject}>Deletar</button>
                    </li>
                </ul>
                <div>
                    {!toggleForm && (
                        <div className={styles.project_container}>
                            <h1>{project.name}</h1>
                        </div>
                    )}

                    {toggleForm && (
                        <div className={styles.edit_form_container}>
                            <h2>Editar projeto</h2>
                            <ProjectForm 
                                projectData={project}
                                buttonText="Concluir edição"
                                handleSubmit={updateProject}
                            />
                        </div>   
                    )}
                </div>
                </Container>
           </ProjectProvider>
        </div>
    )
}

export default Project;