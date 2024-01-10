import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider  domain="dev-1djxbx0jdlkcujp6.us.auth0.com"
    clientId="JcZtgTJ5tuRz3Dg3RfEvqe8TfFv80GAz"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
