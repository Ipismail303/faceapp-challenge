import React from 'react'
import MainButton from '../Button/MainButton'
import './NewsLetter.scss'

export default function NewsLetter() {
    return (
        <section className="news-letter-section">
            <form action="" className="news-letter">
                <h1>Subscribe News Letter</h1>
                <p>Financial transaction remotely using a mobile</p>
                <div className="input-field-wrapper">
                    <input type="email" name="email" id="email" placeholder="Enter your email." />
                    <MainButton
                        children="Get Started"
                    />
                </div>
            </form>
        </section>
    )
}
