import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, price, name, description, img } = service;

    return (
        <div className="service">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>{price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${id}`}><button className="btn btn-warning">Book {name.toLowerCase()}</button></Link>
        </div>
    );
};

export default Service;