import Input from '../form/Input';
import styles from './ProjectForm.module.css'

function ProjectForm() {
    return (
        <form className={styles.form}>
            <div className={styles.container_left}>
                <Input
                    type="text"
                    text="Nome do projeto"
                    placeholder="Digite o nome do projeto"
                />
                 <Input
                    type="number"
                    text="Quantidade de vagas"
                    placeholder="Digite quantas vagas estão disponiveis"
                />
                 <Input
                    type="date"
                    text="Data inicial do projeto"
                />
                 <Input
                    type="date"
                    text="Data final do projeto"
                />
            </div>
            <div className={styles.container_right}>
                <Input
                    type="text"
                    text="Cursos relacionados"
                    placeholder="Digite o nome do projeto"
                />
                 <Input
                    type="text"
                    text="Agenda do projeto"
                    placeholder="Digite o nome do projeto"
                />
                <textarea placeholder='Descrição do projeto' />
            </div>
        </form>
    )
}

export default ProjectForm;