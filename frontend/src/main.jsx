import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

import App from "./App";
import AllBosses from "./pages/AllBosses";
import BossById from "./pages/BossById";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "souls",
        element: <AllBosses />,
        loader: ({ request }) => {
          const query = new URL(request.url).search;

          return axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/api/souls${query}`)
            .then((res) => res.data)
            .catch((err) => console.error(err));
        },
      },
      {
        path: "/souls/:soulId",
        element: <BossById />,
        loader: ({ params }) => {
          return axios
            .get(
              `${import.meta.env.VITE_BACKEND_URL}/api/souls/${params.soulId}`
            )
            .then((res) => res.data)
            .catch((err) => console.error(err));
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
