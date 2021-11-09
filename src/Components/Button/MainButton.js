import React from 'react'
import './MainButton.scss'

export default function MainButton({children}) {
    return (
        <button className="btn-main">
            {children}
        </button>
    )
}
