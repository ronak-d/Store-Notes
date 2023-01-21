import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateNotes from "../Pages/CreateNotes/CreateNotes";
import LandingPage from "../Pages/LandingPage/LandingPage";
import MyNotes from "../Pages/MyNotes/MyNotes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/mynotes" element={<MyNotes />} />
      <Route path="/createnotes" element={<CreateNotes />} />
    </Routes>
  );
};

export default AllRoutes;
