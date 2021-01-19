/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslin-disable react/jsx-ilename-extension */
import { useState, useEffect } from 'react';

function getUser() {
  return Promise.resolve({ id: '1', name: 'Zach' });
}

function App() {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    };

    loadUser();
  }, []);

  function handleChange(e) {
    setSearch(e.target.value);
  }
  return (
    <div>
      {user ? (
        <p>
          Signed in as
          {' '}
          {user.name}
        </p>
      ) : null}

      <Search value={search} onChange={handleChange}>
        Search:
      </Search>

      <p>
        Searches for
        {' '}
        {search || '...'}
      </p>
    </div>
  );
}

function Search({ value, onChange, children }) {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export { App, Search };
