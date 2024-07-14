import React from 'react';
import './deleteservice.css';
const DeleteService = () => {
    return (
        <div class="container2">
        <h2>Delete Service</h2>
        <form action="/delete-service" method="post">
            <label for="serviceName">Service Name:</label>
            <input type="text" id="serviceName" name="serviceName" required/>

            <label for="serviceId">Service ID:</label>
            <input type="text" id="serviceId" name="serviceId" required/>

            <button type="submit">Delete</button>
        </form>
    </div>
    );
    };
    export default DeleteService
