import React from 'react'

export default class CampComponent extends React.Component{
    render(){
        const {Camp,campData} = this.props
        return(
            <div>
                {campData.map((camp)=> <Camp {...camp} /> )}
            </div>
        )
    }
}