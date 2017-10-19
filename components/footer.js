import React from 'react'
import style,{injectGlobal} from 'styled-components'

// injectGlobal([`
//     *{
//         border:#000 solid thin;
//     }
// `])

const FooterContainer = style.div`
    display:flex;
    flex-direction:row;
    padding:10px 105px 10px 105px;
    background-color:#4e4a45;
`

const FooterItem = style.div`
    flex:${props=>props.flex};
    color:rgb(255, 255, 255);
`

const BoxHead = style.h1`
    display:block;
    padding:14px 0px 14px 0px;
    font-size:18px;
`

const BoxInner = style.p`
    font-size:100%;
`

export default class FooterComponent extends React.Component{
    render(){
        return(            
            <FooterContainer>                
                    <FooterItem flex={1} >
                            <BoxHead>เกี่ยวกับข้อมูลค่ายต่างๆ</BoxHead>
                            <div>
                                <BoxInner>แคมป์พอร์ทเป็นเว็บไซต์ที่เผยแพร่ข่าวสารการจัดค่ายต่างๆ โดยมิได้เป็นผู้จัดค่ายนั้นด้วยตนเอง หากมีข้อสงสัยเกี่ยวกับค่ายสามารถสอบถามได้ที่ผู้จัดค่ายโดยตรง</BoxInner>
                            </div>                    	
                    </FooterItem>
                    <FooterItem flex={1} >
                            <BoxHead>เกี่ยวกับบทความในแคมป์พอร์ท</BoxHead>
                            <div>
                                <BoxInner>บทความต่างๆ ในเว็บไซต์เป็นลิขสิทธิ์ของผู้เขียนซึ่งเป็นทีมงานของแคมป์พอร์ท ไม่อนุญาตให้คัดลอกส่วนหนึ่งส่วนใดหรือทั้งหมดของเว็บไซต์โดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษร</BoxInner>
                            </div>
                    </FooterItem>
            </FooterContainer>
        )
    }
}