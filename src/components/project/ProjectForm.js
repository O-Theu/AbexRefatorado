import Input from '../form/Input';
import styles from './ProjectForm.module.css';
import Select from 'react-select';
import { useContext, useState } from 'react';
import { ProjectContext } from '../context/ProjectContext';

function ProjectForm() {
    const { courses, CreateProject, projectData } = useContext(ProjectContext);

    const [project, setProject] = useState([projectData || {}])

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
        <form className={styles.form} onSubmit={submit}>
            <div className={styles.container_left}>
                <Input
                    type="text"
                    text="Nome do projeto"
                    placeholder="Digite o nome do projeto"
                    name="name"
                    handleOnChange={handleChange}
                />
                 <Input
                    type="number"
                    text="Quantidade de vagas"
                    placeholder="Digite quantas vagas estão disponiveis"
                    name="vacancies"
                    handleOnChange={handleChange}
                />
                 <Input
                    type="date"
                    text="Data inicial do projeto"
                    name="initial_date"
                    handleOnChange={handleChange}
                />
                 <Input
                    type="date"
                    text="Data final do projeto"
                    name="final_date"
                    handleOnChange={handleChange}
                />
            </div>
            <div className={styles.container_right}>
                <label>Cursos relacionados</label>
                <Select
                    className={styles.select}
                    isMulti
                    closeMenuOnSelect={false}
                    options={courses}
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
    )
}

export default ProjectForm;