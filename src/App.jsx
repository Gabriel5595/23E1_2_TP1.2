import './App.css'

export default function App() {

    let helloMessage = "Olá ";
    helloMessage += " planeta!"

    const mainContainer = <main>
        Minha mensagem para você:<b> {helloMessage}  </b>
    </main>;

    return mainContainer

}
