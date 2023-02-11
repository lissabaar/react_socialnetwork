import cls from './Posts.module.css'
import Post from "./Post/Post";
import React from 'react';


const Posts = (props) => {
    let newPostElm = React.createRef()

    let updateCurrentValue = () => {
        let val = newPostElm.current.value
        props.updateCurrentValue(val)
    }

    function addPost() {
        props.addPost()
    }

    let postsElements = props.posts.map(p => (
        <Post
            name={p.name}
            date={p.date}
            text={p.text}
            img={p.img}
            likes={p.likes}/>
    ))
    return (
        <div className={'container ' + cls.posts}>
            <form className={cls.add_post_form + ' content'} action="javascript:void(0)">
                <textarea className={'textarea'}
                          placeholder={'Add a post...'}
                          ref={newPostElm}
                          value={props.currentValue}
                          onChange={updateCurrentValue}
                />
                <button className={'button'} onClick={addPost}>Add Post</button>
            </form>
            {postsElements}
        </div>
    )
}

export default Posts
