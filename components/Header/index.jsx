
import portfolioImg from "../../src/assets/portfolio.png"
import { AboutMeSection } from "../sections/AboutMeSection";
import { ProjectSection } from "../sections/ProjectsSection";
import { TechSection } from "../sections/TechSection";
import styles from "./style.module.css";

export const Header = () => {

    return(
        <header className={styles.header}>
            <div className="container">
                <div>
                    <img src={portfolioImg} alt="Logo Portfolio" />
                    <nav>
                        <a href={<AboutMeSection/>}>Sobre</a>
                        <a href={<TechSection/>}>Stack</a>
                        <a href={<ProjectSection/>}>Projetos</a>
                    </nav>
                    <button>Contato</button>
                </div>
            </div>
        </header>
    )
}