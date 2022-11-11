import LinkButton from '../layout/LinkButton';
import styles from './ProjectCard.module.css';

function ProjectCard({ id, name, vacancies, initial_date, final_date, courses}) {

    var formatedInitialDate = initial_date.split('-').reverse().join('/');
    var formatedFinalDate = final_date.split('-').reverse().join('/');

    return (
        <div className={styles.card_container}>
            <h2>teste</h2>

            <div className={styles.description}>
                {name}
            </div>

            <div className={styles.courses_container}>
                {
                    courses.map((course) =>{
                        return(
                            <p 
                                className={styles.courses_item}
                                key={course.value}
                            >{course.label}</p>
                        )
                    })
                }
            </div>
            <div className={styles.information_container}>
                <div className={styles.date_container}>
                    <h3>Data</h3>
                    <p>{formatedInitialDate} até {formatedFinalDate}</p>
                </div>
                <div className={styles.vacancies_container}>
                    <h3>Vagas</h3>
                    <p>0/{vacancies} </p>
                </div>
            </div>
            <div className={styles.linkBtn_container}>
                <LinkButton to={`/projeto/${id}`} text="Ver mais..."/>
            </div>
        </div>
    )
}

export default ProjectCard;