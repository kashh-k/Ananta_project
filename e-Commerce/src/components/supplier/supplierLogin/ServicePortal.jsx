import React from 'react';
import { useNavigate } from 'react-router-dom';
import './portal.css';

const ServicePortal = () => {
  const navigate = useNavigate();

  const handleAddServiceClick = () => {
    navigate('/addservice');
  };
  const handleDeleteServiceClick = () => {
    navigate('/deleteservice');
  };

  return (
    <div>
      <h1>Service Provider Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Customer Name</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Service ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>123-456-7890</td>
            <td>123 Main St, City</td>
            <td>12345</td>
            <td>Active</td>
          </tr>
        </tbody>
      </table>
      <button type="button" className="add-button" onClick={handleAddServiceClick}>
        Add Service
      </button>
      <button type="button" className="delete-button" onClick={handleDeleteServiceClick}>
        Delete Service
      </button>
    </div>
  );
};

export default ServicePortal;
