import cls from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={cls.navbar + ' container'}>
            <div className="container__content">
                <ul className="menu">
                    <li className={cls.item}><NavLink to="/profile">My Profile</NavLink></li>
                    <li className={cls.item}><NavLink to="/messages">Messages</NavLink></li>
                    <li className={cls.item}><NavLink to="/settings">Settings</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar