import { DefaultTemplate } from "../../components/DefaultTemplate"
import { AboutMeSection } from "../../components/sections/AboutMeSection"
import { ProjectSection } from "../../components/sections/ProjectsSection"
import { TechSection } from "../../components/sections/TechSection"
import { WelcomeSection } from "../../components/sections/WelcomeSection"



export const HomePage = () => {
    return (
        <div>
            <DefaultTemplate>
             <WelcomeSection />
             <AboutMeSection />   
             <TechSection />
             <ProjectSection />
            </DefaultTemplate>
        </div>
    )
}