import React from 'react';
import {senMsgActionCreator, updateCurrentMsgActionCreator} from "../../../redux/old_store";
import OpenChat from "./OpenChat";

const OpenChatContainer = (props) => {

    let state = props.store.getState()

    let updateCurrentMessage = (val) => {
        props.store.dispatch(updateCurrentMsgActionCreator(val))
    }

    let sendMessage = () => {
        props.store.dispatch(senMsgActionCreator())
    }

    return (
    <OpenChat messages={state.messagesPage.openChatMessages}
              currentValue={state.messagesPage.currentValue}
              sendMessage = {sendMessage}
              updateCurrentMessage = {updateCurrentMessage}/>
    )
}

export default OpenChatContainer