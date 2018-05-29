import React from "react"

const Footer = () => (
    <div className="bg-delft-blue">
        <div className="text-white text-center text-sm p-6 flex justify-between max-w-xl mx-auto">
            <div>Copyright &copy; {new Date().getFullYear()} Café Jojo</div>
            <div>
                <a href="https://github.com/cafejojo/cafejojo.org" className="text-white no-underline">
                    Made with <i className="fa fa-heart mx-1" /> in Delft, NL
                </a>
            </div>
        </div>
    </div>
)

export default Footer
