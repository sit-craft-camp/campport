import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

const Container = styled.div`
    padding:15px;
    margin:10px 30px 10px 30px;
    border:#fff2b8 solid thin;
    border-radius:4px;
    background-color:#fffdf5;
`

const ContainerInnerCard = styled.div`
    justify-content:center;
    display:flex;
    flex-direction:row;
`

const CampContainerHead = styled.h2`
    font-weight:300;
`

export default class CampComponent extends React.Component{
    render(){
        const { CampCard,CampData } = this.props
        return(
            <Container>
                <CampContainerHead>{this.props.title}</CampContainerHead>
                <ContainerInnerCard>
                    {CampData.map((val)=><CampCard {...val} /> )}
                </ContainerInnerCard>
            </Container>
        )
    }
}