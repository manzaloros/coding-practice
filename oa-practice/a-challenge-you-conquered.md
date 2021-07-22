# A challenge you conquered
I am working on an internal tool built in React and Express that helps my
company facilitate and record data on retrospectives. I faced a significant
roadblock while implementing client-side routing on user login using the Google
API. Guided by the React Router library's excellent documentation, I wanted to
redirect a user to the /home route on successful login. The actual behavior was
that the user would NOT be redirected on login and instead be stuck on the
landing page even after logging in.

The Google API accepts a callback to be invoked asynchronously after successful
authentication, but it seemed like the callback that I was passing in was not
being used. The strategies I tried involved: generous console.logs and debug
statements to validate what the code was actually doing, and experimenting with
different useEffect and useState hooks to pass a user's logged in status around
different levels of the app. 

The Google functions must be invoked on page load since they actually render the
sign-in button. I discovered that the default callback I was passing to Google
was being added as an event handler to the HTML element on the page. When a user
successfully logs in and the GAPI methods are invoked a second time, the
on-success callback was NOT being rewritten, and the default callback from
page-load was being invoked because it was already added to the DOM. 

Once I made that revelation I was able to construct a more robust default
callback that is able to handle both states of the user not being logged in yet,
as well as the state of them logging in successfully.