import {projects} from "../../../src/data/projects"
import { ProjectCard } from "./ProjectCard"
import styles from "./style.module.css"


export const ProjectSection = () =>{
    return (
        <section className={styles.projects} >
            <div className="container">
                <h2>Projetos</h2>
                <ul>
                    {projects.map(project => <ProjectCard key={project.id} project={project}/>)}
                </ul>
            </div>
        </section>
    )
}