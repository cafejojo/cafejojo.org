import Link from "gatsby-link"
import React from "react"

const NavLink = ({ url, text }) => (
    <Link to={url} className="block mt-4 p-4 md:inline-block md:mt-0 mr-6 no-underline text-white font-bold">
        {text}
    </Link>
)

const Header = () => {
    const handleClick = e => {
        const el = document.getElementById("nav")

        e.preventDefault()
        el.classList.toggle("block")
        el.classList.toggle("hidden")
    }

    return (
        <nav className="bg-delft-blue">
            <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto">
                <Link to="/" className="flex items-center no-underline text-white p-6">
                    <span className="font-bold text-xl tracking-tight">Café Jojo</span>
                </Link>

                <button
                    className="block md:hidden border border-white flex items-center px-3 py-2 mr-4 rounded text-white"
                    onClick={handleClick}
                >
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>

                <div id="nav" className="hidden md:flex md:items-center w-full md:w-auto">
                    <div className="text-sm">
                        <NavLink url="/schaapi" text="schaapi" />
                        <NavLink url="/team" text="team" />
                        <NavLink url="/contact" text="contact" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
