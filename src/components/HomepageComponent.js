import React from "react";
import DropdownComponent from "./DropdownComponent";
import "font-awesome/css/font-awesome.css";
import recipeService from "../services/RecipeService";


class HomepageComponent extends React.Component {

    getRecipe = () => {
        console.log("woo");
        recipeService.readRecipe();
    }
    

    render = () => {
        return (
            <div className="container inline-block pt-5">
                <h1>What should I make for</h1>
                <DropdownComponent />
                <h1>?</h1>
                <button
                    className="btn btn-outline-secondary btn-block"
                    onClick={() => this.getRecipe()}>
                    go <i className="fa fa-arrow-right">
                    </i></button>
            </div>

        )
    }
}

export default HomepageComponent