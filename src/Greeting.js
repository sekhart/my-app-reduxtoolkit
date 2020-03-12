import React, {Component} from 'react'
import {GetMessage} from './utils'

export class Wishing extends Component {
    render() {
        return <GetMessage hourData={this.props.wishData} />
    }
}

export function Greeting(props) {
    return <h1>{props.greetingData}</h1>
}

export function DateFunc(props) {
    return <h6>{props.dateData}</h6>
}

// export default Greeting;
// export default Greetings;

