import {projects} from "../../../src/data/projects"
import { ProjectCard } from "./ProjectCard"



export const ProjectSection = () =>{
    return (
        <section>
            <div className="container">
                <h2>Projetos</h2>
                <ul>
                    {projects.map(project => <ProjectCard key={project.id} project={project}/>)}
                </ul>
            </div>
        </section>
    )
}