import React from 'react';
import {addPostActionCreator, updateCurrentValueActionCreator} from "../../../redux/old_store";
import Posts from "./Posts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        currentValue: state.profilePage.currentValue
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateCurrentValue: (val) => {
            dispatch(updateCurrentValueActionCreator(val))
        },
    }
}


const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer
