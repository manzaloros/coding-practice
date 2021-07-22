const myMock = jest.fn(
  /* definition of function to mock */
  (arg) => (10 + arg),
);

myMock();

myMock.mock.calls;
myMock.mock.results;
