
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Contact from "./Contact";
import Login from "./Login";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/contact", element: <Contact /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <NotFound /> },
]);

export default router;
