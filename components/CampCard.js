import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

export default class CardCamp extends React.Component {
  render () {
    return (
      <div className='card' style={{width: '20rem',margin:15}}>
        <img className='card-img-top' src={ this.props.img } alt='Card image cap' />
        <div className='card-body'>
          <h4 className='card-title' > {this.props.title} </h4>
          <p className='card-text'>{this.props.date} </p>
          <Link href={this.props.link} className='btn btn-primary' >สำรวจ</Link>
        </div>
      </div>
    )
  }
}

CardCamp.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}
