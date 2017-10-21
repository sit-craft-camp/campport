import Logo from './Logo'
import MainNavbar from './MainNavbar/mainNavbar'
import Footer from './Footer'

const NavData = [
    {
        pathname:"/",
        title:"CAMP"
    },
    {
        pathname:'/about',
        title:"ABOUT"
    },
    {
        pathname:"/login",
        title:"LOGIN"
    }
]

export default class DefaultPage extends React.Component{
    render(){
        return(
            <div>
                <Logo />
                <MainNavbar NavData={NavData} />
                <div style={{padding:6}} >
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}