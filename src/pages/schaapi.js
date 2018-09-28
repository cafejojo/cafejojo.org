import React from "react"
import Helmet from "react-helmet"

import schaapiLogo from "../images/schaapi-logo.png"
import sergLogo from "../images/serg.png"
import tudelftLogo from "../images/tudelft.png"

const SchaapiPage = () => (
    <div className="schaapi-page pt-6">
        <Helmet title="Schaapi - Café Jojo" />

        <div className="text-center">
            <img src={schaapiLogo} alt="Schaapi" className="md:w-1/2 px-4" />

            <p className="leading-loose text-xl">🐑 Safe Changes for APIs</p>

            <div className="mt-8">
                <a className="btn btn-green inline-block" href="https://github.com/cafejojo/schaapi">
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

        <div className="mt-16">
            <div className="content-section bg-delft-blue text-white">
                <h2>What is Schaapi?</h2>

                <p className="text-xl text-center">
                    <strong>Schaapi is a tool for early detection of breaking changes based on API usages!</strong>
                </p>

                <p className="text-sm text-center">It also contains the Dutch word for sheep ("schaap") 🐑</p>
            </div>
            <div className="content-section bg-red-lighter">
                <h2>But why?</h2>
                <p>
                    <strong>Library developers</strong> are often <strong>unaware</strong> of how their library is used
                    exactly <strong>in practice</strong>. When a library developer changes the internals of a library,
                    this may unintentionally affect or even break the working of the library users' code. While it is
                    possible to detect when a syntactic breaking change occurs, it is not as easy to detect semantic
                    breaking changes, where the <strong>implicit contract of a functionality</strong> changes, sometimes
                    unbeknownst to the library developer. Because library users rarely test the behaviour they expect of
                    the library, neither the library developer nor the library user will be aware of the new behaviour.
                </p>

                <p>
                    As a library developer, you want to be able to see how a change in your library will affect your
                    users before a new version of the library is deployed. More specifically, you want to gain insight
                    into <strong>how users use the library</strong>, and want to see if and{" "}
                    <strong>how changes affect users</strong>. This will allow you to determine whether the new version
                    of the library is <strong>backwards compatible</strong>. Finally, after deploying the breaking
                    changes, you want to notify the affected users of the changes and of a solution to the issue.
                </p>
            </div>

            <div className="content-section bg-grey-light">
                <h2>Schaapi's approach</h2>

                <p className="text-xl text-center">
                    <strong>
                        Schaapi has two pipelines: a <em className="text-delft-blue">mining</em> and a{" "}
                        <em className="text-delft-blue">validation</em> pipeline.
                    </strong>
                </p>

                <p>
                    In the <strong className="text-delft-blue">mining</strong> pipeline, we first{" "}
                    <strong>mine open-source repositories</strong> that use a certain library version. We then{" "}
                    <strong>build graph-based models</strong> from their program structures to understand how the
                    library is being used. These library usages are then <strong>mined for common patterns</strong>{" "}
                    to <strong>generate tests</strong> that capture the usage of the library.
                </p>

                <p>
                    In the <strong className="text-delft-blue">validation</strong> pipeline, the generated tests are run
                    against each new library revision as a <strong>continuous integration</strong> service. Library{" "}
                    <strong>developers can then be informed</strong> directly on the effects of their proposed changes.
                </p>
            </div>

            <div className="content-section bg-delft-blue text-white">
                <h2>Want to learn more?</h2>

                <div className="my-4 text-center text-xl">
                    <a className="btn btn-green inline-block" href="https://github.com/cafejojo/schaapi">
                        <i className="fa fa-github mr-2" /> Visit our GitHub repository!
                    </a>
                </div>

                <div className="my-2 text-center text-xl">
                    <a
                        className="btn btn-green inline-block"
                        href="https://repository.tudelft.nl/islandora/object/uuid:cca5e4ea-3d00-4ae3-877a-b302829e7f08?collection=education"
                    >
                        <i className="fa fa-file-text mr-2" /> Read our Bachelor thesis!
                    </a>
                </div>
            </div>
        </div>
    </div>
)

export default SchaapiPage
