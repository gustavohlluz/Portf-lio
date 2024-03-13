import { username } from "../../../src/data/user"
import bannerImg from "../../../src/assets/banner-img.png"
import styles from "./style.module.css"


export const WelcomeSection = () => {
    return (
        <section className={styles.welcome}>
            <div className="container">
            <div className="container flexBox">
                <h3>Olá, meu nome é {username}</h3>
                <p>Posso não saber de tudo, mas me esforço ao máximo para aprender</p>
            </div>
            <img src={bannerImg} alt="Banner" />
            </div>
        </section>
    )
}