import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ItemList from "./components/ItemList";
import AddItem from "./components/AddItem";

function App() {
  return (
    <div className="row mt5">
      <div className="col-md-4 offset-md-1">
        <h2>Articles</h2>
        <ItemList />
      </div>
      <div className="col-md-4 offset-md-">
        <h2>Add a new article</h2>
        <AddItem />
      </div>
    </div>
  );
}

export default App;
