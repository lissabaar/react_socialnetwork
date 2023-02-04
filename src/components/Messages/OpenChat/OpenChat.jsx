import cls from './OpenChat.module.css'


const OpenChat = (state) => {
    let messagesElements = state.messages.map(m => (
        <div className={cls.message}>
            <img src={m.userpic} alt="userpic" className={cls.userpic + ' userpic'}/>
            <div className={cls.text}>{m.text}</div>
            <div className={cls.time}>{m.time}</div>
        </div>
    ))

    return (
        <div className={cls.chat + ' content'}>
            {messagesElements}
        </div>
    )
}

export default OpenChat