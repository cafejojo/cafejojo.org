import React from "react"
import Helmet from "react-helmet"

const ContactPage = () => (
    <div className="text-center">
        <Helmet title="Contact - Café Jojo" />

        <h2 className="mb-6">Contact us at:</h2>
        <a className="btn btn-green inline-block" href="mailto:info@cafejojo.org">
            <i className="fa fa-envelope mr-2" />
            info@cafejojo.org
        </a>
    </div>
)

export default ContactPage
