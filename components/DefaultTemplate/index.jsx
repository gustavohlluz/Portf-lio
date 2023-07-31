import { Header } from "../Header"
import { Footer } from "../Footer"




export const DefaultTemplate = ({children}) => {


    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}