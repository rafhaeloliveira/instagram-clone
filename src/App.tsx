import React, { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/profile/Profile";

const App = (): ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);

export default App;
