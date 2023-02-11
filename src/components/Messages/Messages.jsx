import cls from './Messages.module.css'
import ActiveChatsContainer from "./ActiveChats/ActiveChatsContainer";
import OpenChatContainer from "./OpenChat/OpenChatContainer";


const Messages = (props) => {
    return (
        <div className={'container'}>
            <div className={cls.messages}>
                <ActiveChatsContainer store={props.store}/>
                <OpenChatContainer store={props.store}/>
            </div>
        </div>
    )
}

export default Messages