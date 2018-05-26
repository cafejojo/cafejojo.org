import React from "react"
import Helmet from "react-helmet"
import Footer from "../components/Footer"

import Header from "../components/Header"
import "./index.tailwind.css"

const TemplateWrapper = ({ children }) => (
    <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
        <Helmet
            title="Café Jojo"
            meta={[
                { name: "description", content: "Website for the Café Jojo team" },
                { name: "keywords", content: "sample, something" }
            ]}
            script={[{ src: "https://use.fontawesome.com/5ecc914f86.js" }]}
        />
        <Header />
        <div className="flex flex-col flex-1 md:justify-center max-w-xl mx-auto px-4 py-8 md:p-8 w-full">
            {children()}
        </div>
        <Footer />
    </div>
)

export default TemplateWrapper
