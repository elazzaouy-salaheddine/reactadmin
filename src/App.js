import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Registrations from "./pages/registrations/Registrations";
import Single from "./pages/single/Single";
import Add from "./pages/add/Add";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Registrations />} />
        <Route path="products">
          <Route index element={<List />} />
          <Route path=":productsId" element={<Single />} />
          <Route path="add" element={<Add />} />
        </Route>

        <Route path="users">
          <Route index element={<List />} />
          <Route path=":usersId" element={<Single />} />
          <Route path="add" element={<Add />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
