import React from 'react';



const AppointmentsByDate = ({ appointments }) => {
    let i = 0;
    if (appointments.length > 0) {
        i++;
    }

    return (
        <div>
            <h1>Appointments : {appointments.length}</h1>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Service</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map(app => 
                    
                    <tr key = {app._id}>
                        <th scope="row">{i++}</th>
                        <td>{app.name}</td>
                        <td>{app.age}</td>
                        <td>{app.service}</td>
                    </tr>
                        )}
                </tbody>
            </table>

        </div>
    );
};

export default AppointmentsByDate;