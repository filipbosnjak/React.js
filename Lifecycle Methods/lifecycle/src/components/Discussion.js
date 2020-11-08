import React, { Component } from 'react'


class Discussion extends Component {

    constructor(){
        super();
        this.state = {
            title: 'Title',
            currentTime: String(new Date())
        }
    }

    //Called 4th - after render - Here we can start the processes necessary for the component to work as we want
    componentDidMount(){
        this.liveTime = setInterval(() => {
            console.log('tick')
            this.setState({
                currentTime: String(new Date())
            })
        } , 1000)
    }

    componentWillUnmount(){
        console.log('unmounting');
        clearInterval(this.liveTime)
    }

    render() {

        const {title , currentTime} = this.state;

        return (
            <div>
                <h1>{title}</h1>
                <div>{currentTime}</div>
            </div>
        )
    }
}
export default  Discussion;