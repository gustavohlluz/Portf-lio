import whatsappIcon from "../../src/assets/whatsapp-icon.png"
import linkedinIcon from "../../src/assets/linkedin-icon.png"
import githubIcon from "../../src/assets/github-icon.png"
import { user } from "../../src/data/user"
import styles from "./style.module.css"


export const Footer = () =>{
    
    
    return (
        <footer className={styles.footer}>
            <div className="container">
                <h2>Contato</h2>
                <div>
                    <a href="https://wa.me/5533991112993"><img src={whatsappIcon} alt="Whatsapp" /></a>
                    <a href="https://www.linkedin.com/in/gustavo-luz-5952621ba/"><img src={linkedinIcon} alt="Linkedin"/></a>
                    <a href="https:496049//github.com/gustavohlluz"><img src={githubIcon} alt="Github" /></a>
                </div>
                <p>Todos os direitos reservados - {user}</p>
            </div>
        </footer>
    )
}