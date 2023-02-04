import cls from './Post.module.css'
import {AiOutlineLike} from "react-icons/ai";

const Post = (props) => {
    return (
        <div className={cls.post + ' content'}>
            <img src={props.img} alt="avatar"
                 className={'userpic ' + cls.userpic}/>
            <div className={cls.name}>{props.name}</div>
            <div className={cls.date}>2 hrs ago</div>
            <div className={cls.text}>{props.text}</div>
            <div className={cls.likes}><AiOutlineLike/>{props.likes} likes</div>
        </div>

    )
}

export default Post

