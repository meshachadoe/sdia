import React from 'react'
import './styles.css';
import sdia from '../../assets/sdia-logo.png'

export default function Nav() {
    return (
        <div className="nav">
            <div className="nav__title">
                <img src={sdia} alt="sdia logo"/>
                <h4>SDIA</h4>
            </div>
            <ul>
                <li>about</li>
                <li>contact</li>
                <li>join our discord</li>
            </ul>
        </div>
    )
}
