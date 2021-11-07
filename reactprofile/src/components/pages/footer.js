import React from 'react';
import "./style.css";
const Footer = ({ currentPage, handlePageChange }) => {
    return (
        
        <div className= "main-footer">
             <ul>
                    <li>Phone# 804-307-4651</li>
                    <li><a href="https://github.com/BenjaminBenitez92">github</a></li>
                    <li><a href="https://www.linkedin.com/in/benjamin-benitez-87244520a/">linkedin</a></li>
                </ul>
        </div>
    )
}
export default Footer;