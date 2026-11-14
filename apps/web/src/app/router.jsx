import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import ForgotPasswordPage from "../features/auth/pages/ForgotPasswordPage";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import FeaturePlaceholderPage from "../features/dashboard/pages/FeaturePlaceholderPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/workspaces",
    element: <FeaturePlaceholderPage />,
  },
  {
    path: "/documents",
    element: <FeaturePlaceholderPage />,
  },
  {
    path: "/kanban",
    element: <FeaturePlaceholderPage />,
  },
  {
    path: "/whiteboard",
    element: <FeaturePlaceholderPage />,
  },
  {
    path: "/messages",
    element: <FeaturePlaceholderPage />,
  },
  {
    path: "/history",
    element: <FeaturePlaceholderPage />,
  },
  {
    path: "/settings",
    element: <FeaturePlaceholderPage />,
  },
]);

export default router;