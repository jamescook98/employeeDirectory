import React, { useState, useEffect } from 'react';
import Header from './component/Header/Header.js';
import Table from './component/Table.js';
import './App.css';

function App() {

  return (
    <div>
      <Header title="Your Employees" />
      <Table />
    </div>
  );
}

export default App;
