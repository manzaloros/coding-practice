let accountsMerge = function (accounts) {
  const visited = new Set();
  const emailToAccount = new Map();

  const graph = accounts.reduce((map, [name, ...emails]) => {
    const firstEmail = emails[0];

    emails.forEach((email) => {
      if (!map.has(email)) map.set(email, new Set());
      map.get(email).add(firstEmail);

      if (!map.has(firstEmail)) map.set(firstEmail, new Set());
      map.get(firstEmail).add(email);

      emailToAccount.set(email, name);
    });

    return map;
  }, new Map());

  const dfs = (node, component) => {
    if (!visited.has(node)) {
      visited.add(node);

      component.push(node);

      graph.get(node).forEach((neighbor) => {
        if (!visited.has(neighbor)) dfs(neighbor, component);
      });
    }
  };

  return Array.from(emailToAccount).reduce((output, [email, account]) => {
    if (!visited.has(email)) {
      const nodes = [];
      dfs(email, nodes);

      output.push([account, ...nodes.sort((a, b) => (a < b ? -1 : 1))]);
    }

    return output;
  }, []);
};

// accountsMerge([['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
// ['John', 'johnsmith@mail.com', 'john00@mail.com'], ['Mary', 'mary@mail.com'],
// ['John', 'johnnybravo@mail.com']]);
// accountsMerge([['Gabe', 'Gabe0@m.co', 'Gabe3@m.co', 'Gabe1@m.co'], ['Kevin',
// 'Kevin3@m.co', 'Kevin5@m.co', 'Kevin0@m.co'], ['Ethan', 'Ethan5@m.co',
// 'Ethan4@m.co', 'Ethan0@m.co'], ['Hanzo', 'Hanzo3@m.co', 'Hanzo1@m.co',
// 'Hanzo0@m.co'], ['Fern', 'Fern5@m.co', 'Fern1@m.co', 'Fern0@m.co']]);
accountsMerge([['David', 'David0@m.co', 'David1@m.co'], ['David', 'David3@m.co', 'David4@m.co'], ['David', 'David4@m.co', 'David5@m.co'], ['David', 'David2@m.co', 'David3@m.co'], ['David', 'David1@m.co', 'David2@m.co']]);
