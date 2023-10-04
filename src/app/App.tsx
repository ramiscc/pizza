import {AppRouter} from "app/providers/router";
import {Header} from "widgets/Header";
import {Footer} from "widgets/Footer";

const App = () => {
    return (
        <div className={'app'}>
            <header>
                <Header/>
            </header>
            <main>
                <AppRouter/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default App
