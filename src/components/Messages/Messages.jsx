import cls from './Messages.module.css'
import Chats from "./Chats/Chats";
import OpenChat from "./OpenChat/OpenChat";
import {BrowserRouter, Routes} from "react-router-dom";

const Messages = () => {
    return (
        <div className={'container'}>
            <div className={cls.messages}>
                <Chats/>
                {/*<BrowserRouter>*/}
                {/*    <Routes>*/}
                {/*    </Routes>*/}
                {/*</BrowserRouter>*/}
                <OpenChat/>
            </div>
        </div>
    )
}

export default Messages