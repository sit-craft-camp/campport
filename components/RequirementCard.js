import React from 'react'
import PropTypes from 'prop-types'

export default class RequirementCard extends React.Component {

    render() {
        const { requirements } = this.props
        return (
            <div className='card' style={{width: '100%'}}>
                <div className='card-body'>
                    <h4 classname='card-title'>เกณฑ์การรับสมัคร</h4>
                        <ul className="card-text list-group">
                            { requirements.map((requirement) =>
                            <li className="list-group-item">{ requirement }</li>) }
                        </ul>
                </div>
            </div>
        )
    }
}

RequirementCard.propTypes = {
    requirements: PropTypes.array.isRequired
}