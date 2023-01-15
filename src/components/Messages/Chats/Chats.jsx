import cls from './Chats.module.css'
import Dialogue from "./Dialogue/Dialogue";
import {NavLink} from "react-router-dom";

const Chats = () => {
    return (
        <div className={cls.chats + ' content'}>
            <h3>Active chats</h3>

            <NavLink to={'/messages/1'}>
                <Dialogue
                    name={'Chester Lee'}
                    img={'https://i.pinimg.com/564x/cb/2d/cd/cb2dcdcf7568945c9414acc0524fcbbb.jpg'}
                    preview={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, rerum!'}
                ></Dialogue>
            </NavLink>

            <NavLink to={'/messages/2'}>
                <Dialogue
                    name={'Remi Song'}
                    img={'https://i.pinimg.com/564x/1b/53/1c/1b531c912062d55cab75962bdb0fc45e.jpg'}
                    preview={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, rerum!'}
                ></Dialogue>
            </NavLink>

        </div>
    )
}

export default Chats


