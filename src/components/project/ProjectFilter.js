import styles from './ProjectFilter.module.css';
import Input from '../form/Input';

function ProjectFilter() {
    return(
        <div className={styles.filter_container}>
            <Input 
                type="search"
                placeholder="Buscar..."
            />
            <select></select>
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