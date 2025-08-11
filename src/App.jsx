import { useState } from "react";
import Accueil from "./pages/Accueil";
import { Route, Routes } from "react-router";
import AllBooks from "./pages/AllBooks";
import Favourites from "./pages/Favourites";
import AddBook from "./pages/AddBook";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Accueil></Accueil>}></Route>
        <Route path="/all" element={<AllBooks></AllBooks>}></Route>
        <Route path="/favrouites" element={<Favourites></Favourites>}></Route>
        <Route path="/add" element={<AddBook></AddBook>}></Route>
      </Routes>
    </>
  );
}

export default App;
