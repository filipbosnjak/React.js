import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchPosts} from '../actions/postActions'


 class Posts extends Component {

    /*
    constructor(props) {
        super(props);
        this.state = {
            posts : []
        }
    }

    //Like useFetch -> executes when a component is mounted
    componentDidMount() {
        //console.log('componentWillMount')
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(data => data.json())
            .then(data => this.setState({ posts : data }))
    }
    */
    render() {
        return (
            <div>
                {this.state.posts.map( post => {
                    return (
                    <div key={post.id}>
                        <p>{post.title}</p>
                    </div>                    
                    )
                })}
            </div>
        )
    }
}
export default Posts;