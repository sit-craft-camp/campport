import React from 'react'
import styled from 'styled-components'

const ReviewContent = styled.div`
    padding:5px;
    display:flex;
    flex-direction:column;
`

export default class ReviewCon extends React.Component{
    render(){
        const { reviewData,ReviewCard } = this.props
        return(
            <ReviewContent>
                {reviewData.map((data)=><ReviewCard {...data} /> )}
            </ReviewContent>
        )
    }
}