import { username } from "../../../src/data/user"

import bannerImg from "../../../src/assets/banner-img.png"


export const WelcomeSection = () => {
    return (
        <section>
            <div className="container">
            <div className="container--info">
                <span>{username}</span>
                <h2>Bem Vindo ao meu portfolio</h2>
                <p>Uma frase interessante sobre mim</p>
                <button>Saiba mais</button>
            </div>
            <img src={bannerImg} alt="Banner" />
            </div>
        </section>
    )
}