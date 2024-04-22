/** @format */

import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";

import "./index.css";
import Home from "./routes/Pages/MainRoute/Home";
import Aside from "./components/layout/Aside";
import ActionRoutes from "./routes/Pages/ActionRoutes/ActionRoutes";
import ErrorPage from "./routes/Pages/Error/ErrorPage";
import HomePage from "./routes/Pages/Home/HomePage";
import Services from "./routes/Pages/Services/Services";
import About from "./routes/Pages/About/About";
import SignIn from "./routes/Pages/Sign/SignIn";
import SignUp from "./routes/Pages/Sign/SignUp";
import Faq from "./routes/Pages/Faq/Faq";
import Projects from "./routes/Pages/Projects/Projects";
import ProfileEdit from "./routes/Pages/Profile-Edit/ProfileEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        path: "/edit-profile",
        element: <ProfileEdit />,
        children: [
          {
            path: "/edit-profile/:editprofileid",
            element: <ProfileEdit />,
          },
        ],
      },
      {
        path: "/profile",
        element: <Aside />,
        children: [
          {
            path: "/profile/:actionId",
            element: <ActionRoutes />,
          },
        ],
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
