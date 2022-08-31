import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "../src/index.css";
import { LoginView, HomeView } from "../src/components/view/";
import Layout from "./components/composite/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LoginView />} />
          <Route path="/home" element={<HomeView />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
