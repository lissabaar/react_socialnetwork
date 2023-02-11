import React from 'react';
import {addPostActionCreator, updateCurrentValueActionCreator} from "../../../redux/old_store";
import Posts from "./Posts";


const PostsContainer = (props) => {
    let state = props.store.getState()

    function addPost() {
        let action = addPostActionCreator()
        props.store.dispatch(action)
    }

    let onPostChange = (val) => {
        let action = updateCurrentValueActionCreator(val)
        props.store.dispatch(action)
    }

    return (
       <Posts updateCurrentValue={onPostChange}
              addPost={addPost}
              posts={state.profilePage.posts}
              currentValue={state.profilePage.currentValue}/>
    )
}

export default PostsContainer
