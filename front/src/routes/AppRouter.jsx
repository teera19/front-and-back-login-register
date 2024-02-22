import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoginForm from "../layout/LoginForm";
import RegisterForm from "../layout/RegisterForm";
import ProductForm from "../layout/ProductFrom";
import useAuth from "../hooks/useAuth";
import UserHome from "../layout/UserHome";
import Header from "../layout/Header";
import AllItem from "../layout/AllItem";
import BuyFrom from "../layout/BuyFrom";


const guestRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <LoginForm /> },
      { path: "/register", element: <RegisterForm /> },
    ],
  },
]);

const userRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <AllItem /> },
      { path: "/profile", element: <UserHome/> },
      { path: "/new", element: <ProductForm/> },
      { path: "/buy", element: <BuyFrom/> },
    ],
  },
]);

export default function AppRouter() {
  const { user } = useAuth();
  const finalRouter = user?.id ? userRouter : guestRouter;
  return <RouterProvider router={finalRouter} />;
}
