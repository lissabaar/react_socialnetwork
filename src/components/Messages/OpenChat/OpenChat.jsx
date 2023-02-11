import cls from './OpenChat.module.css'
import React from 'react';
import {senMsgActionCreator, updateCurrentMsgActionCreator} from "../../../redux/old_store";

const OpenChat = (props) => {

    let newMsgElm = React.createRef()

    let updateCurrentMessage = () => {
        props.updateCurrentMessage(newMsgElm.current.value)
    }

    let sendMessage = () => {
        props.sendMessage()
    }

    let messagesElements = props.messages.map(m => (
        <div className={cls.message}>
            <img src={m.userpic} alt="userpic" className={cls.userpic + ' userpic'}/>
            <div className={cls.text}>{m.text}</div>
            <div className={cls.time}>{m.time}</div>
        </div>
    ))

    return (
        <div className={cls.chat + ' content'}>
            {messagesElements}
            <textarea className={cls.textarea + ' textarea'}
                      ref={newMsgElm}
                      value={props.currentValue}
                      onChange={updateCurrentMessage}></textarea>
            <button className={'button ' + cls.button}
                    onClick={sendMessage}>Send
            </button>
        </div>

    )
}

export default OpenChat