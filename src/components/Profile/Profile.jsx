import cls from './Profile.module.css'
import Posts from "./Posts/Posts";
import Info from "./Info/Info";


const Profile = () => {
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
            <Posts/>
        </div>
    )
}

export default Profile