import React from 'react'
// import Logo from '../components/Logo'
import Image from '../components/Image'
import DescriptionCard from '../components/DescriptionCard'
import { Review } from '../components/Review'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

const CampDetails = () => (
    <div>
        {/* <Logo /> */}
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {/* <Image src="" /> */}
                    </div>
                </div>
				<div className="row">
					<div className="col">
					<DescriptionCard
                            description='"SIT CRAFT Camp" คือ พื้นที่แห่งการเรียนรู้ที่เปิดโอกาสให้กับน้องๆ ชั้นมัธยมศึกษาปีที่ 5 และ 6 ที่มีพื้นฐานทางด้านไอทีในสาขาต่างๆ มาร่วมกันเรียนรู้ขั้นตอนและกระบวนการในการพัฒนาซอฟแวร์ ภายใต้สถานการณ์ต่างๆ ที่เกิดขึ้นจริง ได้สัมผัสการใช้ชีวิตในรั้วมหาวิทยาลัย ภายใต้คณะเทคโนโลยีสารสนเทศ และรู้จักคณะเทคโนโลยีสารสนเทศมากขึ้น' />
					</div>
					<div className="col">
						{/* <Image src="" /> */}
					</div>
				</div>
				<div className="row">
					<Review>
						{/* <ReviewCard
							userImage=""
							userName=""
							comment="" />
						<ReviewCard
							userImage=""
							userName=""
							comment="" />
						<ReviewCard
							userImage=""
							userName=""
							comment="" /> */}
					</Review>
				</div>
            </div>
        </div>
        <Footer />
    </div>
)

export default CampDetails