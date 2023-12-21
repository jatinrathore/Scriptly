import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MyLikes from "./pages/MyLikes";
import UserAccessPage from "./pages/UserAccessPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <UserAccessPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/my-likes",
    element: <MyLikes />,
  },
  {
    path: "/my-bookmarks",
    element: <MyLikes />,
  },
  {
    path: "/my-posts",
    element: <MyLikes />,
  },
  {
    path: "/my-profile",
    element: <MyLikes />,
  },
]);

export default router;
