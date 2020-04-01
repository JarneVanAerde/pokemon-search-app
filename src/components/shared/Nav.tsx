import React, { Component, ReactElement } from "react"
import { Link } from "react-router-dom"

/**
 * This component will render the navigation for the application.
 */
export class Nav extends Component {

    /**
     * Renders the component.
     */
    public render(): ReactElement {
        return (
           <nav>
               <Link to="/home">Home</Link>
               <Link to="/search">Search</Link>
           </nav>
        )
    }
}

export default Nav
