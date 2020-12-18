/* JavaScript event handler onChange event when the value of an HTML element has been changed */

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('toggleAddRecipeForm() modifies isAddRecipeFormDisplayed state value to toggle visibility of a form on the page', () => {
  const wrapper = shallow(<App />);
  wrapper.instance().toggleAddRecipeForm();

  wrapper.update();
  expect(wrapper.state().isAddRecipeFormDisplayed).toBeTruthy();
  expect(wrapper.exists('#recipe-form')).toEqual(true);
});

test('the Add Recipe button onClick calls the toggleAddRecipeForm method', () => {
  const wrapper = shallow(<App />);
  wrapper.instance().toggleAddRecipeForm = jest.fn();
  wrapper.instance().forceUpdate();

  wrapper.find('#add-recipe').simulate('click');

  expect(wrapper.instance().toggleAddRecipeForm).toHaveBeenCalled();
})

test('submitting the form calls the submitRecipe method', () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ isAddRecipeFormDisplayed: true });
  wrapper.instance().submitRecipe = jest.fn();
  wrapper.instance().forceUpdate();

  wrapper.find('#recipe-form').simulate('submit');
  expect(wrapper.instance().submitRecipe).toHaveBeenCalled();
})

test('submitRecipe modifies the recipes value in state', () => {
  const wrapper = shallow(<App />);
  const recipeName = "Hot Pockets";
  const recipeInstructions = "microwave for a bit";

  wrapper.setState({
    isAddRecipeFormDisplayed: true,
    newRecipeName: recipeName,
    newRecipeInstructions: recipeInstructions,
  })
  const submittedRecipe = {
    name: recipeName,
    instructions: recipeInstructions
  }

  const mockPreventDefault = jest.fn();

  wrapper.find('#recipe-form').simulate("submit", {
    preventDefault: mockPreventDefault
  });

  expect(mockPreventDefault).toHaveBeenCalled();
  /* Hard coding the submitted recipe into state */
  expect(wrapper.state().recipes).toEqual([submittedRecipe])
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

test('typing into the recipe instructions textarea updates state', () => {
  const wrapper = shallow(<App />);
  const recipeInstructions = "Bulging pockets";

  wrapper.setState({
    isAddRecipeFormDisplayed: true,
  });

  wrapper.find('textarea[name="newRecipeInstructions"]').simulate("change", {
    target: { name: 'newRecipeInstructions', value: recipeInstructions }
  });

  expect(wrapper.state().newRecipeInstructions).toEqual(recipeInstructions);
});

test('recipe name from recipe in state appears in unordered list', () => {
  const wrapper = shallow(<App />);
  const recipeName = "New Pockets";
  const recipeInstructions = "Some instructions...";

  const submittedRecipe = {
    name: recipeName, instructions: recipeInstructions
  }

  wrapper.setState({ recipes: [submittedRecipe] });

  expect(wrapper.find('li')).toHaveLength(1);
  expect(wrapper.find('li').text()).toEqual('New Pockets');
});

test('submitting multiple recipes updates state', () => {
  const wrapper = shallow(<App />);
  const recipeName1 = "These pockets were made for walkin'";
  const recipeName2 = "Second instructions";
  const recipeInstructions1 = "Some instructions...Blah";
  const recipeInstructions2 = "Second instructions";

  const submittedRecipe1 = {
    name: recipeName1, instructions: recipeInstructions1
  }
  const submittedRecipe2 = {
    name: recipeName2, instructions: recipeInstructions2
  }

  wrapper.setState({ recipes: [submittedRecipe1, submittedRecipe2] });

  expect(wrapper.find('li')).toHaveLength(2);

  expect(wrapper.find('li').at(0).text()).toEqual("These pockets were made for walkin'");
  expect(wrapper.find('li').at(1).text()).toEqual("Second instructions");
});

test('submitting a recipe clears state', () => {
  const wrapper = shallow(<App />);
  const recipeName = "This name needs to be cleared";
  const recipeInstructions = "Bulging pockets";

  wrapper.setState({
    isAddRecipeFormDisplayed: true,
  });

  wrapper.find('input[name="newRecipeName"]').simulate("change", {
    target: { name: 'newRecipeName', value: recipeName }
  });

  wrapper.find('textarea[name="newRecipeInstructions"]').simulate("change", {
    target: { name: 'newRecipeInstructions', value: recipeInstructions }
  });

  wrapper.find('#recipe-form').simulate("submit", {
    preventDefault: jest.fn()
  });

  expect(wrapper.instance().state.newRecipeName).toEqual("");
})
