import styles from './ProjectFilter.module.css';
import Input from '../form/Input';
import Select from 'react-select';

function ProjectFilter() {
    const status = [
        {value: 'novo', label: 'Projetos novos'},
        {value: 'andamento', label: 'Projetos em andamento'},
        {value: 'concluido', label: 'Projetos concluídos'}
    ]

    return(
        <div className={styles.filter_container}>
            <Input 
                type="search"
                placeholder="Buscar..."
            />
            <Select
                isMulti
                options={status} 
            />
            <Input 
                type="checkbox"
            />
            <Input 
                type="checkbox"
            />
            <Input 
                type="checkbox"
            />
            <Input 
                text="Data inicial"
                type="date"
            />
            <Input 
                text="Data Final"
                type="date"
            />
        </div>
    )

}

export default ProjectFilter;