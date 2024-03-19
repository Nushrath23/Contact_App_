import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import CreateContact from "./pages/CreateContact/CreateContact.jsx";
import ViewAllContacts from "./pages/ViewAllContacts/ViewAllContacts.jsx";
import EditContact from "./pages/EditContact/EditContact.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}></Route>
      <Route path="create" element={<CreateContact />}></Route>
      <Route path="/" element={<ViewAllContacts />}></Route>
      <Route path="edit/:id" element={<EditContact />}></Route>
      <Route path="*" element={<div>404 Page not found</div>}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
