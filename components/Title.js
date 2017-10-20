import React from 'react'
import PropTypes from 'prop-types'

export default class Title extends React.Component {
    render() {
        return (
            <div>
                <h1>{ this.props.text }</h1>
            </div>
        )
    }
}

Title.propsType = {
    text: PropTypes.string.isRequired
}