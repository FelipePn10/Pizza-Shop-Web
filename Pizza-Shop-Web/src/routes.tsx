import { createBrowserRouter } from "react-router-dom";

import { Dashboard } from "./pages/app/dashboard/dashboard";
import { SingIn } from "./pages/auth/sign-in";
import { SingUp } from "./pages/auth/sign-up";
import { PolicesTerms } from "./pages/policesAndTerms/policesTerms";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { Orders } from "./pages/app/orders/orders";
import { NotFound } from "./pages/404/404";
import { Error } from "./pages/error/error-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/orders", element: <Orders /> },
    ],
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/sign-in", element: <SingIn /> },
      { path: "/sign-up", element: <SingUp /> },
    ],
  },

  {
    path: "/",
    children: [{ path: "/policesTerms", element: <PolicesTerms /> }],
  },
  {
    path: '*',
    element: <NotFound />
  }
]);
