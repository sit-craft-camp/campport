import React from 'react'
import PropTypes from 'prop-types'

export default class QuestionCard extends React.Component {

  render () {
      return (
        <div className='card' style={{width: '40rem'}}>
          <div className='card-body'>
                  <div className="form-group">
                    <label for={ this.props.questionId }>
                      { this.props.question }
                    </label>
                    {
                      this.props.questionType === "normal" ? <textarea className="form-control" id={ this.props.questionId } rows={ this.props.rows } /> : <input type="file" className="form-control-file" id={ this.props.questionId } />
                    }
                  </div>
            </div>
        </div>
      )
    }
  }
  
  QuestionCard.propTypes = {
    questionId: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    rows: PropTypes.number.isRequired,
    questionType: PropTypes.string.isRequired
  }