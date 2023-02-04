import cls from './Posts.module.css'
import Post from "./Post/Post";
import React from 'react';

const Posts = (posts) => {

    let newPostElm = React.createRef()

    function addPost() {
        posts.addPost(newPostElm.current.value)
    }

    let postsElements = posts.posts.map(p => (
        <Post
            name={p.name}
            text={p.text}
            img={p.img}
            likes={p.likes}/>
    ))
    return (
        <div className={'container ' + cls.posts}>
            <form className={cls.add_post_form + ' content'}>
                <textarea className={'textarea'} placeholder={'Add a post...'} ref={newPostElm} value={'test'}/>
                <button className={'button'} onClick={addPost}>Add Post</button>
            </form>
            {postsElements}
        </div>
    )
}

export default Posts
