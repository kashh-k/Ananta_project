import React from 'react';
import './add.css';
const AddService = () => {
    return(
    <div className="container">
        <h2>Add Service</h2>
        <form action="/submit" method="post">
            <label for="companyName">Company/Organization Name:</label>
            <input type="text" id="companyName" name="companyName" required/>

            <label for="serviceName">Service Name:</label>
            <input type="text" id="serviceName" name="serviceName" required/>

            <label for="serviceId">Service ID:</label>
            <input type="text" id="serviceId" name="serviceId" required/>

            <label for="serviceDescription">Service Description:</label>
            <input type="text" id="serviceDescription" name="serviceDescription" required/>

            <button type="submit">Add Service</button>
        </form>
    </div>
);
};
export default AddService
