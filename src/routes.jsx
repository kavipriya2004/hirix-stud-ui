import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Companies from "./pages/companies/Companies";
import JobSearch from "./pages/JobSearch";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import SignIn from "./pages/SignIn";
import Support from "./pages/Support";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'companies',
        element: <Companies />
      },
      {
        path: 'job-search',
        element: <JobSearch />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'notifications',
        element: <Notifications />
      },
      {
        path: 'settings',
        element: <Settings />
      },
      {
        path: 'support',
        element: <Support />
      }
    ]
  },
  {
    path: '/signin',
    element: <SignIn />
  }
]);

export default router;