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
import Detail from "./pages/Detail";

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
      <>
        <TopHeader />
        <PageContainer>
          <Navbar />
          About
        </PageContainer>
      </>
    ),
  },
  {
    path: "deneme",
    element: (
      <>
        <TopHeader />
        <PageContainer>
          <Navbar />
          deneme ekranı
        </PageContainer>
      </>
    ),
  },
  {
    path: "/",
    element: (
      <>
        <TopHeader />
        <PageContainer>
          <Navbar />
          <Detail />
        </PageContainer>
      </>
    ),
    children: [
      {
        path: "/products/:id",
        element: (
          <>
            <TopHeader />
            <PageContainer>
              <Navbar />
              <Detail />
            </PageContainer>
          </>
        ),
      },
    ],
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
