import { createSignal } from "solid-js"
import "./css/Home.css"

export default function Home() {
    const [theme, setTheme] = createSignal(localStorage.getItem('theme') || 'dracula')

    const changeTheme = () => {
        setTheme(previousTheme => {
            const theme = previousTheme == 'dracula' ? 'winter' : 'dracula'
            localStorage.setItem('theme', theme)
            return theme
        })
    }

    return (
        <div className="relative a-center h-screen w-screen" data-theme={theme()}>
            <header className="absolute top-0 left-0 w-full h-[60px] flex justify-end p-4">
                <div>
                    <button className="btn px-5" onClick={changeTheme}>Theme</button>
                </div>
            </header>
            <h1 className="p-5 text-xl">Solid Home!
            </h1>
            <button className="btn">Click</button>
        </div>
    )
}
