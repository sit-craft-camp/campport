import React from 'react'

export default class CampHeader extends React.Component{
    render() {
        return (
            <div>
                <hr />
                <h1>{ this.props.title }</h1>
                <img src={ this.props.icon } alt=""/>
                <hr />
            </div>
        )
    }
}