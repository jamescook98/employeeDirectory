import React, { useState, useEffect } from 'react';
import Header from './component/Header/Header.js';
import Table from './component/Table.js';
import axios from "axios";
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const queryURL = "https://randomuser.me/api/?results=10";
  
  useEffect(() => {
    axios.get(queryURL)
      .then(res => {
        setUsers(res.data.results);
      });
  }, [])

  
  
  
  return (
    <div>
      <Header title="Your Employees" />
      <Table users={users} />
    </div>
  );
}

export default App;
