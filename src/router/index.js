import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import FindJobs from "../pages/FindJobs";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import DetailJob from "../pages/DetailJob";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "find-jobs",
    element: <FindJobs />,
  },
  {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "job/detail/:id",
    element: <DetailJob />,
  },
]);
