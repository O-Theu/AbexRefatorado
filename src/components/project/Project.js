import styles from './Project.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ProjectForm from './ProjectForm';
import Container from '../layout/Container';
import { ProjectProvider } from '../context/ProjectContext';

import { FiTrash } from 'react-icons/fi';
import { BsPencil } from 'react-icons/bs';
import { AiOutlineSave } from 'react-icons/ai';
import { IoReturnUpBack } from 'react-icons/io5';

function Project() {
    const { id }= useParams();
    const [ project, setProject ] = useState([])
    
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
                        <div className={styles.icon_save}>
                            <AiOutlineSave />
                        </div>
                        <button className={styles.btn_save} onClick={btnForm}>Salvar</button>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.icon_delete}>
                            <FiTrash />
                        </div>
                        <button className={styles.btn_delete} onClick={btnForm}>Deletar</button>
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
                                customClass={'form_edit'}
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