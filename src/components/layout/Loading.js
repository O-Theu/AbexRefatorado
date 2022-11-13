import styles from './Loading.module.css'
import loading from '../../img/sync.png'

import { BiLoaderAlt } from 'react-icons/bi'

function Loading() {
    return(
        <div className={styles.loader_container}>
            <BiLoaderAlt className={styles.loader}/>
        </div>
    )
}

export default Loading;