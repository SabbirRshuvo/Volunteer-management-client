import { createBrowserRouter } from "react-router";
import Main from "../MainLayout/Main";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import AllVolunteerNeedPost from "../Pages/AllVolunteerNeedPost";
import AddVolunteerNeedPost from "../Pages/AddVolunteerNeedPost";
import ManageMyPosts from "../Pages/ManageMyPosts";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import VolunteerDetails from "../Pages/VolunteerDetails";
import BeVolunteer from "../Pages/BeVolunteer";
import UpdateVolunteerNeed from "../Pages/UpdateVolunteerNeed";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all_volunteer_need_post",
        element: <AllVolunteerNeedPost />,
      },
      {
        path: "/add_Volunteer_need_post",
        element: (
          <PrivateRoute>
            <AddVolunteerNeedPost />
          </PrivateRoute>
        ),
      },
      {
        path: "/volunteer-details/:id",
        element: (
          <PrivateRoute>
            <VolunteerDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/volunteer-request/:id",
        element: (
          <PrivateRoute>
            <BeVolunteer />
          </PrivateRoute>
        ),
      },
      {
        path: "/manage_my_posts",
        element: (
          <PrivateRoute>
            <ManageMyPosts />
          </PrivateRoute>
        ),
      },
      {
        path: "/volunteer_update/:id",
        element: (
          <PrivateRoute>
            <UpdateVolunteerNeed />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default routes;
