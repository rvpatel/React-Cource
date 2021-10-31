import React, { useState } from 'react';

function Profile() {
  // pass value for user and get user information
  const [loggedIn, setloggedIn] = useState(2);

  return (
    <div>
      {loggedIn == 1 ? (
        <h1>User 1</h1>
      ) : loggedIn == 2 ? (
        <h1>User 2</h1>
      ) : loggedIn == 3 ? (
        <h1>User 3</h1>
      ) : (
        <h1>Login</h1>
      )}

      <h1>Profile Component</h1>
    </div>
  );
}
export default Profile;
