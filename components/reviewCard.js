import React from 'react'
import style,{injectGlobal} from 'styled-components'

injectGlobal([`
    *{
        border:#000 solid thin;
    }
`])

const MainCard = style.div`
    display:flex;
    flex-direction:column;
    padding:10px;
`
const MainCardHead = style.div`
    display:flex;
    flex-direction:row;
    flex:1;
`
const MainCardImage = style.div`
    flex:1;
`
const MainCardHeadDetail = style.div`
    flex:4;
    display:flex;
    flex-direction:column;
`
const MainCardBody = style.div`
    flex:1;
    padding:5px;
`

export default class ReviewCard extends React.Component {
    render(){
        return(
            <MainCard>
                <MainCardHead>
                    <MainCardImage>
                        <img width={80} src={this.props.userImage} alt=""/>    
                    </MainCardImage> 
                    <MainCardHeadDetail>
                        <div>{this.props.userName}</div>
                        <div>{this.props.star}</div>    
                    </MainCardHeadDetail>         
                </MainCardHead>
                <MainCardBody>
                    {this.props.comment}
                </MainCardBody>
            </MainCard>
        )
    }
}