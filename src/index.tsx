import React from "react";
import ReactDOM from "react-dom";
import { PageHeader, Message, Radio } from '@arco-design/web-react';
import "@arco-design/web-react/dist/css/arco.css";
import { Routes, Router, Route } from 'react-router'

import { MainPage } from "./Blog/MainPage"

ReactDOM.render(
  <Routes>
    <Route path="/" element={<MainPage />}>
      <Route
        path="messages"
        element={<MainPage />}
      />
      <Route path="tasks" element={<MainPage />} />
    </Route>
    <Route path="about" element={<MainPage />} />
  </Routes>,
  document.getElementById('root')
);
