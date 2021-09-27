import * as Types from './actionsType'

const init = {
    posts:[]          
}

export default function postReducer(state = init, {type, payload}){
    switch(type){
        case Types.ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {title: payload.title, textPost: payload.textPost, author:payload.author}]
            }
        
        default:
            return state;
    }
}