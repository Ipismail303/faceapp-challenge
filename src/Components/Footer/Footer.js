import React from 'react'
import './Footer.scss'

export default function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="about-section">
                    <img src="/images/fastpay - logo.svg" alt="" />
                    <p>It is India's largest mobile <br/> parments and commerce <br/> platform</p>
                    <ul className="social-icons-wrapper">
                        <li className="social-icon facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="8.573" height="16.006" viewBox="0 0 8.573 16.006">
                              <path id="Icon_awesome-facebook-f" data-name="Icon awesome-facebook-f" d="M9.62,9l.445-2.9H7.285V4.227A1.448,1.448,0,0,1,8.918,2.662h1.264V.2A15.409,15.409,0,0,0,7.939,0,3.536,3.536,0,0,0,4.154,3.9V6.107H1.609V9H4.154v7H7.285V9Z" transform="translate(-1.609)"/>
                            </svg>
                        </li>
                        <li className="social-icon twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16.486" height="13.39" viewBox="0 0 16.486 13.39">
                              <path id="Icon_awesome-twitter" data-name="Icon awesome-twitter" d="M14.792,6.718c.01.146.01.293.01.439a9.548,9.548,0,0,1-9.613,9.613A9.548,9.548,0,0,1,0,15.254a6.99,6.99,0,0,0,.816.042,6.767,6.767,0,0,0,4.195-1.444,3.385,3.385,0,0,1-3.159-2.343,4.261,4.261,0,0,0,.638.052,3.574,3.574,0,0,0,.889-.115A3.379,3.379,0,0,1,.669,8.13V8.088A3.4,3.4,0,0,0,2.2,8.517,3.384,3.384,0,0,1,1.151,4,9.6,9.6,0,0,0,8.118,7.534a3.814,3.814,0,0,1-.084-.774,3.382,3.382,0,0,1,5.848-2.312,6.652,6.652,0,0,0,2.144-.816A3.37,3.37,0,0,1,14.54,5.494a6.774,6.774,0,0,0,1.946-.523,7.263,7.263,0,0,1-1.695,1.747Z" transform="translate(0 -3.381)"/>
                            </svg>
                        </li>
                        <li className="social-icon linkedin">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12.288" height="12.288" viewBox="0 0 12.288 12.288">
                              <path id="Icon_awesome-linkedin-in" data-name="Icon awesome-linkedin-in" d="M2.75,12.288H.2v-8.2H2.75ZM1.475,2.965A1.482,1.482,0,1,1,2.951,1.476,1.488,1.488,0,0,1,1.475,2.965Zm10.81,9.323H9.743V8.295c0-.952-.019-2.172-1.325-2.172-1.325,0-1.527,1.034-1.527,2.1v4.062H4.346v-8.2H6.79V5.2h.036a2.677,2.677,0,0,1,2.41-1.325c2.578,0,3.052,1.7,3.052,3.9v4.506Z" transform="translate(0 0)"/>
                            </svg>
                        </li>
                    </ul>
                </div>
                <div className="links-section">
                    <h6>Fast Pay</h6>
                    <ul>
                        <li className="link">About</li>
                        <li className="link">Terms of use</li>
                        <li className="link">Privacy Policy</li>
                        <li className="link">How it works</li>
                        <li className="link">Contact Us</li>
                    </ul>
                </div>
                <div className="support-section">
                    <h6>Support</h6>
                    <ul>
                        <li className="support-link">Support Center</li>
                        <li className="support-link">24x7 Service</li>
                        <li className="support-link">Quick chat</li>
                    </ul>
                </div>
                <div className="contact-section">
                    <h6>Contact</h6>
                    <ul>
                        <li className="contact-link">Whatsapp</li>
                        <li className="contact-link">Support 24</li>
                    </ul>
                </div>
                <div className="copy-right-section">
                    <p>Designed by www.styep.com</p>
                </div>
            </div>
        </footer>
    )
}
