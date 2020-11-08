import { FETCH_POST , NEW_POST } from './types'

export const fetchPosts = () => dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(data => data.json())
            .then(data => dispatch({
                type: FETCH_POST,
                payload : data
            }))
    
}
