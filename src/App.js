import "./App.css";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>Hello World</h1>
          <Link to="about">About Us</Link>
        </div>
      ),
    },
    {
      path: "about",
      element: <div>About</div>,
    },
    {
      path: "deneme",
      element: <div>deneme ekranı</div>,
    },
  ]);

  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );

  return (
    <div>
      hello
      <h1 className="text-3xl font-bold ">Hello world!</h1>
    </div>
  );
}

export default App;
