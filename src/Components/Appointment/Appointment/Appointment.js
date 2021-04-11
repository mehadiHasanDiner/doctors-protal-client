import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavbarHeader from '../../Shared/NavbarHeader/NavbarHeader';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedData] = useState(new Date());
    const handleDateChange = date => {
        setSelectedData(date);
    }
    return (
        <div>
            <NavbarHeader></NavbarHeader>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <BookAppointment date = {selectedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;