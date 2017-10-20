import React from 'react'
import { CampDetail } from '../styles/camp-detail'
// import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Title from '../components/Title'
import DescriptionCard from '../components/DescriptionCard'
import RequirementCard from '../components/RequirementCard'
// import Review from '../components/Review'
import Gallery from '../components/Gallery'
import SubmitButton from '../components/SubmitButton'

export const CampDetails = () => (
    <CampDetail>
        {/*<Navbar />*/}
        <HeroImage src="/static/SITCRAFTCamp.png" />
        <Title text="SIT CRAFT Camp #1" />
        <DescriptionCard
            description='"SIT CRAFT Camp" คือ 
            พื้นที่แห่งการเรียนรู้ที่เปิดโอกาสให้กับน้องๆ 
            ชั้นมัธยมศึกษาปีที่ 5 และ 6 ที่มีพื้นฐานทางด้านไอทีในสาขาต่างๆ 
            มาร่วมกันเรียนรู้ขั้นตอนและกระบวนการในการพัฒนาซอฟแวร์ 
            ภายใต้สถานการณ์ต่างๆ ที่เกิดขึ้นจริง ได้สัมผัสการใช้ชีวิตในรั้วมหาวิทยาลัย 
            ภายใต้คณะเทคโนโลยีสารสนเทศ และรู้จักคณะเท   คโนโลยีสารสนเทศมากขึ้น' />
        <RequirementCard
            requirements={["ม.4-6","สายการเรียนวิทย์-คณิต/วิทย์-คอม/ศิลป์-ภาษา","เกรดเฉลี่ย 2.5 ขึ้นไป"]}
            />
        {/*<Review
            />*/}
        <Gallery
            />
        <SubmitButton
            href="" />
    </CampDetail>
)

export default CampDetails