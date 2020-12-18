/* eslint-disable no-undef */
// import cy from "cypress"

/* Cypress prefixes the given url for .visit() with the baseUrl set in cypress.json

Instead of .should('contain', 'My Recipes), you can also write .contains('My Recipes'). Many options using the Chai assertion library

Cypress uses simple CSS selectors to match elements
*/

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('header contains recipe heading with a message that there are no recipes', () => {
    cy.get('.App-header').contains('My Recipes')
    cy.get('p').contains('There are no recipes to list')
  })

  it('contains an add recipe button that when clicked opens a form', () => {
    const addRecipeButton = cy.get('#add-recipe')
    addRecipeButton.click()

    expect(cy.get('#recipe-form')).toExist()
  })

  it("contains a form with fields 'Recipe Name' and 'Recipe Instructions' after clicking the 'Add Recipe' button", () => {
    cy.get('#add-recipe').click();

    expect(cy.get('input[name="newRecipeName"]')).toExist();
    expect(cy.get('textarea[name="newRecipeInstructions"]')).toExist();
  })

  it("displays a recipe name under the 'My Recipes' heading after it has been added through the 'Add Recipe' form", () => {
    const addRecipeButton = cy.get('#add-recipe');
    addRecipeButton.click();
    cy.get('input[name="newRecipeName"]').type("Tofu Scramble Tacos")
    cy.get('textarea[name="newRecipeInstructions"]').type("1. heat a skillet on medium with a dollop of coconut oil {enter} 2. warm flour tortillas")
    cy.get('input[type="submit"]').click();
    cy.get('ul').contains("Tofu Scramble Tacos")
  })

  it("displays a list of recipe names under the 'My Recipes' heading after they have been added through the 'Add Recipe' form", () => {
    const addRecipeButton = cy.get('#add-recipe');
    addRecipeButton.click();
    cy.get('input[name="newRecipeName"]').type("Tofu Scramble Tacos")
    cy.get('textarea[name="newRecipeInstructions"]').type("1. heat a skillet on medium with a dollop of coconut oil {enter} 2. warm flour tortillas")
    cy.get('input[type="submit"]').click();

    cy.get('input[name="newRecipeName"]').type("Egg Benedict")
    cy.get('textarea[name="newRecipeInstructions"]').type("1. heat a skillet on medium with a dollop of coconut oil {enter} 2. warm flour tortillas")
    cy.get('input[type="submit"]').click()

    // expect(cy.get('ul>li')).eq(1).contains('Egg Benedict');
  })
})
