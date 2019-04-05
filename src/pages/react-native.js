import React from "react"
import Helmet from "react-helmet"

import schaapiLogo from "../images/schaapi-logo.png"
import sergLogo from "../images/serg.png"
import tudelftLogo from "../images/tudelft.png"

const ReactNativePage = () => (
    <div className="schaapi-page pt-6">
        <Helmet title="React Native - Café Jojo" />

        <div className="text-center">
            <p className="leading-loose mt-8 mb-16">
                <span className="text-3xl">Analysis of an Open-Source Project</span>
                <br />
                <span className="text-5xl">
                    <strong>React Native</strong>
                </span>
            </p>

            <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vQPv_3uF3lmAB1E_UU5Lvbgvp0IfQ-UfapjQMjaASAz9SY5K6yKoLKuPrY40RqWiMC6Vn8EMyOj_4iH/embed?start=false&loop=false&delayms=3000"
                frameBorder="0"
                width="960"
                height="569"
                allowFullScreen="true"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
            />

            <div className="mt-8">
                <a className="btn btn-green inline-block" href="https://cafejojo.org">
                    <i className="fa fa-book mr-2" />
                    Link to full chapter coming soon
                </a>
            </div>

            <div className="flex justify-center align-bottom items-center mt-8">
                <a href="https://www.tudelft.nl/">
                    <img src={tudelftLogo} title="Delft University of Technology" height={50} />
                </a>
            </div>
        </div>

        <div className="mt-16">
            <div className="content-section bg-delft-blue text-white">
                <h2>What is this about?</h2>

                <p>
                    For the Software Architecture course at TU Delft (part of the Computer Science Master), we analyzed
                    and contributed to the open-source React Native project. We wrote a chapter analyzing the context,
                    architecture, and technical debt of the project, to be published along with chapters written by
                    other groups in the same course. We also submitted a number of PRs to React Native, along the way.
                </p>
            </div>
        </div>
    </div>
)

export default ReactNativePage
