import React from 'react'
import PropTypes from 'prop-types'

export default class HeroImage extends React.Component {

    render() {
        return (
            <div style={{width:'100%',margin:6}}>
                <img src={ this.props.src } className="img-fluid mx-auto d-block" alt="Hero Image" />
            </div>
        )
    }
}

HeroImage.propTypes = {
    src: PropTypes.string.isRequired
}