import React from 'react'
import Logo from '../components/Logo'
import MainNavbar from '../components/MainNavbar/mainNavbar'
import Image from '../components/Image'
import DescriptionCard from '../components/DescriptionCard'
import Review from '../components/review'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import RequirementCard from '../components/RequirementCard'
import DefaultContent from '../components/DefaultPage'
import ReviewCard from '../components/ReviewCard'
import HeroImage from '../components/HeroImage'
import RegisterButton from '../components/registerbutton'

const CampData = {
	"1133000":{
		img:"/static/SITCRAFTCamp.png",
		title:"SIT CRAFT Camp #1",
		description:'"SIT CRAFT Camp" คือ พื้นที่แห่งการเรียนรู้ที่เปิดโอกาสให้กับน้องๆ ชั้นมัธยมศึกษาปีที่ 5 และ 6 ที่มีพื้นฐานทางด้านไอทีในสาขาต่างๆ มาร่วมกันเรียนรู้ขั้นตอนและกระบวนการในการพัฒนาซอฟแวร์ ภายใต้สถานการณ์ต่างๆ ที่เกิดขึ้นจริง ได้สัมผัสการใช้ชีวิตในรั้วมหาวิทยาลัย ภายใต้คณะเทคโนโลยีสารสนเทศ และรู้จักคณะเทคโนโลยีสารสนเทศมากขึ้น',
		review:[
			{
				userName:"d0mmie",
				star:5,
				comment:"สุดยอดไปเลย",
				userImage:"https://scontent.fbkk8-1.fna.fbcdn.net/v/t1.0-9/22195377_1725635537741020_6828151920495242605_n.jpg?oh=316e6494728d85233f8a6201706da18c&oe=5A6D7D97"
			},
			{
				userName:"d0mmie",
				star:5,
				comment:"จริงปะจ๊ะ",
				userImage:"https://scontent.fbkk8-1.fna.fbcdn.net/v/t1.0-9/22195377_1725635537741020_6828151920495242605_n.jpg?oh=316e6494728d85233f8a6201706da18c&oe=5A6D7D97"
			}
		],
		requirements:[
			'ไม่เป็นเด็ก',
			'ไม่เป็นผู้ใหญ่'
		]
	}
}

const Photoset = [
    {
        src: "/static/SITCRAFTCamp.png",
        width: 4,
        height: 2,
    },
    {
        src: "/static/SITCRAFTCamp.png",
        width: 4,
        height: 2,
    },
    {
        src: "/static/SITCRAFTCamp.png",
        width: 4,
        height: 2,
	},
	{
        src: "/static/SITCRAFTCamp.png",
        width: 2,
        height: 1,
	},
	{
        src: "/static/SITCRAFTCamp.png",
        width: 1,
        height: 1,
	},
	{
        src: "/static/SITCRAFTCamp.png",
        width: 2,
        height: 1,
	},
]

export default class CampDetails extends React.Component{
	static async getInitialProps({query}){
		return {query}
	}
	render(){
		const { query } = this.props
		return(
			<DefaultContent>
				<div>
					<div className="container">
						<div style={{marginTop:10,marginBottom:10,padding:3,backgroundColor:'#fff',borderColor:'#fff2b8'}} >
							<h2> {CampData[query.campId].title} </h2>
						</div>
						<div className="row">
							<div className="col">
								<HeroImage src={CampData[query.campId].img} ></HeroImage>
							</div>
						</div>
						<div className="row">
							<div className="col">
							<DescriptionCard
									description={CampData[query.campId].description} />
							</div>
							<div className="col">
							<Review reviewData={CampData[query.campId].review} ReviewCard={ReviewCard} />
							</div>
						</div>
						<div className="row">
							<div className="col">
								<RequirementCard requirements={CampData[query.campId].requirements} ></RequirementCard>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<Gallery Photoset={Photoset} ></Gallery>
							</div>
						</div>
						<div className="row">
							<div className="col" style={{textAlign:'center'}} >
								<RegisterButton />
							</div>
						</div>
					</div>
				</div>
			</DefaultContent>
		)
	}
}