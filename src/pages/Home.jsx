import Header from "../components/Header"
import "./css/Home.css"

export default function Home() {    
    return (
        <div className="relative a-center h-screen w-screen">
            <Header></Header>
            <h1 className="p-5 text-xl">Solid Home!</h1>
            <button className="btn">Click</button>
        </div>
    )
}
