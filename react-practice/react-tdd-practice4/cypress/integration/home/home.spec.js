describe("Home page", () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it("header contains recipe heading with a message that there are no recipes", () => {
    cy.get('.App-header').should('contain', 'My Recipes');
    cy.get('p').should('contain', 'There are no recipes to list.');
  });

  /*
  Given I am on the landing page,
  When the page loads,
  Then I should see a button that says "Add Recipe" beneath the "My Recipes" heading.
  */

  it("contains an add recipe button that when clicked opens a form", () => {
    const addRecipeButton = cy.get('#add-recipe');
    addRecipeButton.click();

    expect(cy.get('#recipe-form')).toExist();
  })
})