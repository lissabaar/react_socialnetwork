import cls from './ActiveChats.module.css'
import Dialogue from "./Dialogue/Dialogue";


const ActiveChats = (state) => {

    let dialoguesElements = state.dialogues.map(d => (
        <Dialogue
            userId={d.id}
            name={d.name}
            img={d.img}
            preview={d.lastMsg}
        ></Dialogue>
    ))

    return (
        <div className={cls.chats}>
            <h3>Active chats</h3>
            {dialoguesElements}
        </div>
    )
}

export default ActiveChats


