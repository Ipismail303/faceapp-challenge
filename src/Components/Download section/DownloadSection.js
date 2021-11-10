import React from 'react'
import './DownloadSection.scss'

export default function DownloadSection() {
    return (
        <section className="download-section">
            <div className="download-section-wrapper">
                <img src="/images/download.png" className="download-section-img" alt="" />
                <div className="download-section-content">
                    <div className="download-section-content-wrapper">
                        <h1>Download</h1>
                        <p className="download-description">
                            Download fast-at mobile banking app for <br/> IOS and Android.It help you banking <br/> quickly and more smartly.
                        </p>
                        <div className="btn-wrapper">
                            <button className="btn-download">
                                <img src="/images/App Store.svg" className="btn-icon" alt="" />
                                App Store
                            </button>
                            <button className="btn-download">
                                <img src="/images/Play Store.svg" className="btn-icon" alt="" />
                                Play Store
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
