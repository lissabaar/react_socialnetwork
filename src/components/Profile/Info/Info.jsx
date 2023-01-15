import cls from"./Info.module.css"

import {
    HiDotsVertical,
    HiOutlineBriefcase,
    HiOutlineCalendar,
    HiOutlineLocationMarker,
    HiOutlinePlusCircle
} from "react-icons/hi";

const Info = () => {
    return (
        <div className={'container__content ' + cls.info}>
            <img src="https://i.pinimg.com/564x/8f/f0/c1/8ff0c1d829f0c83a76f3b3648e298149.jpg" alt="userpic"
                 className={cls.userpic + ' userpic'}/>
            <div className={cls.name}>Levi Kim, 23</div>
            <div className={cls.status}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, provident!</div>
            <div className={cls.buttons}>
                <button className={'button ' + cls.friend_req_btn}><HiOutlinePlusCircle/> Friend request</button>
                <button className={'button'}><HiDotsVertical/></button>
            </div>
            <ul className={cls.items}>
                <li className={cls.item}><HiOutlineCalendar/> March 23</li>
                <li className={cls.item}><HiOutlineLocationMarker/> Chicago</li>
                <li className={cls.item}><HiOutlineBriefcase/> Freelancer</li>
            </ul>
        </div>
    )
}

export default Info