import { DefaultTemplate } from "../../components/DefaultTemplate"
import { AboutMeSection } from "../../components/sections/AboutMeSection"
import { WelcomeSection } from "../../components/sections/WelcomeSection"


export const HomePage = () => {
    return (
        <div>
            <DefaultTemplate>
             <WelcomeSection />
             <AboutMeSection />   
            </DefaultTemplate>
        </div>
    )
}