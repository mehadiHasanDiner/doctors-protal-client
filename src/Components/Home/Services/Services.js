import React from 'react';
import fluoride from '../../../images/fluoride.png';
import whiting from '../../../images/whiting.png';
import cavity from '../../../images/cavity.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: whiting
    },
    {
        name: 'Teeth Whiting',
        img: cavity
    }
]

const Services = () => {
    return (
        <section className="service-container mt-5">
            <div className="text-center">
                <h5 style={{ color: '#1cc7c1' }}>Our Service</h5>
                <h2 style={{ color: '#3a4256' }}>Services We Provide</h2>
            </div>

            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;