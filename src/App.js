// App.js
import React from 'react';
import UserList from './UserList';
import { Container } from 'react-bootstrap';
import './App.css'; // Import your custom CSS file

function App() {
  return (
    <div className="App">
      <header className="bg-primary text-white py-4 mb-4">
        <Container>
          <h1>User Management</h1>
        </Container>
      </header>
      <Container>
        <UserList />
      </Container>
    </div>
  );
}

export default App;
