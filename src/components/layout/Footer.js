import styles from './Footer.module.css';

function Footer() {
    return(
        <footer className={styles.footer}>
            <p className={styles.copy_right}>
                <span>Projeto de Extensão</span> &copy; 2022
            </p>
        </footer>
    )
}

export default Footer;