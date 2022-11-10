import { Link } from 'react-router-dom';
import Container from './Container';

import logo from '../../img/logo.png'
import styles from './Navbar.module.css';

function Navbar() {
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'>
                    <img 
                        src={logo} 
                        alt="Logo da UnoChapecó"
                    />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Início</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/projetos'>Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/novoprojeto'>Novo projeto</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar;