import React from "react";
import { Navigate, Route, Routes } from "react-router";
import SignIn from "../pages/SignIn";
import AuthLayout from "../layout/AuthLayout";
import SignUp from "../pages/SignUp";
import Movies from "../pages/Movies";
import MovieLayout from "../pages/MovieLayout";

function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Navigate to="sign-in" />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
        <Route index element={<MovieLayout />}>
          <Route path="movie" element={<Movies />} />
        </Route>
      </Routes>
    </div>
  );
}

export default AppRouter;
