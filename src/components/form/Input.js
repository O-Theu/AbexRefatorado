import styles from './Input.module.css';

function Input({ type, text, name, placeholder, handleOnChange, value }) {
    return(
        <div className={styles.form_control}>
            <label htmlFor="">{text}</label>
            <input type={type} placeholder={placeholder} value={value}></input>
        </div>
    )
}

export default Input;