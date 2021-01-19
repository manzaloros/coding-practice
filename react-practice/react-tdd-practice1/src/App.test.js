import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

/* Choose shallow render when you want to constrain yourself to testing a component as a unit. Ensure tests aren't indrectly asserting behavior on child components. Won't render child components.

Update syncs ezyme tree snapshot with component tree. Run before checking render output to see if something external updated state of component

Access state properties from wrapper.state()

wrapper.instance() returns single-node wrapper's underlying class instance.

wrapper.find() finds every node in the tree of the current wrapper that matches selector

jest.fn() mocks the code of the actual function by erasing the actual implementation of the function. captures function calls for you.

component.forceUpdate() is a React method that forces the render() method to trigger

Jest simulate('event', [mock object]) simulates an event on the root node of the wrapper. The mock object optional arg will be merged with the event object passed to the handlers.

Unit tests should follow the arrange, act, assert pattern.


*/
test('toggleAddRecipeForm() modifies isAddRecipeFormDisplayed state value to toggle visibility of a form on the page', () => {
  const wrapper = shallow(<App />);
  wrapper.instance().toggleAddRecipeForm();

  wrapper.update();
  expect(wrapper.state().isAddRecipeFormDisplayed).toBeTruthy();
  expect(wrapper.exists("#recipe-form")).toEqual(true);

  wrapper.instance().toggleAddRecipeForm();
  expect(wrapper.exists("#recipe-form")).toEqual(false);
  expect(wrapper.state().isAddisAddRecipeFormDisplayed).toBeFalsy();

});

test('the Add Recipe button onClick calls the toggleAddRecipeForm method', () => {
  const wrapper = shallow(<App />);
  wrapper.instance().toggleAddRecipeForm = jest.fn();
  wrapper.instance().forceUpdate();

  const button = wrapper.find('#add-recipe');

  button.simulate('click');

  expect(wrapper.instance().toggleAddRecipeForm).toHaveBeenCalled();
});

test('submitting the form calls submitRecipe() method', () => {
  const wrapper = shallow(<App />);

  wrapper.setState({ isAddRecipeFormDisplayed: true });
  wrapper.instance().submitRecipe = jest.fn();
  wrapper.instance().forceUpdate();

  wrapper.find('#recipe-form').simulate("submit");
  expect(wrapper.instance().submitRecipe).toHaveBeenCalled();
});

test('submitRecipe() modifies the recipes value in state', () => {
  const wrapper = shallow(<App />);
  const recipeName = "Hot Rockets";
  const recipeInstructions = "microwave for 60 seconds";

  wrapper.setState({
    isAddRecipeFormDisplayed: true,
    newRecipeName: recipeName,
    newRecipeInstructions: recipeInstructions,
  });

  const submittedRecipe = { name: recipeName, instructions: recipeInstructions };

  const mockPreventDefault = jest.fn();

  wrapper.find('#recipe-form').simulate("submit", {
    preventDefault: mockPreventDefault,
  });

  /* Asserting that preventDefualt is called upon submission */
  expect(mockPreventDefault).toHaveBeenCalled();
  expect(wrapper.state().recipes).toEqual([submittedRecipe]);
});

test('typing into the recipe name input updates state', () => {
  const wrapper = shallow(<App />);
  const recipeName = "No Pockets";

  wrapper.setState({
    isAddRecipeFormDisplayed: true,
  });

  wrapper.find('input[name="newRecipeName"]').simulate("change", {
    target: { name: 'newRecipeName', value: recipeName }
  });

  expect(wrapper.state().newRecipeName).toEqual(recipeName);
});

test('typing into the recipe instructions input updates state', () => {
  const wrapper = shallow(<App />);
  const recipeInstructions = "Here be the recipe instructions";

  wrapper.setState({
    isAddRecipeFormDisplayed: true,
  });

  wrapper.find('textarea[name="newRecipeInstructions"]').simulate("change", {
    target: { name: 'newRecipeInstructions', value: recipeInstructions }
  });

  expect(wrapper.state().newRecipeInstructions).toEqual(recipeInstructions);
});

test('recipe name from recipe in state appears in unordered list', () => {
  const [wrapper,
    recipeName,
    recipeInstructions] =
    [shallow(<App />),
      "Learn Pockets",
      "place in toaster oven on 350 for 45 minutes"];
  const submittedRecipe = { name: recipeName, instructions: recipeInstructions };

  wrapper.setState({ recipes: [submittedRecipe] });

  expect(wrapper.find('li')).toHaveLength(1);
  expect(wrapper.find('li').text()).toEqual(recipeName);
});