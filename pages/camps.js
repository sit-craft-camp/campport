import React from 'react'
// import Logo from '../components/Logo'
import MainNavbar from '../components/MainNavbar'
// import CampHeader from '../components/CampHeader'
import { CampsContainer } from '../components/CampsContainer'
// import CampCard from '../components/CampCard'
import Footer from '../components/Footer'

const Camps = () => (
    <div>
        {/* <Logo /> */}
        <MainNavbar />
        {/* <CampHeader title="CAMPS" icon="/static/icon_camps.png" /> */}
        <h1>ค่ายใหม่มาแรง</h1>
        <CampsContainer>
            {/* <CampCard img="" title="" date="" />
            <CampCard img="" title="" date="" />
            <CampCard img="" title="" date="" />
            <CampCard img="" title="" date="" />
            <CampCard img="" title="" date="" />
            <CampCard img="" title="" date="" /> */}
        </CampsContainer>
        <Footer />
    </div>
)

export default Camps