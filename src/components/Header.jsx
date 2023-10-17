export default function Header() {
    return (
        <header className="absolute w-full top-0 left-0 bg-primary">
            <div className="w-full h-[60px] flex justify-end px-4">
                <div className="py-3">
                    <button className="btn rounded-[3px] h-full px-5">Login</button>
                </div>
            </div>
            <hr className="w-full border-slate-500 blur-sm" />
        </header>
    )
}
