import './App.css';
import { Component, React } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAddRecipeFormDisplayed: false,
      recipes: [],
      newRecipeName: '',
      newRecipeInstructions: '',
    }
  }

  toggleAddRecipeForm = () => {
    this.setState({ isAddRecipeFormDisplayed: !this.state.isAddRecipeFormDisplayed })
  }

  handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    this.setState({ [name]: target.value });
  }

  submitRecipe = (e) => {
    e.preventDefault();
    this.setState({
      recipes: [
        {
          name: this.state.newRecipeName,
          instructions: this.state.newRecipeInstructions,
        }
      ]
    })
  }

  render() {

    const addNewRecipeForm = (
      <form id="recipe-form" onSubmit={this.submitRecipe}>
        <label htmlFor="newRecipeName">Recipe name: </label>
        <input type="text" name="newRecipeName" onChange={this.handleChange} />
        <label htmlFor="newRecipeInstructions">Instructions:</label>
        <textarea name="newRecipeInstructions" placeholder="write recipe instructions here..." onChange={this.handleChange} />
        <input type="submit" />
      </form>
    );

    const addNewRecipeButton = (
      <button id="add-recipe" onClick={this.toggleAddRecipeForm}>Add Recipe</button>
    );

    return (
      <div className="App" >
        <h1 className="App-header">My Recipes</h1>
        {this.state.isAddRecipeFormDisplayed ? addNewRecipeForm : addNewRecipeButton}
        {this.state.recipes.length > 0 ?
          <ul>
            <li>{this.state.recipes[0].name}</li>
          </ul> :
          <p>There are no recipes to list.</p>}

      </div>
    );
  }
}

export default App;
