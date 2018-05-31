import React from "react"

import sheepImage from "../images/sheep.svg"

const NotFoundPage = () => (
    <div className="text-center">
        <div>
            <img src={sheepImage} title="Sheep" className="w-1/3" />
        </div>
        <h2 className="bg-yellow inline-block my-8 p-3 rounded">Looks like you got lost...</h2>
        <div>
            <a href="/" className="btn btn-green inline-block">
                <i className="fa fa-home mr-2" />
                Return home
            </a>
        </div>
        <div className="text-sm text-grey mt-8">
            Image taken from{" "}
            <a href="https://www.svgrepo.com/svg/31574/sheep" className="text-grey font-bold no-underline">
                SVGRepo
            </a>
        </div>
    </div>
)

export default NotFoundPage
