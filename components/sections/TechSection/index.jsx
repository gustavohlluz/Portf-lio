import { technologies } from "../../../src/data/technologies"
import { TechCard } from "./TechCard"
import styles from "./style.module.css"

export const TechSection = () =>{
    return (
        <section className={styles.tech}>
            <div className="container">
                <h2>Tecnologias</h2>
                <ul>
                    {technologies.map(technologie => <TechCard key={technologie.id} technologie= {technologie}/>)}    
                </ul>
            </div>
        </section>
    )
}