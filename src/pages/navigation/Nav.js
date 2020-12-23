import React from 'react'
// import { Link } from 'react-router-dom'
import './styles.css';
import sdia from '../../assets/sdia-logo.png'

export default function Nav() {
    // const scrollToContact = () => {
    //     window.scrollTo({top: 1000, behavior: 'smooth'})
    // }
    return (
        <div className="nav">
            <div className="nav__title">
                <img src={sdia} alt="sdia logo"/>
                <h4>SDIA</h4>
            </div>
            <ul>
                {/* <li><a href="#about">about</a></li>
                <li>
                    <Link onclick={scrollToContact}>
                        <a href="#contact">contact</a>
                    </Link>
                </li> */}
                <li><a href="https://discord.gg/a7krQrhqtg" className="nav__ctoa">join our discord</a></li>
            </ul>
        </div>
    )
}
