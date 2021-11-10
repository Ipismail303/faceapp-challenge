import React from 'react'
import './Connect.scss'

export default function Connect() {
    return (
        <section className="connect-section">
            <div className="connect-section-wrapper">
                <div className="connect-content">
                    <div className="connect-content-wrapper">
                        <h1 className="connect-title">Connecting All <br/> Your Banking <br/> Needs.</h1>
                        <p className="connect-description">
                            Financial transaction remotely using a <br/> mobile device such as a smartphone or <br/> a tablet.
                        </p>
                        <button className="btn-connect-start">
                            Get started
                        </button>
                    </div>
                </div>
                <img src="/images/Connecting.png" className="connect-img" alt="" />
            </div>
        </section>
    )
}
