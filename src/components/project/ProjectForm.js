import Input from '../form/Input';
import styles from './ProjectForm.module.css';
import Select from 'react-select';
import { useContext, useEffect, useState } from 'react';
import { ProjectContext } from '../context/ProjectContext';
import Loading from '../layout/Loading';

function ProjectForm({projectData, customClass}) {
    
    const { courses, CreateProject } = useContext(ProjectContext);
    const [ removeLoading,  setRemoveLoading] = useState(false)

    const [project, setProject] = useState({})

    useEffect(() => {
        setTimeout(() => {
            setRemoveLoading(true)
            if(projectData.id){
                setProject(projectData)
            } else {
                setProject({})
            }
        }, 300)
      
    }, [projectData])
   
    

    

    const submit = (e) => {
        e.preventDefault();
        CreateProject(project)
    }

    function handleChange(e) {
      setProject({ ...project, [e.target.name]: e.target.value})
    }

    function handleSelect(item) {
        setProject({ ...project, courses: item })
    }

    return (
        <>
            {!removeLoading && <Loading />}
            <form className={`${styles.form} ${styles[customClass]}`} onSubmit={submit}>
                <div className={styles.container_left}>
                    <Input
                        type="text"
                        text="Nome do projeto"
                        placeholder="Digite o nome do projeto"
                        name="name"
                        handleOnChange={handleChange}
                        required={true}
                        value={project.name ? project.name : ''}
                    />
                    <Input
                        type="number"
                        text="Quantidade de vagas"
                        placeholder="Digite quantas vagas estão disponiveis"
                        name="vacancies"
                        handleOnChange={handleChange}
                        required={true}
                        value={project.vacancies ? project.vacancies : ''}
                    />
                    <Input
                        type="date"
                        text="Data inicial do projeto"
                        name="initial_date"
                        handleOnChange={handleChange}
                        required={true}
                        value={project.initial_date ? project.initial_date : ''}
                    />
                    <Input
                        type="date"
                        text="Data final do projeto"
                        name="final_date"
                        handleOnChange={handleChange}
                        min={project.initial_date}
                        required={true}
                        value={project.final_date ? project.final_date : ''}
                    />
                </div>
                <div className={styles.container_right}>
                    <label>Cursos relacionados</label>
                    <Select
                        className={styles.select}
                        isMulti
                        closeMenuOnSelect={false}
                        options={courses}
                        value={project.courses ? project.courses : ''}
                        placeholder="Selecione os cursos relacionados"
                        name="courses"
                        onChange={(item) => handleSelect(item)}
                    />
                    <Input
                        type="text"
                        text="Agenda do projeto"
                        placeholder="Digite o nome do projeto"
                        name="schedule"
                        handleOnChange={handleChange}
                        required={true}
                        value={project.schedule ? project.schedule : ''}
                    />
                    <button type='submit'>Enviar</button>

                    {/* atualizar para componente */}
                    {/* <label>Descrição do projeto</label>
                    <textarea
                        className={styles.descricao}
                        placeholder='Descrição do projeto' 
                        name="description"
                        handleOnChange={handleChange}
                    /> */}
                </div>
            </form>
        </>
    )
}

export default ProjectForm;