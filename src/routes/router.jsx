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
        path: "/manage_my_posts",
        element: <ManageMyPosts />,
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
