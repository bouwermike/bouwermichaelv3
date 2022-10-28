import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Writing from './pages/Writing'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "work",
    element: <Work />,
  },
  {
    path: "writing",
    element: <Writing />,
  },
  {
    path: "skill",
    element: <Skills />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

function App() {
  return (
    <div id="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
