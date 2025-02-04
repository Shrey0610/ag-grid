import React from 'react';
import './App.css';
import { Route, HashRouter } from 'react-router-dom';
import DisplayGrid from './components/grid/grid';

export default function App() {
  return (
    <HashRouter>
      <Route path="/" element={<DisplayGrid />} exact />
    </HashRouter>
  );
}
