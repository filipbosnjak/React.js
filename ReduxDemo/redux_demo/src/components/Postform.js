import React, { Component } from 'react'

class Postform extends Component {

    constructor(props) {
        super(props);
        this.state={
            title: '',
            body: ''
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={ (e) => {
                    e.preventDefault();
                    const post = {
                        title: this.state.title,
                        body: this.state.body
                    }
                    //Making POST request to the jsonplaceholder api
                    fetch('https://jsonplaceholder.typicode.com/posts' , {
                        method : 'POST',
                        headers : {
                            'content-type' : 'application/json'
                        },
                        body : JSON.stringify(post)
                    })
                    .then(response => response.json())
                    .then(data => console.log(data))
                }}>{/**Now we want to submit this data to our posts which is completly different component*/}
                    <div>
                        <label htmlFor="">Title: </label><br/>
                        <input type="text" value={this.state.title} name="title" id="title" onChange={ (e) => {
                            this.setState({title:e.target.value})
                        }}/>
                    </div>
                    <div>
                        <label htmlFor="">Body: </label><br/>
                        <textarea name="body" value={this.state.body} id="" cols="30" rows="10" onChange={ (e) => {
                            this.setState({body:e.target.value})
                        }}/>
                    </div>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}
export default Postform;