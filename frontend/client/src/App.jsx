// App.jsx
import React from "react";
import Layout from "./Layout/Layout";
import { SavedProductsProvider } from "./pages/Context/SavedProductsContext";

const App = () => {
  return (
    <div>
      <SavedProductsProvider>
        <Layout />
      </SavedProductsProvider>
    </div>
  );
};

export default App;
