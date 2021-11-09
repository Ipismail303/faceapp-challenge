import React from 'react'
import MainButton from '../Button/MainButton'
import './Header.scss'

export default function Header() {
    return (
        <header className="header">
            <div className="header-wrapper">
                <img src="/images/fastpay - logo.svg" className="header-logo" alt="" />
                <ul className="header-nav-links">
                    <li className="link">Home</li>
                    <li className="link">About</li>
                    <li className="link">Features</li>
                    <li className="link">Pricing</li>
                </ul>
                <div className="login-links">
                    <p className="login-link">Login</p>
                    <MainButton
                        children="Signup"
                    />
                </div>
            </div>
        </header>
    )
}
