import React from "react"

import sergLogo from "../images/serg.png"
import tudelftLogo from "../images/tudelft.png"

const SchaapiPage = () => (
    <div className="text-center">
        <h1 className="text-5xl">schaapi</h1>
        <p className="leading-loose text-xl">🐑 Safe Changes for APIs</p>

        <div className="mt-8">
            <a className="btn btn-green inline-block no-underline" href="https://github.com/cafejojo/schaapi">
                <i className="fa fa-github mr-2" />
                github.com/cafejojo/schaapi
            </a>
        </div>

        <div className="flex justify-center align-bottom items-center mt-8">
            <a href="http://swerl.tudelft.nl/bin/view/Main/WebHome">
                <img src={sergLogo} title="Software Engineering Research Group" height={35} className="mr-4 mt-3" />
            </a>
            <a href="https://www.tudelft.nl/">
                <img src={tudelftLogo} title="Delft University of Technology" height={50} />
            </a>
        </div>
    </div>
)

export default SchaapiPage
