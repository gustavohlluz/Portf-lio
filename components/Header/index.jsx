
import portfolioImg from "../../src/assets/portfolio.png"
import styles from "./style.module.css";

export const Header = () => {

    return(
        <header className={styles.header}>
            <div className="container">
                <div>
                    <img src={portfolioImg} alt="Logo Portfolio" />
                    <nav>
                        <a href="#">Sobre</a>
                        <a href="#">Stack</a>
                        <a href="#">Projetos</a>
                    </nav>
                    <button>Contato</button>
                </div>
            </div>
        </header>
    )
}