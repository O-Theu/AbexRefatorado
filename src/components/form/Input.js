import styles from './Input.module.css';

function Input({ type, text, name, placeholder, handleOnChange, value, required, min,}) {
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input 
                type={type} 
                placeholder={placeholder} 
                value={value}
                id={name}
                name={name}
                onChange={handleOnChange}
                required={required}
                min={min}
            >
            </input>
        </div>
    )
}

export default Input;