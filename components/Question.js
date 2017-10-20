import React from 'react'

export default class Question extends React.Component{
    render(){
        return(
            <div>
                <div>Question</div>
                {this.props.children}
            </div>
        )
    }
}