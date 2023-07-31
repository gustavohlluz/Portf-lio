import { technologies } from "../../../src/data/technologies"
import { TechCard } from "./TechCard"


export const TechSection = () =>{
    return (
        <section>
            <div className="container">
                <h2>Tecnologias</h2>
                <ul>
                    {technologies.map(technologie => <TechCard key={technologie.id} technologie= {technologie}/>)}    
                </ul>
            </div>
        </section>
    )
}