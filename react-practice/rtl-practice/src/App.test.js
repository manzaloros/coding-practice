/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen, act /* fireEvent */ } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { App /* Search */ } from './App';

jest.mock('axios');

describe('App', () => {
/*  test('renders App component', async () => {
    render(<App />);

    await screen.findByText(/Signed in as/);

    expect(screen.queryByText(/Searches for Javascript/)).toBeNull();

    await userEvent.type(screen.getByRole('textbox'), 'JavaScript');

    expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument();
  });
  */

  test('fetches stories from an API and displays them', async () => {
    const stories = [
      { objectID: '1', title: 'Hello' },
      { objectID: '2', title: 'React' },
    ];

    axios.get.mockImplementationOnce(() => Promise.resolve({ data: { hits: stories } }));

    render(<App />);

    await act(async () => {
      await userEvent.click(screen.getByRole('button'));
    });

    const items = await screen.findAllByRole('listitem');

    expect(items).toHaveLength(2);
  });

  test('fetches stories from an API and fails', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));

    render(<App />);

    await act(async () => {
      await userEvent.click(screen.getByRole('button'));
    });

    const message = await screen.findByText(/Something went wrong/);

    expect(message).toBeInTheDocument();
  });
});
/*
describe('Search', () => {
  test('calls the onChange callback handler', async () => {
    const onChange = jest.fn();

    render(
      <Search value="" onChange={onChange}>
        Search:
      </Search>,
    );

    await userEvent.type(screen.getByRole('textbox'), 'JavaScript');

    expect(onChange).toHaveBeenCalledTimes(10);
  });
});
*/
