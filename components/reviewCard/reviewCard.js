import React from 'react'
import style,{injectGlobal} from 'styled-components'
import StarRatingComponent  from 'react-star-rating-component'

const HeadCard = style.div`
    display:flex;
    flex-direction:row;
`

const FlexItem = style.div`
    flex:${props => props.flex}
`

export default class ReviewCard extends React.Component {
    render(){
        return(
            <div className="card" style={{width:'20rem'}} >
            <div className="card-body">
                <HeadCard>
                    <FlexItem flex={1} >
                        <img src={this.props.userImage} alt="" width={50} className="rounded-circle" />
                    </FlexItem>
                    <FlexItem flex={3} >
                        <h5 className="card-title">{this.props.userName}</h5>
                        <h6 className="card-subtitle mb-2 text-muted"><StarRatingComponent starCount={5} value={this.props.star} /></h6>
                    </FlexItem>
                </HeadCard>
              <p className="card-text">{this.props.comment}</p>
            </div>
          </div>
        )
    }
}