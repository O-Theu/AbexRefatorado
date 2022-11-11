import React, { useEffect, useRef, useState} from "react";
import { motion } from 'framer-motion'
import ProjectCard from "./ProjectCard";

import styles from './ProjectCarrosel.module.css'

export const Carrossel = ({ projects }) => {
    const carrosel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth)
    });

    return (
        <div className={styles.container_carrosel}>
                <motion.div 
                   ref={carrosel} 
                   className="carrosel" 
                   whiletop={{ cursor: "grabbing" }} 
                >
                    <motion.div 
                        className={styles.inner}
                        drag="x"
                        dragConstraints={{ right: 0, left:-width}}
                    >
                    {
                        projects.map((project) => {
                            return( 
                                <ProjectCard
                                    key={project.id}
                                    id={project.id}
                                    name={project.name}
                                    vacancies={project.vacancies}
                                    initial_date={project.initial_date}
                                    final_date={project.final_date}
                                    courses={project.courses}
                                /> 
                            )
                        })
                        }
                    </motion.div>
                </motion.div>
        </div>
    )
}