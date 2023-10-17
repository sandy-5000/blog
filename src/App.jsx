import { createSignal } from "solid-js"
import { Route, Routes } from "@solidjs/router"
import Home from "./pages/Home"
import { HiOutLineSun } from "./icons/Heroicons"

function App() {

	const [theme, setTheme] = createSignal(localStorage.getItem("theme") || "dark")

    const changeTheme = () => {
        setTheme(previousTheme => {
            const theme = previousTheme == "dark" ? "lightem" : "dark"
            localStorage.setItem("theme", theme)
            return theme
        })
    }

	return (
		<div data-theme={theme()}>
			<span className="absolute z-[3] bottom-3 right-3">
				<button className="btn h-auto p-2" onClick={changeTheme}>
					<HiOutLineSun size="1.3em" />
				</button>
			</span>
			<Routes>
				<Route path="/" component={Home} />
				<Route path="/home" component={Home} />
			</Routes>
		</div>
	)
}

export default App
