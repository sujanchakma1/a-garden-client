import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import HomeLayout from "../Layout/HomeLayout";
import Login from "../Components/Login";
import Register from "../Components/Register";
import ErrorPage from "../Layout/ErrorPage";
import ShareGardenTips from "../Components/ShareGardenTips";
import PrivateRoute from "../Context/PrivateRoute";
import MyTips from "../Components/MyTips";
import BrowsTips from "../Components/BrowsTips";
import GardenExplore from "../Components/GardenExplore";
import TipsDetails from "../Components/TipsDetails";
import UpdateTips from "../Components/UpdateTips";
import Loading from "../Components/Loading";
import GardenersDetails from "../Components/GardenersDetails";
import DashboardLayout from "../Components/DashboardLayout/DashboardLayout";
import Overview from "../Components/DashboardLayout/Overview";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: HomeLayout,
      },
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
      {
        path: "/garden/explore",
        Component: GardenExplore,
      },
      {
        path: "gardeners/details/:id",
        loader: () => fetch("https://a-garden-server.vercel.app/allGardeners"),
        Component: GardenersDetails,
      },
      {
        path: "/garden/browsTips",
        Component: BrowsTips,
      },
      {
        path: "/garden/shareTips",
        element: (
          <PrivateRoute>
            <ShareGardenTips></ShareGardenTips>
          </PrivateRoute>
        ),
      },
      {
        path: "/garden/myTips",
        element: (
          <PrivateRoute>
            <MyTips></MyTips>
          </PrivateRoute>
        ),
      },
      {
        path: "/tips/details/:id",
        loader: () => fetch("https://a-garden-server.vercel.app/tips"),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRoute>
            <TipsDetails></TipsDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/tips/update/:id",
        element: (
          <PrivateRoute>
            <UpdateTips></UpdateTips>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        loader: () => fetch("https://a-garden-server.vercel.app/allGardeners"),
        Component: Overview,
      },
      {
        path: "/dashboard/gardeners",
        Component: GardenExplore,
      },
      {
        path: "/dashboard/shareTips",
        Component: ShareGardenTips,
      },
      {
        path: "/dashboard/myTips",
        Component: MyTips,
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);

export default router;
