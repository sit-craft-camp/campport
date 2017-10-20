import React from 'react'
import PropTypes from 'prop-types'

export default class RequirementCard extends React.Component {

    render() {
        return (
            <div className='card' style={{width: '40rem'}}>
                <div className='card-body'>
                    <h4 classname='card-title'>เกณฑ์การรับสมัคร</h4>
                        <ul className="card-text list-group">
                            { this.props.requirements.map((requirement) =>
                            <li className="list-group-item">{ requirement }</li>) }
                        </ul>
                </div>
            </div>
        )
    }
}

RequirementCard.propTypes = {
    requirement: PropTypes.array.isRequired
}