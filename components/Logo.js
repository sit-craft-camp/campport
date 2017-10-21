import React from 'react'
import Style from 'styled-components'

const ImgLogo = Style.img`
    width:40%;
`
const LogoContainer = Style.div`
    text-align:center;
`

const Logo = () => (
    <LogoContainer>
        <ImgLogo src="/static/Logo-prod.svg" alt="CampPort Logo"/>
    </LogoContainer>
)

export default Logo