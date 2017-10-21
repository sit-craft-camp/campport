import React from 'react'
import Style,{injectGlobal} from 'styled-components'
import Router from 'next/router'
import Link from 'next/link'

injectGlobal([`
    body{
        background-color:#fff2ce;
    }
`])

const NavbarItem = Style.a`
    cursor:pointer;
    display:block;
    flex:${props=>props.flex};
    text-align:center;
    background-color:#f7e494;
    padding:5px;
    transition:all 0.5s ease;
    &:hover{
        background-color:#ffc107;
    }
`
    
    const Navbar = Style.div`
    display:flex;
    flex-direction:row;
    padding:0vw 20vw 0vw 20vw;
    height:auto;
    border:#fff2b8 solid thin;
    background-color:#fffdf5;
`


export default class MainNavbar extends React.Component{
    render(){
        const { NavData } = this.props
        return(
            <Navbar>
                {
                    NavData.map((val)=><NavbarItem flex={1} onClick={()=>Router.push({pathname:val.pathname})}><b>{val.title}</b></NavbarItem>)
                }
            </Navbar>
        )
    }
}