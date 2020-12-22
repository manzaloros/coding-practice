import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

/* Test show form method
Shallow wrapper will help us test as a unit, and we don't need api support or full DOM rendering.
*/
test('toggleAddRecipeForm() modifies isAddRecipeFormDisplayed state value to toggle visibility of a form on the page', () => {
  const wrapper = shallow(<App />);
})
