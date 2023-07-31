
import portfolioImg from "../../src/assets/portfolio.png"

export const Header = () => {

    return(
        <header>
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