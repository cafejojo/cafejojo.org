import React from "react"
import Helmet from "react-helmet"

import casperboone from "../images/casperboone.jpg"
import gandreadis from "../images/gandreadis.jpg"
import jsabrahams from "../images/jsabrahams.jpg"

const TeamMember = ({ name, githubUsername, photo }) => (
    <div className="bg-grey-lighter mx-auto max-w-xs rounded-lg overflow-hidden mb-6">
        <div className="sm:flex sm:items-center px-6 py-4">
            <img
                className="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
                src={photo}
                alt={name}
            />
            <div className="text-center sm:text-left sm:flex-grow">
                <div className="mb-4">
                    <p className="text-xl leading-tight">{name}</p>
                </div>
                <div>
                    <a
                        className="text-xs rounded-full no-underline px-4 py-1 leading-normal bg-white border border-delft-blue text-delft-blue hover:bg-delft-blue hover:text-white"
                        href={`https://github.com/${githubUsername}`}
                    >
                        <i className="fa fa-github mr-2" />
                        {githubUsername}
                    </a>
                </div>
            </div>
        </div>
    </div>
)

const TeamPage = () => (
    <div>
        <Helmet title="Team - Café Jojo" />

        <TeamMember name="Casper Boone" githubUsername="casperboone" photo={casperboone} />
        <TeamMember name="F.W. Dekker" githubUsername="fwdekker" />
        <TeamMember name="Georgios Andreadis" githubUsername="gandreadis" photo={gandreadis} />
        <TeamMember name="Joël Abrahams" githubUsername="jsabrahams" photo={jsabrahams} />
    </div>
)

export default TeamPage
