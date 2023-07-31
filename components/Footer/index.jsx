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
                    <img src={whatsappIcon} alt="Whatsapp" />
                    <img src={linkedinIcon} alt="Linkedin" />
                    <img src={githubIcon} alt="Github" />
                </div>
                <p>Todos os direitos reservados - {user}</p>
            </div>
        </footer>
    )
}