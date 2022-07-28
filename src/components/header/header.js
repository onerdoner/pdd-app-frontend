import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './header.css';

const carImgUrl = 'https://toppng.com/uploads/preview/car-11549451816vveciq8qbi.png'

const Header =() => {
    return (
        <div className="header-wrapper">
        <Link to = '/'><img className="imgCar" src ={carImgUrl} alt = "car" /></Link>
        <Link to ='/'> Home </Link>
        </div>
    )
}

export default Header;