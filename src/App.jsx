import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

function App() {
  const { user, loginWithRedirect, isAuthenticated, logout, isLoading } =
    useAuth0();
  console.log(user);
  if (isLoading)
    return (
      <div>
        {" "}
        <h1>Loading....</h1>
      </div>
    );
  return (
    <>
      {isAuthenticated ? (
        <div>
          {" "}
          <h1>Hey,{user.name} you have been logged in </h1>
          <button onClick={logout}>logout</button>
        </div>
      ) : (
        <div>
          <h1>Please loggin in</h1>
          <button onClick={() => loginWithRedirect()}>loggin</button>
        </div>
      )}
    </>
  );
}

export default App;
