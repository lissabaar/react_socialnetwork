import ActiveChats from "./ActiveChats";

const ActiveChatsContainer = (props) => {

let state = props.store.getState()

    return (
        <ActiveChats dialogues={state.messagesPage.activeChats}/>
    )
}

export default ActiveChatsContainer


