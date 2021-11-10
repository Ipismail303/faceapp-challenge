import React from 'react'
import WorkCard from '../Work card/WorkCard'
import './WorkingSection.scss'
export default function WorkingSection() {
    return (
        <section className="working-section">
            <div className="working-section-wrapper">
                <div className="working-description">
                    <h1 className="working-heading">How it works</h1>
                    <p className="working-description">Mobile banking differ from mobile payments, which <br/> invokes the use of a mobile device</p>
                </div>
                <div className="working-card-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" className="how-it-work-path" width="1237.164" height="259.333" viewBox="0 0 1237.164 259.333">
                        <path id="how_it_work_-_path" data-name="how it work - path" d="M-12886.322-12384.076s139.893-191.084,346.2-179.991,273.151,248.982,509.736,257.647,379.849-235.4,379.849-235.4" transform="translate(12887.021 12565.017)" fill="none" stroke="#707070" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" stroke-dasharray="8" opacity="0.579"/>
                    </svg>
                    <WorkCard
                        image="information.svg"
                        title="Information"
                        description="Enter you information Ensure your details safe and more"
                    />
                    <WorkCard
                        image="Data Secure.svg"
                        title="Data Secure"
                        description="Sending money faster & easier with end to end encryption"
                    />
                    <WorkCard
                        image="Add cards.svg"
                        title="Add Cards"
                        description="Add multiple cards and track your daily expenses with quality interface"
                    />
                </div>
            </div>
        </section>
    )
}
