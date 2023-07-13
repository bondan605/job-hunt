import { createBrowserRouter } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import FindJobs from "../pages/FindJobs"

export const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />
    },
    {
      path: 'find-jobs',
      element: <FindJobs />
    }
])