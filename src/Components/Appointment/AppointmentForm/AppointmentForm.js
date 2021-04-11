import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')


const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.service = appointmentOn;
        data.date = date;
        data.created = new Date();
        console.log(data);
        closeModal()
    }



    return (
        <div>
            {/* <button onClick={openModal}>Open Modal</button> */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-center text-brand">{appointmentOn}</h2>
                <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" placeholder="Name" {...register("name", { required: true, maxLength: 80 })} className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <input type="number" placeholder="Mobile number" {...register("number", { required: true, maxLength: 12 })} className="form-control" />
                        {errors.number && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} className="form-control" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}

                    </div>

                    <div className="from-group row">
                        <div className="col-4">

                            <select {...register("gender", { required: true })} className="form-control">
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value=" Female"> Female</option>
                                <option value=" Not set"> Others</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}

                        </div>

                        <div className="col-4">
                            <input type="number" placeholder="Your Age" {...register("age", { required: true })} className="form-control" />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="col-4">
                            <input type="number" placeholder="Weight" {...register("weight", { required: true })} className="form-control" />
                            {errors.weight && <span className="text-danger">This field is required</span>}

                        </div>
                    </div>
                    <br />
                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-brand">Send</button>
                    </div>
                </form>




            </Modal>
        </div>
    );
};

export default AppointmentForm;