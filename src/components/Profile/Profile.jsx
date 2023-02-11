import cls from './Profile.module.css'
import Info from "./Info/Info";
import PostsContainer from "./Posts/PostsContainer";


const Profile = (props) => {
    return (
        <div>
            <div className={'container'}>
                <div>
                    <img src="https://wallpaperaccess.com/full/425216.jpg" alt="header"
                         className={cls.header}/>
                </div>
                <Info/>
                <div className={'container__content ' + cls.tabs}>
                    Posts About Friends
                </div>
            </div>
            <PostsContainer/>
        </div>
    )
}

export default Profile