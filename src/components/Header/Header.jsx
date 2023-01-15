import cls from './Header.module.css'
import {BsFillMoonStarsFill} from "react-icons/bs";

const Header = () => {
    return (
        <header className={cls.header + ' container'}>
            <BsFillMoonStarsFill/> Social

        </header>
    )
}

export default Header