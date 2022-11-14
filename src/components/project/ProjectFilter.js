import styles from './ProjectFilter.module.css';
import Input from '../form/Input';
import Select from 'react-select';
import { useState } from 'react';

function ProjectFilter({handleChange, handleChangeSelection}) {
    const status = [
        {value: 'todos', label: 'Todos os projetos'},
        {value: 'novo', label: 'Projetos novos'},
        {value: 'andamento', label: 'Projetos em andamento'},
        {value: 'concluido', label: 'Projetos concluídos'}
    ]

    const [valueField, setValueField] = useState('');

    function searchField(e) {
        handleChange(e.target.value)
        setValueField(e.target.value)
    }

    function selectionField(item) {
        handleChange('')
        handleChangeSelection(item.value)
        setValueField('')
    }

    return(
        <div className={styles.filter_container}>
            <Input 
                type="search"
                customStyle={styles.search}
                placeholder="Buscar..."
                handleOnChange={searchField}
                value={valueField}
            />
            <Select
                options={status}
                onChange={(item) => selectionField(item)}
                defaultValue={status[0]}
            />
        </div>
    )

}

export default ProjectFilter;