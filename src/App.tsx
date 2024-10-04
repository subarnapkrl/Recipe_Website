import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import AppLayout from "./components/layout/AppLayout";
import Search from "./pages/Search";
import CategoriesDetail from "./pages/CategoriesDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/categories",
          element: <Categories />,
        },
        {
          path: "/categories/:id",
          element: <CategoriesDetail />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/search",
          element: <Search />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
