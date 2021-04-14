import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import AppointmentsByDate from '../AppointmentShortList/AppointmentShortList';
import Sidebar from '../Sidebar/Sidebar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';


const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [selectedDate, setSelectedData] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const handleDateChange = date => {
        setSelectedData(date);
    }

    useEffect(() => {
        fetch('http://localhost:5000/addAppointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAppointments(data));
    }, [selectedDate])


    return (
        <section>
<h4>Email: {loggedInUser.email}</h4>
            <div style={{ containerStyle }} className="container fluid row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-4 mt-5">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                
                {
                    appointments.length ?
                
                <div className="col-md-5">
                    <AppointmentsByDate appointments={appointments} ></AppointmentsByDate>
                </div>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
}
            </div>
        </section>
    );
};

export default Dashboard;