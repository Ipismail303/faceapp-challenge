import React from 'react'
import MainButton from '../Button/MainButton'
import './LandingSection.scss'

export default function LandingSection() {
    return (
        <section className="landing-section">
            <div className="landing-wrapper">
                <div className="landing-content">
                    <div className="landing-content-wrapper">
                        <p>30 days free trial</p>
                        <h1 className="main-header">Save your <br/> time & less <br/> expense.</h1>
                        <p className="main-description">It is India's largest mobile payments and <br/> commerce platform.</p>
                        <MainButton
                            children="Get started"
                        />
                    </div>
                </div>
                <img className="landing-image" src="/images/spotlight - image.png" alt="" />
            </div>
        </section>
    )
}
