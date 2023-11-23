import { Palette } from "lucide-react"
import Link from "next/link"

export const Navbar = () => {
    return(
        <div className="navbar px-4 bg-primary text-primary-content rounded-[var(--rounded-box)] my-3">
            <Link 
                href="/"
                className="font-semibold text-lg">
                    Yu
            </Link>
            <div className="ms-auto">
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </button>
                <Link className="btn btn-square btn-ghost" href="/themes" title="Themes">
                    <Palette />
                </Link>
            </div>
        </div>
    )
}