import React from 'react'
import style,{injectGlobal} from 'styled-components'

// injectGlobal([`
//     *{
//         border:#000 solid thin;
//     }
// `])

const FooterContainer = style.div`
    text-align:center;
    display:flex;
    flex-direction:row;
    padding:10px 105px 10px 105px;
    background-color:#4e4a45;
`

const FooterItem = style.div`
    border-radius:5px;
    flex:${props=>props.flex};
    color:rgb(255, 255, 255);
    background-color:#3D3D3D;
    margin:4px;
`

const BoxHead = style.h1`
    border-radius:5px 5px 0px 0px;
    padding:14px 0px 14px 0px;
    font-size:18px;
    background-color:#1F1F1F;
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
                                <p>แคมป์พอร์ทเป็นเว็บไซต์ที่เผยแพร่ข่าวสารการจัดค่ายต่างๆ โดยมิได้เป็นผู้จัดค่ายนั้นด้วยตนเอง หากมีข้อสงสัยเกี่ยวกับค่ายสามารถสอบถามได้ที่ผู้จัดค่ายโดยตรง</p>
                            </div>                    	
                    </FooterItem>
                    <FooterItem flex={1} grow={5} >
                            <BoxHead>เกี่ยวกับบทความในแคมป์พอร์ท</BoxHead>
                            <div>
                                <p>บทความต่างๆ ในเว็บไซต์เป็นลิขสิทธิ์ของผู้เขียนซึ่งเป็นทีมงานของแคมป์พอร์ท ไม่อนุญาตให้คัดลอกส่วนหนึ่งส่วนใดหรือทั้งหมดของเว็บไซต์โดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษร</p>
                            </div>
                    </FooterItem>
            </FooterContainer>
        )
    }
}