import React, { Component } from 'react'


//Lifecycle methods - each react component has a lifecycle i.e. phases of existence. 
//There are three of phases: Mounting, Updating and Unmounting


class Workflow extends Component {

    //1.)
    constructor(){
        super();
        this.state = {
            pageTitle: 'Title'
        };//
        console.log('constructor()')
    }    

    //2.)
    //Updates internal state based on passed props
    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps()')
    }

    //4.)
    componentDidMount(){
        console.log('componentDidMount()')
    }

    //5.)
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate()')
        return true;
    }

    //7.)
    getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate()')
    }

    //8.)
    componentDidUpdate() {
        console.log('componentDidUpdate()')
    }

    //Last - executes after component unmounts
    componentWillUnmount(){
        //Here we perform all of our clean up - shutting down processes, live data feed etc.
        setTimeout(() => {
            console.log('componentWillUnmount()')
        } , 0)
    }


    handleClick = () => {
        console.log('Button clicked')
        this.setState({pageTitle: 'Workflow'})
    } 

    handleKeyUp = (e) => {
        this.setState({
            inputDetails: e.target.value
        })
    }

    //3.) Before componentDidMount() 6.) After update
    render() {

        console.log('render()')

        return (
            <div>
                <p>Workflow</p>
                <input type="text" onKeyUp={ (e) => {
                    this.handleKeyUp(e)
                }}/>
                <button onClick={this.handleClick}>Button</button>
            </div>
        )
    }
}
export default  Workflow;