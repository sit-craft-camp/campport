import React from 'react'
import { ReviewCard } from '../index'
import style,{injectGlobal} from 'styled-components'

export default class Review extends React.Component {
    render(){
        return(
            <div>
            <center><ReviewCard date="14 oct 2017" userImage="https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.0-9/22195377_1725635537741020_6828151920495242605_n.jpg?oh=316e6494728d85233f8a6201706da18c&oe=5A6D7D97" userName="DOMMIE" star={4} comment="Hello It's me" /></center>
            <center><ReviewCard date="16 oct 2017" userImage="https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.0-9/22195377_1725635537741020_6828151920495242605_n.jpg?oh=316e6494728d85233f8a6201706da18c&oe=5A6D7D97" userName="DOMMIE" star={4} comment="Hello It's me" /></center>
            <center><ReviewCard date="18 oct 2017" userImage="https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.0-9/22195377_1725635537741020_6828151920495242605_n.jpg?oh=316e6494728d85233f8a6201706da18c&oe=5A6D7D97" userName="DOMMIE" star={4} comment="Hello It's me" /></center>
            <center><button type="button" class="btn btn-warning btn-lg">Read more</button></center>
            </div>
        )
    }
}