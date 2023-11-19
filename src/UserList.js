import './UserList.css'; // Import your custom CSS file
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, ListGroup } from 'react-bootstrap';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Container className="user-list">
      <h1 className="user-list-title text-center mt-4 mb-3">List of Users</h1>
      <ListGroup className="user-list-items">
        {listOfUsers.map(user => (
          <ListGroup.Item
            key={user.id}
            className="user-list-item d-flex justify-content-between align-items-center"
            style={{ cursor: 'pointer', borderBottom: '1px solid #dee2e6' }}
          >
            <span className="user-list-item-name">{user.name}</span>
            <span className="user-list-item-email badge bg-primary rounded-pill">{user.email}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default UserList;
