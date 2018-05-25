import React from "react"

const Header = () => (
    <div className="bg-orange-darker">
        <div className="text-white text-center text-sm p-4 md:p-8">
            Copyright &copy; {new Date().getFullYear()} Café Jojo
        </div>
    </div>
)

export default Header
