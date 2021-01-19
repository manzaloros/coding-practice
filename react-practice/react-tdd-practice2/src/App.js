import './App.css';
import { Component, React } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAddRecipeFormDisplayed: false,
      recipes: [],
      newRecipeName: "",
      newRecipeInstructions: "",
    };
  }

  toggleAddRecipeForm = () => {
    this.setState({
      isAddRecipeFormDisplayed: !this.state.isAddRecipeFormDisplayed,
    });
  }

  handleRecipeNameChange = (e) => {
    this.setState({
      newRecipeName: e.target.value
    })
  }

  handleRecipeInstructionsChange = (e) => {
    this.setState({
      newRecipeInstructions: e.target.value
    })
  }

  handleChange = (e) => {
    // if (e.target.name === 'newRecipeName') {
    //   this.setState({
    //     newRecipeName: e.target.value,
    //   });
    // } else {
    //   this.setState({
    //     newRecipeInstructions: e.target.value,
    //   });
    // }
    const { name } = e.target;
    const { value } = e.target;

    this.setState({
      [name]: value,
    })
  }

  submitRecipe = (e) => {
    e.preventDefault();
    const recipe = {
      name: this.state.newRecipeName,
      instructions: this.state.newRecipeInstructions
    }
    const joined = this.state.recipes.concat(recipe);
    this.setState({ recipes: joined, newRecipeName: "", newRecipeInstructions: "" });
  }

  render = () => {
    const recipeForm =
      <form id="recipe-form" onSubmit={this.submitRecipe}>
        <label htmlFor="newRecipeName">Recipe name: </label>
        <input type="text" name="newRecipeName" onChange={this.handleChange} value={this.state.newRecipeName} />
        <label htmlFor="newRecipeInstructions">Instructions:</label>
        <textarea name="newRecipeInstructions" placeholder="write recipe instructions here ..." onChange={this.handleChange} value={this.state.newRecipeInstructions} />
        <input type="submit" />
      </ form>;

    return (
      <div className="App">
        <h1 className="App-header">My Recipes</h1>
        {this.state.isAddRecipeFormDisplayed ? (
          recipeForm
        ) : (
            <button id="add-recipe"
              onClick={this.toggleAddRecipeForm}>Add Recipe</button>
          )}
        {this.state.recipes.length > 0 ?
          <ul>
            {this.state.recipes.map((recipe, key) => <li key={key}>{recipe.name}</li>)}
          </ul>
          : <p>There are no recipes to list.</p>}
      </div>
    );
  }
}

export default App;
