import React from 'react'
import sdia from '../../assets/sdia-logo.png'
import './styles.css'

export default function About() {
    return (
        <section className="about">
            <div className="about__heading">
                <div>
                    <h2>permias<br/>sdia</h2>
                    <img src={sdia} alt="sdia logo"/>
                </div>
                <h3>about us</h3>
            </div>
            <p><span className="bold">permias san diego</span>, otherwise known as the san diego indonesian association  (abbr. SDIA) was established in 2014 to serve as a community to accommodate the growing Indonesian student population in UC San Diego. It expanded in 2018 to accomodate the student population in surrounding San Diegan universities, San Diego State University, University of San Diego and Mesa College</p>
        </section>
    )
}
