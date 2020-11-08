import { FETCH_POST , NEW_POST } from '../actions/types'

const initialState = {
    items : [],
    item : {}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState , action) {
    switch(action.type){
        case FETCH_POST:
            return {
                ...state,
                items: action.payload
            }
            default:
            return state;
    }
}