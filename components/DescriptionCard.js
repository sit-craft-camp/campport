import React from 'react'
import PropTypes from 'prop-types'

export default class DescriptionCard extends React.Component {
    render() {
        return (
            <div className='card' style={{width: '30rem'}}>
                <div className='card-body'>
                    <h4 class="card-title">รายละเอียด</h4>
                    <p class="card-text">{ this.props.description }</p>
                </div>
          </div>
        )
    }
}

DescriptionCard.propsType = {
    description: PropTypes.string.isRequired
}