import cls from './Messages.module.css'
import ActiveChats from "./ActiveChats/ActiveChats";
import OpenChat from "./OpenChat/OpenChat";


const Messages = (state) => {
    return (
        <div className={'container'}>
            <div className={cls.messages}>
                <ActiveChats dialogues={state.state.activeChats}/>
                <OpenChat messages={state.state.openChatMessages}/>
            </div>
        </div>
    )
}

export default Messages