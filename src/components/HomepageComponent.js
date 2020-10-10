import React from "react";
import DropdownComponent from "./DropdownComponent"


export default class HomepageComponent extends React.Component {
    render = () => {
        return (
            <div className="container inline-block">
                <h1>What should I make for</h1>
                <DropdownComponent/>
                <h1>?</h1>
            </div>

        )
    }
}