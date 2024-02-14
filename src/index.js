import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./containers/PageContainer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import TopHeader from "./components/TopHeader";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <TopHeader />
        <PageContainer>
          <Navbar />
          <Home />
        </PageContainer>
      </>
    ),
  },
  {
    path: "about",
    element: (
      <PageContainer>
        <Navbar />
        About
      </PageContainer>
    ),
  },
  {
    path: "deneme",
    element: (
      <PageContainer>
        <Navbar />
        deneme ekranı
      </PageContainer>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
