import React from 'react'
import Connect from './Connect Section/Connect'
import DownloadSection from './Download section/DownloadSection'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import LandingSection from './Landing section/LandingSection'
import NewsLetter from './NewsLetter section/NewsLetter'
import WorkingSection from './Working section/WorkingSection'

export default function Home() {
    return (
        <>
           <Header/>
           <LandingSection/> 
           <WorkingSection/>
           <DownloadSection/>
           <Connect/>
           <NewsLetter/>
           <Footer/>
        </>
    )
}
