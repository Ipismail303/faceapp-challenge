import React from 'react'
import './WorkCard.scss'

export default function WorkCard({image, title, description}) {
    return (
        <div className="work-card">
            <div className="card-image-wrapper">
                <img className="card-image" src={`/images/${image}`} alt="" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>
        </div>
    )
}
