import cls from './Dialogue.module.css'
import {NavLink} from "react-router-dom";

const Dialogue = (props) => {
    return (
        <NavLink to={'/messages/' + props.userId}>
            <div className={cls.dialogue}>
                <img src={props.img} alt="userpic" className={'userpic ' + cls.userpic}/>
                <div className={cls.name}>{props.name}</div>
                <div className={cls.preview}>{props.preview}</div>
            </div>
        </NavLink>
    )
}

export default Dialogue