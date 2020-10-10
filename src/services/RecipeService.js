const url = "https://api.spoonacular.com/recipes/random?number=1&apiKey=92eff60beb994af38c67bd24dc5fe724&tags=dessert";

const readRecipe = () => {
    return fetch(url)
            .then(response => response.json())
            .then(response => console.log(response))
    }

const hello = () => {
    return alert("hello")
}
export default {readRecipe, hello};