import React from 'react'
import CampsContainer from '../components/CampsContainer'
import CampCard from '../components/CampCard'
import DefaultContent from '../components/DefaultPage'


const CampData = [
    {
        img:"https://craft.sitchallenge.com/static/images/logo-sit-craft-camp.svg",
        title:"SIT CRAFT Camp #1",
        date:"14 oct 2017",
        link:'/camp-details?campId=1133000'
    },
    {
        img:"https://craft.sitchallenge.com/static/images/logo-sit-craft-camp.svg",
        title:"SIT CRAFT Camp #1",
        date:"14 oct 2017",
        link:'/camp-details?campId=1133000'
    },
    {
        img:"https://craft.sitchallenge.com/static/images/logo-sit-craft-camp.svg",
        title:"SIT CRAFT Camp #1",
        date:"14 oct 2017",
        link:'/camp-details?campId=1133000'
    },
]

const Camps = () => (
    <DefaultContent>
        <CampsContainer title="ค่ายใหม่มาแรง" CampCard={CampCard} CampData={CampData} />
        <CampsContainer title="ค่ายที่เราคิดว่าคุณสนใจ" CampCard={CampCard} CampData={CampData} />
        <CampsContainer title="ค่ายอื่นๆ" CampCard={CampCard} CampData={CampData} />
    </DefaultContent>
)

export default Camps